import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import {
  Zap,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  Star,
} from 'lucide-react';

const immediateServices = [
  {
    id: 15,
    name: "Emergency Legal Consultation",
    price: "₹2,000",
    duration: "10 minutes",
    description:
      "Immediate legal advice for urgent matters requiring quick resolution.",
    features: [
      "Instant video/phone consultation",
      "Expert legal guidance",
      "Document review",
      "Next steps recommendation"
    ]
  },
  {
    id: 16,
    name: "Urgent Tax Query Resolution",
    price: "₹1,500",
    duration: "15 minutes",
    description:
      "Quick resolution of urgent tax-related queries and compliance issues.",
    features: [
      "Tax compliance guidance",
      "Filing deadline assistance",
      "Penalty avoidance strategies",
      "Documentation support"
    ]
  },
  {
    id: 17,
    name: "Business Emergency Support",
    price: "₹3,000",
    duration: "20 minutes",
    description:
      "Immediate business consultation for critical operational issues.",
    features: [
      "Crisis management advice",
      "Regulatory compliance check",
      "Risk assessment",
      "Action plan development"
    ]
  },
  {
    id: 18,
    name: "Document Verification",
    price: "₹1,000",
    duration: "5 minutes",
    description:
      "Quick verification and validation of important business documents.",
    features: [
      "Document authenticity check",
      "Compliance verification",
      "Error identification",
      "Correction guidance"
    ]
  }
];

const ImmediateService = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    urgency: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Immediate service request:', { selectedService, formData });
    alert('Your request has been submitted! We will contact you within 2 minutes.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Zap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Immediate Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get urgent legal and financial assistance within 10 minutes. 
            Our experts are standing by to help you resolve critical issues quickly.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              10-Minute Response
            </h3>
            <p className="text-gray-600">
              Get connected with an expert within 10 minutes of your request.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Expert Consultants
            </h3>
            <p className="text-gray-600">
              Qualified professionals with years of experience in their fields.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Confidential & Secure
            </h3>
            <p className="text-gray-600">
              All consultations are completely confidential and secure.
            </p>
          </div>
        </div>

        <div className="">
          {/* Services List */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Available Services
            </h2>
            <div className='flex gap-12'>
<div className="space-y-4 flex-1">
              {immediateServices.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg border ${
                    selectedService?.id === service.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-orange-600 border-orange-600">
                          {service.duration}
                        </Badge>
                        <span className="text-xl font-bold text-orange-600">
                          {service.price}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
                 {/* Request Form */}
          <div className='flex-1'>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-600" />
                  Request Immediate Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedService && (
                  <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Selected Service:
                    </h4>
                    <p className="text-orange-600 font-medium">
                      {selectedService.name} - {selectedService.price}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Urgency Level *
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    >
                      <option value="">Select urgency level</option>
                      <option value="critical">Critical - Need help now</option>
                      <option value="high">High - Within 1 hour</option>
                      <option value="medium">Medium - Within 2 hours</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Describe Your Issue *
                    </label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please describe your urgent issue in detail..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-1">
                          Response Time Guarantee
                        </h4>
                        <p className="text-sm text-yellow-700">
                          We guarantee to contact you within 10 minutes of form submission. 
                          Our experts will call you directly to discuss your issue.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-lg py-3"
                    disabled={!selectedService}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Request Immediate Assistance
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  {!selectedService && (
                    <p className="text-sm text-gray-500 text-center">
                      Please select a service above to continue
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
            </div>
            
          </div>

       
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Got immediate help with a critical tax issue. The expert called within 5 minutes!"
                </p>
                <p className="font-semibold text-gray-900">- Rajesh Kumar</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Emergency legal consultation saved my business deal. Highly recommended!"
                </p>
                <p className="font-semibold text-gray-900">- Priya Sharma</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional, quick, and exactly what I needed during a crisis."
                </p>
                <p className="font-semibold text-gray-900">- Amit Patel</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmediateService;

