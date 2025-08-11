import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Check, Star, Clock, Users, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BundlePage = () => {
  const navigate=useNavigate();
  const bundles = [
    {
      id: 1,
      name: "Startup Essentials Bundle",
      price: "₹35,000",
      originalPrice: "₹45,000",
      savings: "₹10,000",
      duration: "15-20 days",
      popular: true,
      description: "Everything you need to start your business legally and compliantly",
      features: [
        "Company Formation & Registration",
        "GST Registration",
        "PAN & TAN Registration",
        "Digital Signature Certificate (DSC)",
        "Director Identification Number (DIN)",
        "Basic Legal Documentation",
        "Tax Planning Consultation",
        "Compliance Calendar Setup"
      ],
      includes: [
        "Complete incorporation process",
        "All government registrations",
        "Basic tax setup",
        "Legal document templates",
        "3 months compliance support"
      ]
    },
    {
      id: 2,
      name: "Growth Business Bundle",
      price: "₹65,000",
      originalPrice: "₹85,000",
      savings: "₹20,000",
      duration: "20-25 days",
      popular: false,
      description: "Comprehensive solution for growing businesses with advanced compliance needs",
      features: [
        "All Startup Essentials features",
        "MSME/Udyam Registration",
        "Trademark Registration",
        "Advanced Tax Planning",
        "Corporate Governance Setup",
        "Employment Law Compliance",
        "Contract Templates & Review",
        "Monthly Compliance Support"
      ],
      includes: [
        "Everything in Startup Essentials",
        "IP protection services",
        "Advanced legal documentation",
        "Employment contracts",
        "6 months ongoing support"
      ]
    },
    {
      id: 3,
      name: "Enterprise Complete Bundle",
      price: "₹1,25,000",
      originalPrice: "₹1,65,000",
      savings: "₹40,000",
      duration: "30-45 days",
      popular: false,
      description: "Full-service package for established businesses and enterprises",
      features: [
        "All Growth Business features",
        "M&A Documentation Support",
        "Advanced Corporate Restructuring",
        "International Trade Setup (IEC)",
        "Foreign Investment Compliance",
        "Litigation Support",
        "Dedicated Account Manager",
        "24/7 Legal Helpline"
      ],
      includes: [
        "Everything in Growth Business",
        "International compliance",
        "M&A support",
        "Dedicated relationship manager",
        "12 months premium support"
      ]
    },
    {
      id: 4,
      name: "Tax Compliance Bundle",
      price: "₹25,000",
      originalPrice: "₹35,000",
      savings: "₹10,000",
      duration: "10-15 days",
      popular: false,
      description: "Comprehensive tax compliance and planning services",
      features: [
        "Income Tax Return Filing",
        "GST Registration & Filing",
        "TDS/TCS Compliance",
        "Tax Planning & Advisory",
        "Tax Assessment Support",
        "Refund Processing",
        "Annual Tax Health Check",
        "Quarterly Tax Reviews"
      ],
      includes: [
        "All tax registrations",
        "Monthly GST filing",
        "Annual ITR filing",
        "Tax planning sessions",
        "Ongoing tax support"
      ]
    },
    {
      id: 5,
      name: "Legal Protection Bundle",
      price: "₹45,000",
      originalPrice: "₹60,000",
      savings: "₹15,000",
      duration: "15-20 days",
      popular: false,
      description: "Complete legal protection and documentation for your business",
      features: [
        "Contract Drafting & Review",
        "Intellectual Property Registration",
        "Employment Law Documentation",
        "Privacy Policy & Terms",
        "Dispute Resolution Support",
        "Legal Risk Assessment",
        "Compliance Audit",
        "Legal Advisory Sessions"
      ],
      includes: [
        "Custom contract templates",
        "IP registration services",
        "Legal document review",
        "Risk assessment report",
        "Ongoing legal consultation"
      ]
    },
    {
      id: 6,
      name: "Quick Start Bundle",
      price: "₹15,000",
      originalPrice: "₹22,000",
      savings: "₹7,000",
      duration: "7-10 days",
      popular: false,
      description: "Fast-track business setup for immediate market entry",
      features: [
        "Express Company Registration",
        "Basic GST Registration",
        "PAN Application",
        "Bank Account Opening Support",
        "Basic Compliance Setup",
        "Startup India Registration",
        "Essential Legal Documents",
        "Quick Tax Setup"
      ],
      includes: [
        "Expedited registration process",
        "Basic compliance framework",
        "Essential documentation",
        "Banking assistance",
        "1 month support"
      ]
    }
  ];
 React.useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Service Bundles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive packages designed to meet your business needs at every stage. 
            Save money and time with our carefully curated service combinations.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Protection</h3>
            <p className="text-gray-600">Comprehensive legal and financial coverage for your business</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Dedicated team of CAs and lawyers for ongoing assistance</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Efficient</h3>
            <p className="text-gray-600">Streamlined processes to get your business running quickly</p>
          </div>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <Card 
              key={bundle.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                bundle.popular ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-lg'
              }`}
              onClick={()=>navigate(`/bundles/${bundle.id}`)}
            >
              {bundle.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {bundle.name}
                </CardTitle>
                <p className="text-gray-600 text-sm mb-4">{bundle.description}</p>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{bundle.price}</span>
                  <span className="text-lg text-gray-500 line-through">{bundle.originalPrice}</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700 w-fit">
                  Save {bundle.savings}
                </Badge>
                
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{bundle.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {bundle.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {bundle.features.length > 4 && (
                        <li className="text-sm text-gray-500 italic">
                          +{bundle.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Package Includes:</h4>
                    <ul className="space-y-1">
                      {bundle.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button 
                    className={`w-full ${
                      bundle.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Choose This Bundle
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Bundle?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Can't find the perfect bundle for your needs? Our experts can create a customized 
            package tailored specifically for your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Custom Bundle
            </Button>
            <Button size="lg" variant="outline">
              Speak with Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundlePage;

