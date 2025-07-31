import React,{ useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import "keen-slider/keen-slider.min.css";

import { Textarea } from "@/components/ui/textarea.jsx";
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
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  ChevronLeft,
  Star,
  Calendar,
  CreditCard,
  Check,
  Award,
  Target,
  Briefcase,
  Globe,
  HeadphonesIcon,
  Package,
  Percent,
  ChevronDown,
  PlayCircle,
  BarChart3,
  UserCheck,
  Clock3,
  ShieldCheck,
  Home,
  ArrowLeft,
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
} from "lucide-react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";

import ServicesSlider from "../serviceCategory";
import ImmediateService from "../pages/ImmediateService";
import EnhancedBlogPage from "../pages/EnhancedBlogPage";
// import BlogDetail from "./pages/BlogDetails";
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
const ServiceDetail=()=>{
   return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {renderNavigationButtons()}

        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold text-gray-900">
                Lex&Ledger
              </div>
            </div>
          </div>
        </header>

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {selectedCategory.services.map((service) => (
              <Card
                key={service.id}
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
                onClick={() => handleServiceSelect(service)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      {service.name}
                    </h3>
                    <Badge variant="outline" className="ml-4">
                      {service.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-xl break-all font-bold text-blue-600">
                      {service.price}
                    </span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Select Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Related Bundles */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Related Service Bundles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceBundles
                .filter(
                  (bundle) =>
                    (selectedCategory.id === "company" &&
                      (bundle.id === "startup" ||
                        bundle.id === "compliance")) ||
                    (selectedCategory.id === "tax" && bundle.id === "tax") ||
                    (selectedCategory.id !== "immediate" &&
                      bundle.id === "complete")
                )
                .map((bundle) => (
                  <Card
                    key={bundle.id}
                    className="relative overflow-hidden border-0 bg-white/60 backdrop-blur-sm"
                  >
                    {bundle.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-6">
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
                        <span className="text-lg text-gray-400 line-through">
                          {bundle.originalPrice}
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700"
                        >
                          Save {bundle.savings}
                        </Badge>
                      </div>
                      <Button
                        onClick={() => handleBundleSelect(bundle)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Select Bundle
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
}
function HomePage({
  currentView,
  setCurrentView,
  selectedCategory,
  setSelectedCategory,
  selectedService,
  setSelectedService,
  bookingStep,
  setBookingStep,
  handleBackToHome,
  handleGetStarted,
}) {
  // const [currentView, setCurrentView] = useState('home')
  // const [selectedCategory, setSelectedCategory] = useState(null)
  // const [selectedService, setSelectedService] = useState(null)
  // const [bookingStep, setBookingStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredTime: "",
    requirements: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const serviceCategories = [
    {
      id: "company",
      title: "Company & Compliance",
      description: "Complete business formation and compliance solutions",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
      services: [
        {
          id: 1,
          name: "Company Formation & Registration",
          price: "₹15,000",
          duration: "7-10 days",
          description:
            "Streamline your business setup with expert guidance on company formation and registration processes.",
          documents: [
            "PAN and Aadhaar of Directors",
            "Passport-size photographs",
            "Proof of registered office (electricity bill/rent agreement)",
            "MOA & AOA draft (we assist in preparation)",
            "Digital Signature Certificates (DSC)",
            "Director Identification Number (DIN)",
          ],
        },
        {
          id: 2,
          name: "Corporate Governance & Compliance",
          price: "₹25,000",
          duration: "15-20 days",
          description:
            "Maintain robust corporate governance standards and ensure ongoing regulatory compliance.",
          documents: [
            "Minutes of board and general meetings",
            "Shareholder agreements (if any)",
            "Company bylaws",
            "Statutory registers",
          ],
        },
        {
          documents: [
            "PAN & TAN of the company",
            "Financial statements",
            "Tax audit report (if applicable)",
            "Past filing history (if any)",
          ],
          id: 3,
          name: "Regulatory Compliance & Filings",
          price: "₹12,000",
          duration: "5-7 days",
          description:
            "Stay compliant with all regulatory requirements through timely and accurate filings.",
        },
        {
          documents: [
            "Agreement copies or case documents",
            "Notices received (if any)",
            "Business licenses or registrations (if relevant)",
            "Power of Attorney (for representation)",
          ],
          id: 4,
          name: "Company Incorporation",
          price: "₹18,000",
          duration: "10-15 days",
          description:
            "Complete incorporation services to establish your business as a recognized corporate entity.",
        },
        {
          documents: [
            "Financials and valuation reports",
            "Board & shareholder resolutions",
            "Due diligence checklist",
            "Legal ownership documents",
          ],
          id: 5,
          name: "LLP Registration",
          price: "₹8,000",
          duration: "5-7 days",
          description:
            "Register your Limited Liability Partnership with full legal compliance and documentation.",
        },
        {
          documents: [
            "Financial statements for the last 3–5 years",
            "Loan documents and charge details",
            "Default notices (if any)",
            "List of creditors and liabilities",
          ],
          id: 6,
          name: "Compliance Officer Services",
          price: "₹30,000/month",
          duration: "Ongoing",
          description:
            "Professional compliance officer services to oversee regulatory adherence and risk management.",
        },
      ],
    },
    {
      id: "tax",
      title: "Tax Services",
      description: "Comprehensive tax planning and compliance services",
      icon: Calculator,
      color: "from-green-500 to-green-600",
      services: [
        {
          documents: [
            "Previous year’s financial statements",
            "Details of income, investments & expenses",
            "Business structure documents",
            "PAN, TAN, and GST certificates",
            "Sector-specific data (for NGOs, trusts, etc.)",
          ],
          id: 7,
          name: "Tax Planning & Advisory",
          price: "₹10,000",
          duration: "3-5 days",
          description:
            "Strategic tax planning to optimize your financial efficiency and minimize tax burdens.",
        },
        {
          documents: [
            "PAN, Aadhaar",
            "Bank statements",
            "Form 16/16A",
            "Income details (business/profession/salary)",
            "Investment proofs",
            "Books of accounts (if applicable)",
          ],
          id: 8,
          name: "Income Tax Return Filing",
          price: "₹2,500",
          duration: "1-2 days",
          description:
            "Expert assistance with accurate and timely income tax return preparation and filing.",
        },
        {
          documents: [
            "Monthly sales & purchase registers",
            "Tax invoices",
            "GST returns",
            "TDS returns",
            "Financial statements",
          ],
          id: 9,
          name: "Tax Compliance & Reporting",
          price: "₹15,000",
          duration: "7-10 days",
          description:
            "Comprehensive tax compliance services to ensure adherence to all tax regulations.",
        },
        {
          documents: [
            "Income Tax Notices",
            "Filed ITRs and computation",
            "Assessment orders",
            "Financial documents",
            "Supporting evidence (in case of appeal)",
          ],
          id: 10,
          name: "Tax Assessments & Appeals",
          price: "₹20,000",
          duration: "30-45 days",
          description:
            "Professional representation during tax assessments and appeals processes.",
        },
        {
          documents: [
            "TAN registration",
            "Payment records",
            "PAN details of deductees",
            "Nature of payments",
          ],
          id: 11,
          name: "Withholding Tax Compliance (TDS/TCS)",
          price: "₹8,000",
          duration: "3-5 days",
          description:
            "Complete TDS/TCS compliance services including calculation, deduction, and filing.",
        },
        {
          documents: [
            "Foreign remittance details",
            "DTAA documents (if applicable)",
            "Tax residency certificate",
            "FEMA declarations",
          ],
          id: 12,
          name: "Tax Consultant",
          price: "₹5,000/hour",
          duration: "As needed",
          description:
            "Expert tax consultation for complex tax matters and strategic financial planning.",
        },
        {
          documents: [
            "Financial statements",
            "Ledger and journals",
            "Sales and purchase registers",
            "Tax computation",
            "TDS returns",
          ],
          id: 13,
          name: "Income Tax – PAN",
          price: "₹500",
          duration: "1 day",
          description:
            "Assistance with PAN application and acquisition for tax identification purposes.",
        },
        {
          documents: [
            "PAN card of the business or applicant",
            "Aadhaar card",
            "Business registration proof (Partnership deed, Certificate of Incorporation, etc.)",
            "Address proof of business premises (utility bill, rent agreement, etc.)",
            "Bank account details",
            "Passport-sized photograph of the authorized signatory",
          ],
          id: 14,
          name: "Income Tax – TAN",
          price: "₹1,000",
          duration: "2-3 days",
          description:
            "TAN registration services for entities responsible for tax deduction at source.",
        },
      ],
    },
    {
      id: "immediate",
      title: "Immediate Services",
      description: "Urgent legal and financial assistance within 10 minutes",
      icon: Zap,
      color: "from-red-500 to-red-600",
      services: [
        {
          documents: [
            "PAN & TAN of the company",
            "Financial statements",
            "Tax audit report (if applicable)",
            "Past filing history (if any)",
          ],
          id: 15,
          name: "Immediate Legal Service",
          price: "₹2,000",
          duration: "10 minutes",
          description: "Urgent legal consultation within 10 minutes",
        },
        {
          documents: [
            "PAN & TAN of the company",
            "Financial statements",
            "Tax audit report (if applicable)",
            "Past filing history (if any)",
          ],
          id: 16,
          name: "Immediate Lawyer Consultation",
          price: "₹1,500",
          duration: "10 minutes",
          description: "Quick lawyer consultation for immediate guidance",
        },
      ],
    },
    {
      id: "gst-services",
      title: "GST Services",
      description: "End-to-end GST compliance, filing, and advisory",
      icon: Receipt,
      color: "from-purple-500 to-purple-600",
      services: [
        {
          documents: [
            "Nature of business and transaction structure",
            "Past GST returns (if applicable)",
            "Financial statements",
          ],
          id: 15,
          name: "GST Registration",
          price: "₹1,500",
          duration: "2-3 days",
          description:
            "Complete GST registration process to obtain your GSTIN for business operations.",
        },
        {
          documents: [
            "PAN card of the business or applicant",
            "Aadhaar card",
            "Business registration proof (Partnership deed, Certificate of Incorporation, etc.)",
            "Address proof of business premises (utility bill, rent agreement, etc.)",
            "Bank account details",
            "Passport-sized photograph of the authorized signatory",
          ],
          id: 16,
          name: "GST Advisory & Consultation",
          price: "₹3,000/hour",
          duration: "As needed",
          description:
            "Expert GST advisory services to navigate complex provisions and optimize compliance.",
        },
        {
          documents: [
            "Nature of business and transaction structure",
            "Past GST returns (if applicable)",
            "Financial statements",
          ],
          id: 17,
          name: "GST Compliance & Filings",
          price: "₹2,500/month",
          duration: "Monthly",
          description:
            "Regular GST return filing and compliance management for seamless operations.",
        },
        {
          documents: [
            "Annual financial statements",
            "GSTR-9 & 9C",
            "Books of accounts",
            "Reconciliation statements",
          ],
          id: 18,
          name: "GST Audit & Assessment",
          price: "₹10,000+",
          duration: "Depends on case",
          description:
            "Professional support during GST audits and assessments with expert representation.",
        },
        {
          documents: [
            "Export invoices & shipping bills (for exporters)",
            "Bank realization certificates",
            "GSTR-3B, GSTR-1",
            "Refund application (RFD-01)",
          ],
          id: 19,
          name: "GST Refunds & Claims",
          price: "₹3,500",
          duration: "7-10 days",
          description:
            "Assistance with GST refund applications and claims processing for eligible businesses.",
        },
        {
          documents: [
            "Copy of notice or order",
            "GST returns and related documents",
            "Legal grounds for appeal",
            "Authority letters",
          ],
          id: 20,
          name: "GST Litigation & Appeals",
          price: "₹15,000+",
          duration: "As required",
          description:
            "Legal representation for GST disputes and appeals before authorities and tribunals.",
        },
        {
          documents: [
            "Invoice or delivery challan",
            "Transporter ID/vehicle number",
            "GSTIN details",
          ],
          id: 21,
          name: "GST LUT Filing",
          price: "₹1,500",
          duration: "1-2 days",
          description:
            "Letter of Undertaking filing for exporters to conduct zero-rated supplies.",
        },
      ],
    },
    {
      id: "startup-regulatory",
      title: "Startup & Regulatory",
      description: "Registrations and legal setup for new-age businesses",
      icon: Rocket,
      color: "from-orange-500 to-orange-600",
      services: [
        {
          documents: [
            "Identity and address proof",
            "Business incorporation documents (if applicable)",
            "Nature of issue/query",
            "Previous legal documents (if any)",
          ],
          id: 22,
          name: "Startup India Registration",
          price: "₹3,000",
          duration: "3-5 days",
          description:
            "Complete Startup India registration to access government benefits and incentives.",
        },
        {
          documents: [
            "Incorporation certificate",
            "Shareholder/partner details",
            "MOA & AOA/LLP Agreement",
            "Relevant contracts or issues",
          ],
          id: 23,
          name: "MSME / Udyam Registration",
          price: "₹1,000",
          duration: "1-2 days",
          description:
            "Udyam registration for MSMEs to leverage government schemes and benefits.",
        },
        {
          documents: [
            "Identity & address proof",
            "All relevant case documents",
            "Details of opposite party",
            "Any court notices (if received)",
          ],
          id: 24,
          name: "IEC Codes",
          price: "₹2,000",
          duration: "2-3 days",
          description:
            "Import Export Code registration for businesses engaged in international trade.",
        },
        {
          documents: [
            "KYC of applicant",
            "Proof of creation (design, invention, brand name etc.)",
            "Logo/design file (for trademarks)",
            "Declaration of originality",
          ],
          id: 25,
          name: "AD Code Registration",
          price: "₹1,500",
          duration: "2-3 days",
          description:
            "Authorized Dealer Code registration for streamlined export documentation.",
        },
        {
          documents: [
            "Company policies & employment contracts",
            "Details of dispute/issue",
            "Employment records (if applicable)",
          ],
          id: 26,
          name: "PF / ESIC Registration",
          price: "₹4,000",
          duration: "3-5 days",
          description:
            "Employee welfare registrations for Provident Fund and ESIC compliance.",
        },
        {
          documents: [
            "Title deed",
            "Sale/purchase agreements",
            "Identity proof",
            "Tax receipts and utility bills",
          ],
          id: 27,
          name: "NGO / Trust / Section 8 Company Formation",
          price: "₹20,000",
          duration: "10-15 days",
          description:
            "Formation services for non-profit organizations and social enterprises.",
        },
      ],
    },
    {
      id: "ma-restructuring",
      title: "M&A & Restructuring",
      description: "Business mergers, acquisitions and corporate restructuring",
      icon: Shuffle,
      color: "from-indigo-500 to-indigo-600",
      services: [
        {
          documents: [
            "Marriage certificate (if applicable)",
            "Birth/death certificates",
            "Identity proof of parties",
            "Details of dispute or matter",
          ],
          id: 28,
          name: "Mergers & Acquisitions (M&A)",
          price: "₹50,000+",
          duration: "Varies",
          description:
            "End-to-end M&A services including due diligence, negotiation, and integration.",
        },
        {
          documents: [
            "Marriage certificate (if applicable)",
            "Birth/death certificates",
            "Identity proof of parties",
            "Details of dispute or matter",
          ],
          id: 29,
          name: "Corporate Restructuring & Insolvency",
          price: "₹75,000+",
          duration: "Depends on case",
          description:
            "Expert guidance on corporate restructuring and insolvency proceedings.",
        },
      ],
    },
    {
      id: "international-audit",
      title: "International & Audit",
      description: "Cross-border taxation and financial audit services",
      icon: Globe2,
      color: "from-teal-500 to-teal-600",
      services: [
        {
          documents: [
            "Loan or banking documents",
            "Correspondence with banks",
            "Identity proof",
          ],
          id: 30,
          name: "International Taxation",
          price: "₹15,000+",
          duration: "Varies",
          description:
            "Expert advice on cross-border taxation and international tax compliance.",
        },
        {
          documents: [
            "FIR copy (if filed)",
            "Identity proof",
            "Case details or court documents",
          ],
          id: 31,
          name: "Tax Audit & Reviews",
          price: "₹12,000+",
          duration: "5-10 days",
          description:
            "Comprehensive tax audits and reviews for financial transparency and compliance.",
        },
      ],
    },
    {
      id: "accounting",
      title: "Accounting",
      description: "Smart bookkeeping and financial leadership",
      icon: BookOpen,
      color: "from-yellow-400 to-yellow-500",
      services: [
        {
          documents: [
            "PAN and GST registration certificate",
            "Bank statements (monthly/quarterly)",
            "Purchase and sales invoices",
            "Expense bills and petty cash records",
            "Salary and payroll data",
            "Investment and loan documents (if applicable)",
            "Previous year’s financials (if available)",
          ],
          id: 32,
          name: "Day-to-Day Smart Accounting",
          price: "₹5,000/month",
          duration: "Ongoing",
          description:
            "Efficient daily accounting services for accurate financial record management.",
        },
        {
          documents: [
            "Identity Proof (Aadhaar, Passport, Voter ID, etc.)",
            "Address Proof",
            "DOB proof (for individuals)",
            "Certificate of Incorporation (for entities)",
          ],
          id: 33,
          name: "Virtual CFO",
          price: "₹50,000/month",
          duration: "Ongoing",
          description:
            "Strategic financial leadership and CFO services for business growth and profitability.",
        },
      ],
    },
    {
      id: "other-offerings",
      title: "Other Offerings",
      description: "Specialized support for IP and logistics",
      icon: FileText,
      color: "from-pink-500 to-pink-600",
      services: [
        {
          id: 34,
          name: "E-Way Bill & Compliance Support",
          price: "₹1,200/month",
          duration: "Ongoing",
          description:
            "Comprehensive E-Way Bill generation and GST transportation compliance support.",
          documents: [
            "PAN",
            "Incorporation Certificate or Deed",
            "Identity/address proof of signatory",
          ],
        },
        {
          id: 35,
          name: "Trademark / Copyright / Patent",
          price: "₹15,000+",
          duration: "Varies",
          description:
            "Complete intellectual property protection services for trademarks, copyrights, and patents.",
          documents: [
            "PAN",
            "Business registration proof",
            "Bank certificate or cancelled cheque",
          ],
        },
        {
          id: 36,
          name: "AD Code",
          price: "₹1,000",
          duration: "1–3 working days",
          description:
            "Register your AD (Authorized Dealer) code with customs to enable shipping and foreign remittance.",
          applicable:
            "All exporters (Individuals, Firms, LLPs, Companies, Trusts, NGOs).",
          code_type: "IEC CODE",
          documents: ["IEC certificate", "Bank AD Code Letter", "GST & PAN"],
          faqs: [
            { q: "Q: Is this mandatory for each port?", a: "Yes." },
            {
              q: "Q: Can an NGO get an AD code?",
              a: "Yes, if engaged in exports.",
            },
          ],
        },
        {
          id: 37,
          name: "PF / ESIC Registration",
          price: "₹3,500",
          duration: "7–10 working days",
          description: "Statutory social security schemes for employees.",
          applicable:
            "Employers having ≥10 (ESIC) or ≥20 (PF) employees. Applies to Companies, Firms, LLPs, Proprietorships, Trusts.",
          documents: [
            "PAN of business",
            "Employee details",
            "Business address proof",
          ],
          faqs: [
            {
              q: "Q: Is PF/ESIC mandatory for NGOs?",
              a: "Yes, if employee thresholds are met.",
            },
            {
              q: "Q: Can a proprietor apply?",
              a: "Yes, if employees are hired.",
            },
          ],
        },
        {
          id: 38,
          name: "MSME / Udyam Registration",
          price: "₹999",
          duration: "1–2 working days",
          description:
            "For classification as Micro, Small or Medium enterprise.",
          applicable:
            "Individuals, Proprietors, Firms, LLPs, Companies, Trusts, Societies.",
          documents: [
            "Aadhaar of proprietor/partner/director",
            "PAN",
            "Business details",
          ],
          faqs: [
            { q: "Q: Is Udyam free to apply?", a: "Yes." },
            { q: "Q: Can NGOs apply?", a: "No, only profit-generating units." },
          ],
        },
        {
          id: 39,
          name: "Startup India Registration",
          price: "₹5,000",
          duration: "3–7 working days",
          description:
            "Register your startup to avail government recognition, tax exemption, funding opportunities.",
          applicable:
            "Private Limited Companies, LLPs, Registered Partnerships.",
          documents: [
            "Incorporation certificate",
            "Startup pitch or business plan",
            "PAN, Aadhaar",
          ],
          faqs: [
            {
              q: "Q: Are individuals eligible?",
              a: "Only through registered entities.",
            },
            {
              q: "Q: Can NGOs register?",
              a: "No, only for profit-based startups.",
            },
          ],
        },
        {
          id: 40,
          name: "GST LUT Filing",
          price: "₹1,500/year",
          duration: "2–5 working days",
          description:
            "File Letter of Undertaking to export without payment of IGST.",
          applicable:
            "GST-registered exporters (Individuals, Companies, LLPs, Trusts, etc.)",
          documents: [
            "GST certificate",
            "Previous LUT (if applicable)",
            "PAN & Aadhaar of authorized signatory",
          ],
          faqs: [
            { q: "Q: Who can file LUT?", a: "Any exporter." },
            { q: "Q: Validity?", a: "One financial year." },
          ],
        },
        {
          id: 41,
          name: "Trust / NGO / Section 8 Company Formation",
          price: "₹12,000 – ₹25,000",
          duration: "15–25 working days",
          description: "Legal formation of charitable or nonprofit entities.",
          applicable:
            "Individuals and groups seeking to form a Charitable Trust, NGO, Society, or Section 8 Company.",
          documents: [
            "PAN & Aadhaar of trustees/directors",
            "Draft MOA/Deed",
            "Address proof",
          ],
          faqs: [
            {
              q: "Q: Which is more formal: NGO or Section 8?",
              a: "Section 8 offers more formal structure and recognition.",
            },
            {
              q: "Q: Can NRIs form NGOs?",
              a: "Yes, with additional formalities.",
            },
          ],
        },
        {
          id: 42,
          name: "Trademark / Copyright / Patent",
          price: "₹15,000+",
          duration: "15–30 working days",
          description: "Secure your brand, intellectual property, inventions.",
          applicable:
            "Individuals, Firms, Companies, LLPs, Trusts, NGOs, Startups.",
          documents: [
            "Identity & address proof",
            "Logo/image/artwork for TM",
            "Detailed write-up for copyright/patent",
          ],
          faqs: [
            { q: "Q: Can I file as an individual?", a: "Yes." },
            {
              q: "Q: Is it mandatory to register a trademark?",
              a: "Not mandatory, but highly recommended.",
            },
          ],
        },
        {
          id: 43,
          name: "Company Incorporation",
          price: "₹6,999+ Govt. Fee",
          duration: "7–15 working days",
          description:
            "Full assistance with incorporation of Private, OPC, or Public companies.",
          applicable: "Individuals or entities forming a new company.",
          documents: ["DIN & DSC", "PAN & Aadhaar", "Business address proof"],
          faqs: [
            {
              q: "Q: Can a single person register a company?",
              a: "Yes, as OPC.",
            },
            { q: "Q: Is there a minimum capital?", a: "No mandatory minimum." },
          ],
        },
        {
          id: 44,
          name: "LLP Registration",
          price: "₹5,999+ Govt. Fee",
          duration: "10–20 working days",
          description:
            "Limited Liability Partnership combines flexibility of a partnership with limited liability.",
          applicable:
            "Partners forming an LLP (Firms, Professionals, Individuals).",
          documents: ["Partner PAN & Aadhaar", "DSC, DIN", "LLP Agreement"],
          faqs: [
            { q: "Q: Can professionals form LLPs?", a: "Yes." },
            { q: "Q: Annual filing required?", a: "Yes, mandatory." },
          ],
        },
        {
          id: 45,
          name: "Tax Consultant",
          price: "Starting ₹2,000",
          duration: "On Request",
          description: "Tax filing, planning, and representation services.",
          applicable:
            "All assessees – Individuals, HUFs, Firms, LLPs, Companies, Trusts, NGOs.",
          documents: [],
          faqs: [
            {
              q: "Q: Do you help with tax saving?",
              a: "Yes, under applicable sections.",
            },
            { q: "Q: Do you handle notices or assessments?", a: "Yes." },
          ],
        },
        {
          id: 46,
          name: "Legal Consultant",
          price: "₹3,000/hour or as quoted",
          duration: "As needed",
          description: "Expert legal guidance and drafting services.",
          applicable: "All legal entities and individuals.",
          documents: [],
          faqs: [
            { q: "Q: Can you draft contracts?", a: "Yes." },
            { q: "Q: Is consultation confidential?", a: "Absolutely." },
          ],
        },
        {
          id: 47,
          name: "Corporate Lawyer",
          price: "Retainer or per project",
          duration: "Ongoing / Per task",
          description:
            "Corporate governance, M&A, legal vetting, and contract support.",
          applicable: "Corporates, Startups, LLPs, Investors.",
          documents: [],
          faqs: [
            { q: "Q: Do you advise on foreign investment?", a: "Yes." },
            {
              q: "Q: Retainership available?",
              a: "Yes, monthly/quarterly options.",
            },
          ],
        },
        {
          id: 48,
          name: "Compliance Officer",
          price: "₹7,500+/month",
          duration: "Ongoing",
          description:
            "Outsourced compliance support for all statutory and regulatory requirements.",
          applicable: "Companies, LLPs, Trusts, NGOs, Startups.",
          documents: [],
          faqs: [
            { q: "Q: Do you handle ROC filings?", a: "Yes." },
            { q: "Q: Will you manage registers & minutes?", a: "Yes." },
          ],
        },
        {
          id: 49,
          name: "Virtual CFO",
          price: "₹15,000+/month",
          duration: "Ongoing",
          description:
            "Strategic financial support on demand — budgeting, MIS, investor relations.",
          applicable:
            "Startups, SMEs, NGOs, Section 8 Companies, Growing Firms.",
          documents: [],
          faqs: [
            { q: "Q: Can I opt part-time?", a: "Yes." },
            {
              q: "Q: Will you help in fundraising?",
              a: "Yes, including pitch decks.",
            },
          ],
        },
      ],
    },
  ];

  const serviceBundles = [
    {
      id: "startup",
      name: "Startup Bundle",
      description: "Perfect for new businesses getting started",
      price: "₹25,000",
      originalPrice: "₹33,000",
      savings: "₹8,000",
      color: "from-green-500 to-green-600",
      icon: Target,
      services: [
        "Company Formation & Registration",
        "LLP Registration",
        "Income Tax – PAN",
        "Income Tax – TAN",
        "Basic Tax Planning Consultation",
      ],
      popular: false,
    },
    {
      id: "compliance",
      name: "Business Compliance Bundle",
      description: "Comprehensive compliance management",
      price: "₹40,000",
      originalPrice: "₹52,000",
      savings: "₹12,000",
      color: "from-blue-500 to-blue-600",
      icon: Shield,
      services: [
        "Corporate Governance & Compliance",
        "Regulatory Compliance & Filings",
        "Tax Compliance & Reporting",
      ],
      popular: true,
    },
    {
      id: "tax",
      name: "Tax Management Bundle",
      description: "Complete tax planning and filing services",
      price: "₹20,000",
      originalPrice: "₹27,500",
      savings: "₹7,500",
      color: "from-purple-500 to-purple-600",
      icon: Calculator,
      services: [
        "Tax Planning & Advisory",
        "Income Tax Return Filing",
        "Withholding Tax Compliance (TDS/TCS)",
        "Tax Consultant Services (2 hours)",
      ],
      popular: false,
    },
    {
      id: "complete",
      name: "Complete Business Setup Bundle",
      description: "Everything you need for a complete business setup",
      price: "₹60,000",
      originalPrice: "₹80,000",
      savings: "₹20,000",
      color: "from-indigo-500 to-indigo-600",
      icon: Briefcase,
      services: [
        "Company Formation & Registration",
        "Corporate Governance & Compliance",
        "Tax Planning & Advisory",
        "Income Tax Return Filing",
        "Compliance Officer Services (3 months)",
        "Income Tax – PAN & TAN",
        "Basic Legal Consultation",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Innovations Pvt Ltd",
      rating: 5,
      text: "Excellent service for company registration. The team was professional and completed everything within the promised timeframe.",
    },
    {
      name: "Priya Sharma",
      company: "Sharma Enterprises",
      rating: 5,
      text: "Their tax planning advice saved us significant money. Highly recommend their services for any business.",
    },
    {
      name: "Amit Patel",
      company: "Digital Solutions LLP",
      rating: 5,
      text: "Quick and efficient LLP registration. The immediate service feature is a game-changer for urgent requirements.",
    },
  ];

  const faqs = [
    {
      question: "How long does company registration take?",
      answer:
        "Company registration typically takes 7-10 business days, depending on the type of company and documentation provided.",
    },
    {
      question: "What documents are required for tax filing?",
      answer:
        "You need PAN card, Aadhaar card, Form 16, bank statements, investment proofs, and any other relevant financial documents.",
    },
    {
      question: "Do you provide ongoing compliance support?",
      answer:
        "Yes, we offer ongoing compliance support through our Compliance Officer Services and regular consultation packages.",
    },
    {
      question: "What is the immediate service response time?",
      answer:
        "Our immediate services guarantee a response within 10 minutes during business hours, 24/7.",
    },
  ];

  // const handleGetStarted = () => {
  //   setCurrentView('booking')
  //   setBookingStep(1)
  // }

  const handleCategorySelect = (category) => {
    if (category.id === "immediate") {
      setSelectedCategory(category);
      setCurrentView("immediate");
      return;
    }
    setSelectedCategory(category);
    setCurrentView("category");
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentView("booking");
    setBookingStep(3);
  };

  const handleBundleSelect = (bundle) => {
    setSelectedService({
      id: bundle.id,
      name: bundle.name,
      price: bundle.price,
      duration: "Package deal",
      description: bundle.description,
    });
    setCurrentView("booking");
    setBookingStep(3);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStep(4);
  };

  // const handleBackToHome = () => {
  //   setCurrentView('home')
  //   setSelectedCategory(null)
  //   setSelectedService(null)
  //   setBookingStep(1)
  // }

  const handleBackToCategory = () => {
    setCurrentView("category");
    setSelectedService(null);
    setBookingStep(1);
  };

  const handleAboutUs = () => {
    setCurrentView("about");
  };

  const renderProgressBar = () => {
    const steps = ["Category", "Service", "Details", "Confirmation"];
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index + 1 <= bookingStep
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1 <= bookingStep ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={`ml-2 text-sm ${
                  index + 1 <= bookingStep
                    ? "text-blue-600 font-medium"
                    : "text-gray-500"
                }`}
              >
                {step}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-0.5 mx-4 ${
                    index + 1 < bookingStep ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderNavigationButtons = () => {
    if (currentView === "home") return null;

    return (
      <div className="fixed top-4 left-4 z-50 flex gap-2">
        <Button
          variant="outline"
          onClick={handleBackToHome}
          className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 shadow-lg"
        >
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>
        {currentView === "booking" && selectedCategory && (
          <Button
            variant="outline"
            onClick={handleBackToCategory}
            className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        )}
        {currentView === "category" && (
          <Button
            variant="outline"
            onClick={handleBackToHome}
            className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        )}
        {currentView === "about" && (
          <Button
            variant="outline"
            onClick={handleBackToHome}
            className="bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-gray-50 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        )}
      </div>
    );
  };

  // About Us Page
  if (currentView === "about") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {renderNavigationButtons()}

        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold text-gray-900">
                Lex&Ledger
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#"
                  onClick={handleBackToHome}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
                <a href="#" className="text-blue-600 font-medium">
                  About
                </a>
                <Button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 shadow-lg"
                >
                  Get Started
                </Button>
              </nav>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Lex&Ledger
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Born from friendship, built with expertise. Three professionals
              came together with a shared vision to simplify legal and financial
              services for businesses and individuals.
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Story
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      It all started with a simple observation: navigating legal
                      and financial requirements shouldn't be complicated,
                      expensive, or time-consuming. Three friends, each
                      excelling in their respective fields, decided to combine
                      their expertise to create something meaningful.
                    </p>
                    <p>
                      What began as casual conversations about the challenges
                      businesses face in compliance and financial management
                      evolved into a mission to democratize access to
                      professional services. We realized that by leveraging
                      technology and our combined expertise, we could make
                      expert guidance accessible to everyone.
                    </p>
                    <p>
                      Today, Lex&Ledger stands as a testament to the power of
                      friendship, expertise, and shared values. We're not just
                      service providers; we're partners in your success story.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-xl">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex -space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <Server className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                          <CalcIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Three Friends, One Vision
                      </h3>
                      <p className="text-gray-600">
                        Technology + Infrastructure + Finance = Simplified
                        Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meet Our Founders */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Founders
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three professionals who turned their friendship into a mission
                to simplify legal and financial services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${founder.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <founder.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {founder.role}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {founder.expertise}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {founder.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Lex&Ledger.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Integrity",
                  description:
                    "We believe in honest, transparent relationships with our clients.",
                  color: "from-red-500 to-red-600",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "We continuously improve our services through technology and creativity.",
                  color: "from-yellow-500 to-yellow-600",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "We work as partners with our clients to achieve their goals.",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "We strive for the highest quality in everything we deliver.",
                  color: "from-purple-500 to-purple-600",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white mb-20">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To democratize access to professional legal and financial services
              by combining expertise, technology, and genuine care for our
              clients' success. We believe that every business, regardless of
              size, deserves expert guidance without the complexity and high
              costs traditionally associated with professional services.
            </p>
          </div>

          {/* Join Our Journey */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to experience the difference that expertise, technology, and
              genuine care can make for your business?
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleBackToHome}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Category Page Component
  if (currentView === "category" && selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {renderNavigationButtons()}

        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold text-gray-900">
                Lex&Ledger
              </div>
            </div>
          </div>
        </header>

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {selectedCategory.services.map((service) => (
              <Card
                key={service.id}
                className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
                onClick={() => handleServiceSelect(service)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">
                      {service.name}
                    </h3>
                    <Badge variant="outline" className="ml-4">
                      {service.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center gap-1">
                    <span className="text-xl break-all font-bold text-blue-600">
                      {service.price}
                    </span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Select Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Related Bundles */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Related Service Bundles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceBundles
                .filter(
                  (bundle) =>
                    (selectedCategory.id === "company" &&
                      (bundle.id === "startup" ||
                        bundle.id === "compliance")) ||
                    (selectedCategory.id === "tax" && bundle.id === "tax") ||
                    (selectedCategory.id !== "immediate" &&
                      bundle.id === "complete")
                )
                .map((bundle) => (
                  <Card
                    key={bundle.id}
                    className="relative overflow-hidden border-0 bg-white/60 backdrop-blur-sm"
                  >
                    {bundle.popular && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-6">
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
                        <span className="text-lg text-gray-400 line-through">
                          {bundle.originalPrice}
                        </span>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700"
                        >
                          Save {bundle.savings}
                        </Badge>
                      </div>
                      <Button
                        onClick={() => handleBundleSelect(bundle)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Select Bundle
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (currentView === "immediate") {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          {/* {renderNavigationButtons()} */}

          <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-semibold text-gray-900">
                  Lex&Ledger
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                  <a
                    href="#"
                    onClick={handleBackToHome}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Home
                  </a>
                  <a href="#" className="text-blue-600 font-medium">
                    About
                  </a>
                  <Button
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 shadow-lg"
                  >
                    Get Started
                  </Button>
                </nav>
              </div>
            </div>
          </header>
          <ImmediateService />
        </div>
      </>
    );
  }
  // Booking Workflow
  if (currentView === "booking") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {renderNavigationButtons()}

        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-semibold text-gray-900">
                Lex&Ledger
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {bookingStep < 4 && renderProgressBar()}

          {bookingStep === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Choose Your Service Category
                </h1>
                <p className="text-lg text-gray-600">
                  Select the type of service you need assistance with
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {serviceCategories.map((category) => (
                  <Card
                    key={category.id}
                    className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 bg-white/60 backdrop-blur-sm"
                    onClick={() => handleCategorySelect(category)}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      >
                        <category.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-blue-50 text-blue-600"
                      >
                        {category.services.length} Services
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {bookingStep === 3 && selectedService && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Your Details
                </h1>
                <p className="text-lg text-gray-600">
                  Please provide your information to proceed
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="flex flex-col gap-5">
                  <div>
                    <Card className="border border-gray-100">
                      <CardHeader>
                        <CardTitle className="text-xl">
                          Service Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {selectedService.name}
                          </h3>
                          <p className="text-gray-600">
                            Duration: {selectedService.duration}
                          </p>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t">
                          <span className="text-lg font-medium">
                            Total Amount
                          </span>
                          <span className="text-2xl font-bold text-blue-600">
                            {selectedService.price}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Documents Required */}
                  {selectedService.documents?.length > 0 && (
                    <div>
                      <Card className="border border-gray-100">
                        <CardHeader>
                          <CardTitle className="text-xl">
                            Documents Required
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <ul className="list-disc list-inside text-gray-700 text-sm">
                            {selectedService.documents.map((doc, index) => (
                              <li key={index}>{doc}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
                <div>
                  <Card className="border border-gray-100">
                    <CardContent className="p-6">
                      <form
                        onSubmit={handleBookingSubmit}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Input
                              type="text"
                              name="name"
                              placeholder="Full Name *"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="border-gray-200"
                            />
                          </div>
                          <div>
                            <Input
                              type="email"
                              name="email"
                              placeholder="Email Address *"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="border-gray-200"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Input
                              type="tel"
                              name="phone"
                              placeholder="Phone Number *"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="border-gray-200"
                            />
                          </div>
                          <div>
                            <Input
                              type="text"
                              name="company"
                              placeholder="Company Name"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="border-gray-200"
                            />
                          </div>
                        </div>
                        <div>
                          <Input
                            type="datetime-local"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="border-gray-200"
                          />
                          <p className="text-sm text-gray-500 mt-1">
                            Preferred consultation time
                          </p>
                        </div>
                        <div>
                          <Textarea
                            name="requirements"
                            placeholder="Additional requirements or notes"
                            value={formData.requirements}
                            onChange={handleInputChange}
                            rows={3}
                            className="border-gray-200"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                        >
                          Proceed to Payment
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {bookingStep === 4 && (
            <div className="text-center space-y-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Booking Confirmed!
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for choosing Lex&Ledger. We'll contact you shortly
                  to confirm your consultation.
                </p>
              </div>

              <Card className="max-w-md mx-auto border border-gray-100">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Booking Details
                  </h3>
                  <div className="text-left space-y-2">
                    <p>
                      <span className="font-medium">Service:</span>{" "}
                      {selectedService.name}
                    </p>
                    <p>
                      <span className="font-medium">Name:</span> {formData.name}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {formData.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span>{" "}
                      {formData.phone}
                    </p>
                    <p>
                      <span className="font-medium">Amount:</span>{" "}
                      {selectedService.price}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleBackToHome}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Back to Home
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Main Landing Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-gray-900">
              Lex&Ledger
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
              </a>
              <a
                href="#bundles"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Bundles
              </a>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>

              <a
                href="#"
                onClick={handleAboutUs}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <a
                href="#contact"
                className=" right-5 z-50 bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse transition-transform hover:scale-105 hover:bg-red-600"
              >
                Emergency – 10 min
              </a>

              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 shadow-lg"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

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

      {/* Stats Section */}
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

      {/* Immediate Service Highlight */}
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

          {/* <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <Card 
                key={category.id} 
                className="cursor-pointer border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => handleCategorySelect(category)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <category.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-600 mb-4">
                    {category.services.length} Services Available
                  </Badge>
                  <div className="space-y-1 text-sm text-gray-500 mb-4">
                    {category.services.slice(0, 3).map((service, index) => (
                      <div key={index}>• {service.name}</div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-blue-600 font-medium">
                        +{category.services.length - 3} more services
                      </div>
                    )}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </section>
      <section id="blog" className="py-24">
        <EnhancedBlogPage />
      </section>
      {/* Service Bundles */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceBundles.map((bundle) => (
              <Card
                key={bundle.id}
                className="relative overflow-hidden border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {bundle.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
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
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 mb-4"
                  >
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
                  <Button
                    onClick={() => handleBundleSelect(bundle)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Select Bundle
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to connect with an expert? We're here to help you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(0120) 4231116</p>
                    <p className="text-sm text-gray-500">
                      Available 24/7 for immediate services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@lexledger.com</p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      B-26, 2nd Floor, Sector 8<br />
                      Noida 201301, India
                    </p>
                    <p className="text-sm text-gray-500">
                      Visit us for in-person consultations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border border-gray-100 bg-white/60 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="border-gray-200 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="border-gray-200 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Your Phone"
                        className="border-gray-200 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="How can we help you?"
                        rows={4}
                        className="border-gray-200 focus:border-blue-500"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <button className="emergency-button">🚨 Emergency Lawyer - 10 min</button>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-semibold text-gray-900 mb-4">
                Lex&Ledger
              </div>
              <p className="text-gray-600 text-sm">
                Professional legal and financial services for businesses and
                individuals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Company Formation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Tax Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Immediate Help
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    onClick={handleAboutUs}
                    className="hover:text-gray-900"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2025 Lex&Ledger. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
const About = ({ handleGetStarted, handleBackToHome }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold text-gray-900">
              Lex&Ledger
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                onClick={handleBackToHome}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>
              <Link to="/blog" className="text-blue-600 font-medium">
                Blog
              </Link>
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 shadow-lg"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lex&Ledger
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from friendship, built with expertise. Three professionals came
            together with a shared vision to simplify legal and financial
            services for businesses and individuals.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    It all started with a simple observation: navigating legal
                    and financial requirements shouldn't be complicated,
                    expensive, or time-consuming. Three friends, each excelling
                    in their respective fields, decided to combine their
                    expertise to create something meaningful.
                  </p>
                  <p>
                    What began as casual conversations about the challenges
                    businesses face in compliance and financial management
                    evolved into a mission to democratize access to professional
                    services. We realized that by leveraging technology and our
                    combined expertise, we could make expert guidance accessible
                    to everyone.
                  </p>
                  <p>
                    Today, Lex&Ledger stands as a testament to the power of
                    friendship, expertise, and shared values. We're not just
                    service providers; we're partners in your success story.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex -space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <Server className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                        <CalcIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Three Friends, One Vision
                    </h3>
                    <p className="text-gray-600">
                      Technology + Infrastructure + Finance = Simplified
                      Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Founders */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three professionals who turned their friendship into a mission to
              simplify legal and financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${founder.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <founder.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {founder.role}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {founder.expertise}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {founder.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Lex&Ledger.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description:
                  "We believe in honest, transparent relationships with our clients.",
                color: "from-red-500 to-red-600",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We continuously improve our services through technology and creativity.",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We work as partners with our clients to achieve their goals.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for the highest quality in everything we deliver.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white mb-20">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To democratize access to professional legal and financial services
            by combining expertise, technology, and genuine care for our
            clients' success. We believe that every business, regardless of
            size, deserves expert guidance without the complexity and high costs
            traditionally associated with professional services.
          </p>
        </div>

        {/* Join Our Journey */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to experience the difference that expertise, technology, and
            genuine care can make for your business?
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleBackToHome}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
function Old() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedCategory(null);
    setSelectedService(null);
    setBookingStep(1);
  };
  const handleGetStarted = () => {
    setCurrentView("booking");
    setBookingStep(1);
  };
 React.useEffect(() => {
     window.scrollTo(0, 0); 
   }, []);
  return (
     <HomePage
            handleBackToHome={handleBackToHome}
            handleGetStarted={handleGetStarted}
            currentView={currentView}
            setCurrentView={setCurrentView}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            bookingStep={bookingStep}
            setBookingStep={setBookingStep}
          />
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       <HomePage
    //         handleBackToHome={handleBackToHome}
    //         handleGetStarted={handleGetStarted}
    //         currentView={currentView}
    //         setCurrentView={setCurrentView}
    //         selectedCategory={selectedCategory}
    //         setSelectedCategory={setSelectedCategory}
    //         selectedService={selectedService}
    //         setSelectedService={setSelectedService}
    //         bookingStep={bookingStep}
    //         setBookingStep={setBookingStep}
    //       />
    //     }
    //   />

    //   {/* Home (just blog list or full blog if hash is #blog) */}
    //   <Route
    //     path="/blog"
    //     element={
    //       <>
    //         {" "}
    //         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
             
    //           <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
    //             <div className="max-w-6xl mx-auto px-6 py-4">
    //               <div className="flex justify-between items-center">
    //                 <div className="text-2xl font-semibold text-gray-900">
    //                   Lex&Ledger
    //                 </div>
    //                 <nav className="hidden md:flex items-center space-x-8">
    //                   <Link
    //                     to="/"
    //                     onClick={handleBackToHome}
    //                     className="text-gray-600 hover:text-gray-900 transition-colors"
    //                   >
    //                     Home
    //                   </Link>
    //                   <Link to="/about" className="text-blue-600 font-medium">
    //                     About
    //                   </Link>
    //                   <Button
    //                     onClick={handleGetStarted}
    //                     className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 shadow-lg"
    //                   >
    //                     Get Started
    //                   </Button>
    //                 </nav>
    //               </div>
    //             </div>
    //           </header>
    //           <EnhancedBlogPage />
    //         </div>
    //       </>
    //     }
    //   />

    //   {/* Blog detail page */}
    //   {/* <Route path="/blogDetail/:id" element={<BlogDetail />} /> */}

    //   {/* Fallback route */}
    //   <Route
    //     path="/about"
    //     element={
    //       <About
    //         handleGetStarted={handleGetStarted}
    //         handleBackToHome={handleBackToHome}
    //       />
    //     }
    //   />
    //   <Route
    //     path="/blogDetail/:blogId"
    //     element={
    //       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
           
    //         <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
    //           <div className="max-w-6xl mx-auto px-6 py-4">
    //             <div className="flex justify-between items-center">
    //               <div className="text-2xl font-semibold text-gray-900">
    //                 Lex&Ledger
    //               </div>
    //               <nav className="hidden md:flex items-center space-x-8">
    //                 <Link
    //                   to="/"
    //                   onClick={handleBackToHome}
    //                   className="text-gray-600 hover:text-gray-900 transition-colors"
    //                 >
    //                   Home
    //                 </Link>
    //                 <Link to="/about" className="text-blue-600 font-medium">
    //                   About
    //                 </Link>
    //                 <Button
    //                   onClick={handleGetStarted}
    //                   className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 shadow-lg"
    //                 >
    //                   Get Started
    //                 </Button>
    //               </nav>
    //             </div>
    //           </div>
    //         </header>
    //         <BlogDetail />
    //       </div>
    //     }
    //   />
    //      <Route
    //     path="/serviceDetail/:blogId"
    //     element={
    //       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
           
    //         <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
    //           <div className="max-w-6xl mx-auto px-6 py-4">
    //             <div className="flex justify-between items-center">
    //               <div className="text-2xl font-semibold text-gray-900">
    //                 Lex&Ledger
    //               </div>
    //               <nav className="hidden md:flex items-center space-x-8">
    //                 <Link
    //                   to="/"
    //                   onClick={handleBackToHome}
    //                   className="text-gray-600 hover:text-gray-900 transition-colors"
    //                 >
    //                   Home
    //                 </Link>
    //                 <Link to="/about" className="text-blue-600 font-medium">
    //                   About
    //                 </Link>
    //                 <Button
    //                   onClick={handleGetStarted}
    //                   className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 shadow-lg"
    //                 >
    //                   Get Started
    //                 </Button>
    //               </nav>
    //             </div>
    //           </div>
    //         </header>
    //         <BlogDetail />
    //       </div>
    //     }
    //   />
    // </Routes>
  );
}

export default Old;
