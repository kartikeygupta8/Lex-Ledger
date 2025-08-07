import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import ServiceCategories from "../components/ServiceCategories.jsx";
import FoundersSection from "../components/FoundersSection.jsx";
import ContactForm from "../components/ContactForm.jsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
import { Badge } from "@/components/ui/badge.jsx";

import {
  Building2,
  Calculator,
  FileText,
  Shield,
  Clock,
  Users,
  Calendar,
  CheckCircle,
  Zap,
  Star,
  Award,
  Target,
  Briefcase,
  Globe,
  HeadphonesIcon,
  Package,
  Percent,
  PlayCircle,
  BarChart3,
  UserCheck,
  Clock3,
  ShieldCheck,
  Code,
  Server,
  Calculator as CalcIcon,
  Lightbulb,
  Heart,
  Handshake,
  Receipt,
  Rocket,
  Shuffle,
  Globe2,
  BookOpen,
  ArrowRight,
  Phone,
  Check,
} from "lucide-react";
import ServicesSlider from "@/serviceCategory.jsx";
import {
  faqs,
  serviceBundles,
  serviceCategories,
  testimonials,
} from "@/static/service-data.js";
import EnhancedBlogPage from "./EnhancedBlogPage.jsx";
import HorizontalSlider from "@/components/HorizontalSlider.jsx";

const founders = [
  {
    name: "Kartikey Gupta",
    role: "Co-Founder & CTO",
    expertise: "Technology & Development",
    description:
      "A passionate developer with expertise in building scalable web applications and digital solutions.",
    icon: Code,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Rajeev Sarathe",
    role: "Co-Founder & COO",
    expertise: "Infrastructure & Operations",
    description:
      "An experienced infrastructure manager ensuring robust and reliable service delivery.",
    icon: Server,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Puru Raj Gupta",
    role: "Co-Founder & CFO",
    expertise: "Finance & Compliance",
    description:
      "A qualified Chartered Accountant providing expert financial guidance and compliance solutions.",
    icon: CalcIcon,
    color: "from-purple-500 to-purple-600",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    navigate(`/services/${category.id}`);
  };

  const handleGetStarted = () => {
    navigate("/services");
  };
   
  const handleBundleSelect = (category) => {
    navigate(`/bundles/${category.id}`);
  };
  const handleContactSubmit = (formData) => {
    console.log("Contact form submitted:", formData);
    // Handle form submission logic here
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Expert Legal & Financial Services
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Made Simple
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with verified chartered accountants and lawyers for
                professional guidance you can trust. From company formation to
                tax planning, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">
                      Company Formation
                    </h3>
                    <p className="text-sm text-gray-600">Quick & Easy Setup</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Calculator className="h-8 w-8 text-purple-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">
                      Tax Services
                    </h3>
                    <p className="text-sm text-gray-600">Expert Planning</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Zap className="h-8 w-8 text-red-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">
                      Immediate Help
                    </h3>
                    <p className="text-sm text-gray-600">10 Min Response</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <Shield className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900">Compliance</h3>
                    <p className="text-sm text-gray-600">100% Secure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Verified Professionals</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-semibold text-gray-900">
              Immediate Legal Service
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Need urgent legal help? Connect with a qualified lawyer within 10
            minutes, 24/7.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 shadow-lg"
            >
              Get Immediate Help Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-50"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
      {/* Service Categories */}
      <section id="services" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal and financial solutions to power your business
              growth. Click on any category to explore detailed services.
            </p>
          </div>
          <ServicesSlider
            serviceCategories={serviceCategories}
            handleCategorySelect={handleCategorySelect}
          />
        </div>
      </section>
      <section
        id="bundles"
        className="py-24 bg-gradient-to-r from-gray-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Bundles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save money with our carefully curated service bundles designed for
              different business needs.
            </p>
          </div>

          <HorizontalSlider
            items={serviceBundles}
            slidesPerView={3}
            renderCard={(bundle) => (
              <Card className="relative overflow-hidden border-0 h-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                {bundle.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div
                    className={`w-12 h-12 bg-gradient-to-r ${bundle.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <bundle.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {bundle.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {bundle.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {bundle.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {bundle.originalPrice}
                    </span>
                  </div>
                  <Badge className="bg-green-100 text-green-700 mb-4">
                    Save {bundle.savings}
                  </Badge>
                  <div className="space-y-1 text-sm text-gray-600 mb-4">
                    {bundle.services.slice(0, 3).map((service, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-3 w-3 text-green-600 mr-2" />
                        {service}
                      </div>
                    ))}
                    {bundle.services.length > 3 && (
                      <div className="text-blue-600 text-xs">
                        +{bundle.services.length - 3} more services
                      </div>
                    )}
                  </div>
                  </div>
                  <Button
                    onClick={() => handleBundleSelect(bundle)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Select Bundle
                  </Button>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </section>
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Lex&Ledger?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional legal and financial
              services with transparency, expertise, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Verified Professionals
              </h3>
              <p className="text-gray-600">
                All our experts are thoroughly vetted and certified
                professionals with proven track records.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quick Turnaround
              </h3>
              <p className="text-gray-600">
                Fast and efficient service delivery without compromising on
                quality or accuracy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                100% Secure
              </h3>
              <p className="text-gray-600">
                Your data and documents are protected with bank-level security
                and confidentiality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Percent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                No hidden fees or surprise charges. Clear, upfront pricing for
                all our services.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer support to assist you whenever you need
                help.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compliance Guarantee
              </h3>
              <p className="text-gray-600">
                We guarantee 100% compliance with all legal and regulatory
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting professional legal and financial services has never been
              easier. Follow these simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: 1,
                title: "Choose Service",
                description: "Select from our comprehensive range of services",
                icon: Target,
              },
              {
                step: 2,
                title: "Book Consultation",
                description: "Schedule a consultation with our experts",
                icon: Calendar,
              },
              {
                step: 3,
                title: "Expert Guidance",
                description: "Get professional advice and guidance",
                icon: Users,
              },
              {
                step: 4,
                title: "Documentation",
                description: "Complete all necessary documentation",
                icon: FileText,
              },
              {
                step: 5,
                title: "Ongoing Support",
                description: "Receive continued support and assistance",
                icon: HeadphonesIcon,
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-blue-600 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 bg-white/60 backdrop-blur-sm shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="blog" className="py-24">
        <EnhancedBlogPage />
      </section>
      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Founders Section */}
      <FoundersSection founders={founders} />

      {/* Contact Form */}
      <ContactForm onSubmit={handleContactSubmit} />
    </div>
  );
};

export default HomePage;
