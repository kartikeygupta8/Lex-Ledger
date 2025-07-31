import React, { useEffect, useState } from "react";
import BookingComponent from "../components/BookingComponent";
import { useNavigate, useParams } from "react-router-dom";
import { serviceCategories } from "@/static/service-data";

const BookingPage = () => {
  const navigate = useNavigate();
  const { categoryId: routeCategoryId } = useParams();

  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const serviceId = sessionStorage.getItem("serviceId");
    const categoryId = sessionStorage.getItem("serviceCategoryId");
    const step = sessionStorage.getItem("bookingStep");

    if (routeCategoryId) {
      const category = serviceCategories.find(cat => cat.id === routeCategoryId);

      if (category && category.services.length > 0) {
        setSelectedService(category.services[0]); 
        setBookingStep(3); 
            window.scrollTo({ top: 0, behavior: "smooth" });

      }
      return; 
    }

    // Normal booking session logic
    if (step) setBookingStep(parseInt(step));

    if (serviceId && categoryId) {
      const category = serviceCategories.find(cat => cat.id === categoryId);
      if (category) {
        const service = category.services.find(srv => srv.id === parseInt(serviceId));
        if (service) setSelectedService(service);
      }
    }
  }, [routeCategoryId]);

  const handleBackToHome = () => navigate("/");
  const handleBackToCategory = () => navigate("/services");

  return (
    <BookingComponent
      selectedService={selectedService}
      bookingStep={bookingStep}
      setBookingStep={setBookingStep}
      handleBackToHome={handleBackToHome}
      handleBackToCategory={handleBackToCategory}
    />
  );
};

export default BookingPage;
