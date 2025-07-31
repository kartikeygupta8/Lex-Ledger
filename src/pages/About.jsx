import React from 'react'
import { Button } from "@/components/ui/button.jsx";

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
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
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
function About() {
    const navigate=useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

        {/* <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
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
        </header> */}

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
                onClick={()=>navigate("/getStarted")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={()=>navigate("/services")}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About