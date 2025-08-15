import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import ServiceList from '../components/ServiceList.jsx';
import ServiceBundles from '../components/ServiceBundles.jsx';
import {
  Building2,
  Calculator,
  FileText,
  Zap,
  ArrowLeft,
  Package,
  Award,
  Target,
  Briefcase,
  Rocket,
} from 'lucide-react';
import { serviceCategories } from '@/static/service-data.js';

// const serviceCategories = {
//   company: {
//     id: "company",
//     title: "Company & Compliance",
//     description: "Complete business formation and compliance solutions",
//     icon: Building2,
//     color: "from-blue-500 to-blue-600",
//     services: [
//       {
//         id: 1,
//         name: "Company Formation & Registration",
//         price: "₹15,000",
//         duration: "7-10 days",
//         description:
//           "Streamline your business setup with expert guidance on company formation and registration processes.",
//         documents: [
//           "PAN and Aadhaar of Directors",
//           "Passport-size photographs",
//           "Proof of registered office (electricity bill/rent agreement)",
//           "MOA & AOA draft (we assist in preparation)",
//           "Digital Signature Certificates (DSC)",
//           "Director Identification Number (DIN)",
//         ],
//       },
//       {
//         id: 2,
//         name: "Corporate Governance & Compliance",
//         price: "₹25,000",
//         duration: "15-20 days",
//         description:
//           "Maintain robust corporate governance standards and ensure ongoing regulatory compliance.",
//         documents: [
//           "Minutes of board and general meetings",
//           "Shareholder agreements (if any)",
//           "Company bylaws",
//           "Statutory registers",
//         ],
//       },
//       {
//         id: 3,
//         name: "Regulatory Compliance & Filings",
//         price: "₹12,000",
//         duration: "5-7 days",
//         description:
//           "Stay compliant with all regulatory requirements through timely and accurate filings.",
//         documents: [
//           "PAN & TAN of the company",
//           "Financial statements",
//           "Tax audit report (if applicable)",
//           "Past filing history (if any)",
//         ],
//       },
//       {
//         id: 4,
//         name: "Company Incorporation",
//         price: "₹18,000",
//         duration: "10-15 days",
//         description:
//           "Complete incorporation services to establish your business as a recognized corporate entity.",
//         documents: [
//           "Agreement copies or case documents",
//           "Notices received (if any)",
//           "Business licenses or registrations (if relevant)",
//           "Power of Attorney (for representation)",
//         ],
//       },
//       {
//         id: 5,
//         name: "LLP Registration",
//         price: "₹8,000",
//         duration: "5-7 days",
//         description:
//           "Register your Limited Liability Partnership with full legal compliance and documentation.",
//         documents: [
//           "Financials and valuation reports",
//           "Board & shareholder resolutions",
//           "Due diligence checklist",
//           "Legal ownership documents",
//         ],
//       },
//       {
//         id: 6,
//         name: "Compliance Officer Services",
//         price: "₹30,000/month",
//         duration: "Ongoing",
//         description:
//           "Professional compliance officer services to oversee regulatory adherence and risk management.",
//         documents: [
//           "Financial statements for the last 3–5 years",
//           "Loan documents and charge details",
//           "Default notices (if any)",
//           "List of creditors and liabilities",
//         ],
//       },
//     ],
//   },
//   tax: {
//     id: "tax",
//     title: "Tax Services",
//     description: "Comprehensive tax planning and compliance services",
//     icon: Calculator,
//     color: "from-green-500 to-green-600",
//     services: [
//       {
//         id: 7,
//         name: "Tax Planning & Advisory",
//         price: "₹10,000",
//         duration: "3-5 days",
//         description:
//           "Strategic tax planning to optimize your financial efficiency and minimize tax burdens.",
//         documents: [
//           "Previous year's financial statements",
//           "Details of income, investments & expenses",
//           "Business structure documents",
//           "PAN, TAN, and GST certificates",
//           "Sector-specific data (for NGOs, trusts, etc.)",
//         ],
//       },
//       {
//         id: 8,
//         name: "Income Tax Return Filing",
//         price: "₹2,500",
//         duration: "1-2 days",
//         description:
//           "Expert assistance with accurate and timely income tax return preparation and filing.",
//         documents: [
//           "PAN, Aadhaar",
//           "Bank statements",
//           "Form 16/16A",
//           "Income details (business/profession/salary)",
//           "Investment proofs",
//           "Books of accounts (if applicable)",
//         ],
//       },
//       {
//         id: 9,
//         name: "Tax Compliance & Reporting",
//         price: "₹15,000",
//         duration: "7-10 days",
//         description:
//           "Comprehensive tax compliance services to ensure adherence to all tax regulations.",
//         documents: [
//           "Monthly sales & purchase registers",
//           "Tax invoices",
//           "GST returns",
//           "TDS returns",
//           "Financial statements",
//         ],
//       },
//       {
//         id: 10,
//         name: "Tax Assessments & Appeals",
//         price: "₹20,000",
//         duration: "30-45 days",
//         description:
//           "Professional representation during tax assessments and appeals processes.",
//         documents: [
//           "Income Tax Notices",
//           "Filed ITRs and computation",
//           "Assessment orders",
//           "Financial documents",
//           "Supporting evidence (in case of appeal)",
//         ],
//       },
//     ],
//   },
//   legal: {
//     id: "legal",
//     title: "Legal Services",
//     description: "Professional legal assistance and documentation",
//     icon: FileText,
//     color: "from-purple-500 to-purple-600",
//     services: [
//       {
//         id: 20,
//         name: "Contract Drafting",
//         price: "₹8,000",
//         duration: "3-5 days",
//         description:
//           "Professional contract drafting services for all your business needs.",
//         documents: [
//           "Business requirements",
//           "Party details",
//           "Terms and conditions",
//           "Legal compliance requirements",
//         ],
//       },
//       {
//         id: 21,
//         name: "Legal Documentation",
//         price: "₹12,000",
//         duration: "5-7 days",
//         description:
//           "Comprehensive legal documentation services for various business needs.",
//         documents: [
//           "Identity proofs",
//           "Business registration documents",
//           "Existing agreements (if any)",
//           "Regulatory requirements",
//         ],
//       },
//     ],
//   },
// };

const serviceBundles = [
  {
    id: "startup",
    name: "Startup Complete Package",
    description: "Everything you need to start your business",
    price: "₹45,000",
    originalPrice: "₹60,000",
    savings: "₹15,000",
    popular: true,
    icon: Rocket,
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "compliance",
    name: "Annual Compliance Bundle",
    description: "Complete yearly compliance management",
    price: "₹35,000",
    originalPrice: "₹50,000",
    savings: "₹15,000",
    icon: Award,
    color: "from-green-500 to-blue-600",
  },
  {
    id: "tax",
    name: "Tax Management Package",
    description: "Comprehensive tax planning and filing",
    price: "₹25,000",
    originalPrice: "₹35,000",
    savings: "₹10,000",
    icon: Target,
    color: "from-orange-500 to-red-600",
  },
  {
    id: "complete",
    name: "Business Complete Solution",
    description: "All-in-one business service package",
    price: "₹75,000",
    originalPrice: "₹100,000",
    savings: "₹25,000",
    icon: Briefcase,
    color: "from-purple-500 to-pink-600",
  },
];

const ServiceDetail = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log({categoryId},"categoryIdcategoryIdcategoryId")
 React.useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  useEffect(() => {
    
    if (categoryId && serviceCategories.find((i)=>i.id===categoryId)) {
      setSelectedCategory(serviceCategories.find((i)=>i.id===categoryId));
    } else {
      // Redirect to home if category not found
      navigate('/');
    }
  }, [categoryId, navigate]);

  const handleServiceSelect = (service) => {
    console.log('Selected service:', service);
    sessionStorage.setItem("serviceId",service.id);
    sessionStorage.setItem("serviceCategoryId",categoryId);
sessionStorage.setItem("bookingStep", "3");
navigate(`/getStarted/${categoryId}`);
    
  };

  const handleBundleSelect = (bundle) => {
    console.log('Selected bundle:', bundle);
    // Handle bundle selection logic here
    alert(`Selected bundle: ${bundle.name}`);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h1>
          <Button onClick={handleBackToHome}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // Filter bundles based on category
  const relevantBundles = serviceBundles.filter(bundle => {
    if (selectedCategory.id === "company") {
      return bundle.id === "startup" || bundle.id === "compliance";
    }
    if (selectedCategory.id === "tax") {
      return bundle.id === "tax";
    }
    if (selectedCategory.id !== "immediate") {
      return bundle.id === "complete";
    }
    return false;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div
            className={`w-20 h-20 bg-gradient-to-r ${selectedCategory.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
          >
            <selectedCategory.icon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {selectedCategory.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {selectedCategory.description}
          </p>
        </div>

        <ServiceList 
          services={selectedCategory.services} 
          onServiceSelect={handleServiceSelect}
        />

        {/* Related Bundles */}
        {relevantBundles.length > 0 && (
          <ServiceBundles 
            bundles={relevantBundles} 
            onBundleSelect={handleBundleSelect}
          />
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;

