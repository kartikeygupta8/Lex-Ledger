import React from "react";

export const ServiceDetailPage = ({selectedService}) => {
  const { name, price, duration, description, documents } = selectedService;

  return (
    <div className="font-poppins">
 

      {/* Page Intro */}
      <section className="bg-gray-100 py-10 text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </section>

      {/* Overview */}
      <section id="overview" className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Service Overview</h3>
        <p className="text-gray-700 leading-relaxed">
          Our comprehensive company formation service helps you establish your business legally and efficiently. We handle all the paperwork, regulatory compliance, and legal requirements to get your company up and running quickly.
        </p>
      </section>

      {/* Process Steps (Key Features) */}
      <section id="process" className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-600 mb-6">Our Process</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Initial Consultation",
              "Name Approval",
              "Document Preparation",
              "Digital Signature",
              "Government Filing",
              "Certificate & Compliance",
            ].map((title, i) => (
              <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <div className="text-blue-600 font-bold text-2xl mb-2">Step {i + 1}</div>
                <div className="font-medium text-gray-700">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-600 mb-6">Service Timeline</h3>
          <ul className="space-y-4">
            {[
              { step: "Name Reservation", days: "1-2 business days" },
              { step: "Document Preparation", days: "2-3 business days" },
              { step: "DSC & DIN Processing", days: "3-5 business days" },
              { step: "Government Filing & Approval", days: "7-10 business days" },
              { step: "Total Duration", days: "15-20 business days" },
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-between bg-white p-4 shadow rounded-md">
                <span className="font-medium">{item.step}</span>
                <span className="text-gray-600">{item.days}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Documents */}
      <section id="documents" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-blue-600 mb-6">Documents Required</h3>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {documents.map((doc, i) => (
              <li
                key={i}
                className="p-4 bg-white border rounded-md text-gray-700 shadow hover:shadow-md"
              >
                <i className="fas fa-file-alt text-blue-500 mr-2"></i> {doc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 text-center">
        <h3 className="text-2xl font-semibold text-blue-700">Service Pricing</h3>
        <div className="mt-4 text-3xl font-bold text-green-600 line-through">{price}</div>
        <div className="text-4xl text-black font-extrabold mt-2">₹12,000</div>
        <div className="text-sm text-gray-500 mt-1">Includes govt. fees, docs & charges</div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started Now
        </button>
      </section>
    </div>
  );
};
