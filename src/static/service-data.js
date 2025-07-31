import React from "react";
import {
  Building2,
  Calculator,
  FileText,
  Shield,
  Clock,
  Users,
  TrendingUp,
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
  Phone
} from 'lucide-react';
export const serviceCategories = [
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
  name: "LLP Formation Service",
  price: "₹5,999 + Govt. Fee",
  duration: "10–20 working days",
  description:
    "Register your Limited Liability Partnership with ease — ideal for professionals and businesses seeking flexibility with liability protection.",
  applicable:
    "Entrepreneurs, professionals, or firms planning to form an LLP.",
  documents: ["PAN & Aadhaar of Partners", "DSC, DIN", "LLP Agreement"],
  faqs: [
    { q: "Q: Can professionals form LLPs?", a: "Yes." },
    { q: "Q: Is annual filing required?", a: "Yes, it is mandatory." },
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
export const serviceBundles = [
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
export const testimonials = [
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

  export const faqs = [
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