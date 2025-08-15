import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.jsx'
import { Clock, FileText, IndianRupee, CheckCircle, Calendar, Users, Shield, Award, ChevronDown, ChevronUp, Phone, Mail, MapPin, Star, ArrowRight, Play, Package, Zap, Crown, TrendingUp, Sparkles } from 'lucide-react'
import HorizontalSlider from './HorizontalSlider'

function BundleService() {
  const [selectedBundle, setSelectedBundle] = useState(1)
  const [selectedTab, setSelectedTab] = useState('overview')
  const [openFAQ, setOpenFAQ] = useState(null)
  const [hoveredFeature, setHoveredFeature] = useState(null)

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
  ]

  const currentBundle = bundles.find(bundle => bundle.id === selectedBundle) || bundles[0]

  const bundleIcons = {
    1: Package,
    2: TrendingUp,
    3: Crown,
    4: FileText,
    5: Shield,
    6: Zap
  }

  const features = [
    { icon: Shield, title: "Expert Guidance", description: "Professional consultation throughout the process" },
    { icon: Award, title: "Complete Compliance", description: "Ensure 100% regulatory compliance" },
    { icon: Users, title: "Dedicated Support", description: "Personal account manager for your business" },
    { icon: Calendar, title: "Timely Delivery", description: "Complete setup within promised timeframe" }
  ]

  const faqs = [
    {
      question: "What makes your business bundles different?",
      answer: "Our bundles are carefully curated to provide comprehensive business solutions at significant cost savings. Each bundle includes multiple services that work together seamlessly, with dedicated support throughout the process."
    },
    {
      question: "Can I customize a bundle according to my needs?",
      answer: "Yes, we offer customization options for all our bundles. Our experts will work with you to modify the services included based on your specific business requirements and industry needs."
    },
    {
      question: "What kind of ongoing support do you provide?",
      answer: "Each bundle includes different levels of ongoing support - from 1 month for Quick Start to 12 months for Enterprise Complete. This includes compliance reminders, document updates, and consultation sessions."
    },
    {
      question: "How do I choose the right bundle for my business?",
      answer: "Our team provides free consultation to help you choose the right bundle based on your business size, industry, growth plans, and compliance requirements. We'll recommend the most cost-effective solution for your needs."
    },
    {
      question: "Are there any hidden costs in the bundles?",
      answer: "No, our bundle pricing is transparent and includes all mentioned services. Government fees and statutory charges are clearly mentioned separately. There are no hidden costs or surprise charges."
    },
    {
      question: "What happens if I need additional services later?",
      answer: "You can always upgrade to a higher bundle or add individual services at discounted rates. Our modular approach allows you to scale your legal and compliance needs as your business grows."
    }
  ]

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Startup Founder",
      content: "The Startup Essentials Bundle saved us months of paperwork and confusion. Everything was handled professionally!",
      rating: 5
    },
    {
      name: "Sneha Patel",
      role: "Business Owner",
      content: "Growth Business Bundle was perfect for our expanding company. The trademark registration was seamless.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Enterprise CEO",
      content: "Enterprise Complete Bundle provided everything we needed for our international expansion. Excellent service!",
      rating: 5
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'includes', label: 'What\'s Included' },
    { id: 'process', label: 'Our Process' },
    { id: 'faq', label: 'FAQ' }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const BundleIcon = bundleIcons[selectedBundle] || Package

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
     

      {/* Bundle Selection */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Choose Your Perfect Bundle
            </div>
            <h2 className="text-4xl font-bold  mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Business Bundle Selection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the perfect bundle tailored to your business needs with transparent pricing and comprehensive features.
            </p>
          </div>
          
          <div className="">
             <HorizontalSlider
            items={bundles}
            slidesPerView={3}
            renderCard={(bundle) => {
              const Icon = bundleIcons[bundle.id] || Package
              const isSelected = selectedBundle === bundle.id
              
              return (
                <div
                  key={bundle.id}
                  onClick={() => setSelectedBundle(bundle.id)}
                  className={`relative cursor-pointer group transition-all duration-500 transform hover:-translate-y-2
                   hover:scale-102
                  `}
                >
                  {/* Card */}
                  <div className={`relative p-8 rounded-2xl border-2  h-full
                    ${false
                      ? 'border-blue-300 bg-white/80 shadow-2xl '
                      : 'border-blue-300 bg-white/80 backdrop-blur-sm hover:border-blue-300 hover:shadow-xl hover:bg-white'}
                  `}>
                    
                    {/* Popular Badge */}
                    {/* {bundle.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                          ⭐ Most Popular
                        </div>
                      </div>
                    )} */}
                    
                    {/* Selection Indicator */}
                    {/* {isSelected && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    )} */}
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-500
                      ${isSelected
                        ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white shadow-xl transform'
                        : 'bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 group-hover:from-blue-200 group-hover:to-purple-200 group-hover:scale-110'}
                    `}>
                      <Icon className="w-10 h-10" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300
                        ${isSelected ? 'text-gray-900' : 'text-gray-800 group-hover:text-blue-600'}
                      `}>
                        {bundle.name}
                      </h3>
                      
                      {/* Pricing */}
                      <div className="mb-4">
                        <div className={`text-3xl font-bold transition-colors duration-300
                          ${isSelected ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}
                        `}>
                          {bundle.price}
                        </div>
                        {bundle.originalPrice && (
                          <div className="flex items-center justify-center space-x-2 mt-1">
                            <span className="text-lg text-gray-500 line-through">{bundle.originalPrice}</span>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                              Save {bundle.savings}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{bundle.duration}</span>
                      </div>
                      
                      {/* Features Preview */}
                      <div className="text-left">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Key Features:</div>
                        <ul className="space-y-1">
                          {bundle.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                              <span className="truncate">{feature}</span>
                            </li>
                          ))}
                          {bundle.features.length > 3 && (
                            <li className="text-sm text-blue-600 font-medium">
                              +{bundle.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    {/* <div className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none
                      ${isSelected 
                        ? 'bg-gradient-to-br from-blue-500/5 to-purple-500/5' 
                        : 'bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5'}
                    `}></div> */}
                  </div>
                  
                  {/* Glow Effect for Selected */}
                  {/* {isSelected && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl -z-10 animate-pulse"></div>
                  )} */}
                </div>
              )
            }}
          />
           
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">Compliance Guaranteed</div>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">5000+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4">
                {currentBundle.popular && (
                  <Badge className="bg-orange-500/20 text-orange-100 border-orange-400">
                    Most Popular
                  </Badge>
                )}
                <Badge className="bg-blue-500/20 text-blue-100 border-blue-400">
                  Business Bundle
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {currentBundle.name}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {currentBundle.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <IndianRupee className="w-5 h-5" />
                  <span className="font-semibold">{currentBundle.price}</span>
                  <span className="text-sm line-through text-blue-200">{currentBundle.originalPrice}</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">{currentBundle.duration}</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 rounded-lg px-4 py-2 backdrop-blur-sm">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">Save {currentBundle.savings}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 group">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 group">
                  <Play className="w-4 h-4 mr-2" />
                  Learn More
                </Button> */}
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in-right">
              <div className="relative">
                <div className="w-full h-80 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-6">
                    <BundleIcon className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-semibold">Bundle Highlights</h3>
                  </div>
                  <ul className="space-y-3">
                    {currentBundle.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {currentBundle.features.length > 5 && (
                      <li className="text-sm text-blue-200 italic">
                        +{currentBundle.features.length - 5} more features...
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Bundles?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive business solutions designed to save you time, money, and ensure complete compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                  hoveredFeature === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    hoveredFeature === index ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110' : 'bg-blue-100'
                  }`}>
                    <feature.icon className={`w-6 h-6 transition-colors duration-300 ${
                      hoveredFeature === index ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Trusted by thousands of businesses across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 shadow-sm border overflow-x-auto">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 py-3 rounded-md font-medium transition-all duration-200 whitespace-nowrap ${
                      selectedTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {selectedTab === 'overview' && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">{currentBundle.name} Overview</CardTitle>
                  <CardDescription>
                    {currentBundle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Bundle Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <IndianRupee className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-lg">{currentBundle.price}</div>
                        <div className="text-sm text-gray-600 line-through">{currentBundle.originalPrice}</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                        <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-lg">{currentBundle.duration}</div>
                        <div className="text-sm text-gray-600">Completion Time</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                        <Package className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold text-lg">{currentBundle.features.length}</div>
                        <div className="text-sm text-gray-600">Services Included</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                        <Sparkles className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                        <div className="font-semibold text-lg">{currentBundle.savings}</div>
                        <div className="text-sm text-gray-600">You Save</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTab === 'features' && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Features & Services</CardTitle>
                  <CardDescription>
                    Complete list of services included in {currentBundle.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentBundle.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r from-blue-600 to-purple-600 transition-colors">
                          <CheckCircle className="w-5 h-5 text-blue-600 group-hover:text-white" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTab === 'includes' && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">What's Included</CardTitle>
                  <CardDescription>
                    Detailed breakdown of everything you get with {currentBundle.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentBundle.includes.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-gradient-to-r from-green-600 to-blue-600 transition-colors">
                          <span className="text-green-600 font-semibold text-sm group-hover:text-white">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item}</h4>
                        </div>
                        <Package className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTab === 'process' && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Process</CardTitle>
                  <CardDescription>
                    Step-by-step process for {currentBundle.name} delivery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[
                      {
                        step: 1,
                        title: "Consultation & Planning",
                        description: "Initial consultation to understand your business needs and customize the bundle accordingly",
                        duration: "Day 1-2"
                      },
                      {
                        step: 2,
                        title: "Documentation & Filing",
                        description: "Prepare and file all necessary documents with relevant authorities",
                        duration: "Day 3-10"
                      },
                      {
                        step: 3,
                        title: "Registration & Compliance",
                        description: "Complete all registrations and set up compliance frameworks",
                        duration: "Day 11-15"
                      },
                      {
                        step: 4,
                        title: "Delivery & Support",
                        description: "Final delivery of all documents and certificates with ongoing support setup",
                        duration: "Final Days"
                      }
                    ].map((process, index) => (
                      <div key={index} className="flex items-start space-x-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:from-blue-700 group-hover:to-purple-700 transition-colors">
                            <span className="text-white font-bold">{process.step}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{process.title}</h4>
                            <Badge variant="outline" className="group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">{process.duration}</Badge>
                          </div>
                          <p className="text-gray-600">{process.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedTab === 'faq' && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions about our business bundles
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <Collapsible key={index} open={openFAQ === index} onOpenChange={() => toggleFAQ(index)}>
                        <CollapsibleTrigger className="w-full">
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <h4 className="text-left font-medium text-gray-900">{faq.question}</h4>
                            {openFAQ === index ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="p-4 bg-white border border-gray-100 rounded-lg mt-2">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-center border-l-4 border-blue-600">
                    <h4 className="font-medium text-blue-900 mb-2">Need personalized guidance?</h4>
                    <p className="text-sm text-blue-800 mb-4">
                      Our experts are here to help you choose the right bundle for your business needs.
                    </p>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose {currentBundle.name} and save {currentBundle.savings} while getting everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 group">
              Get {currentBundle.name}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600">
              Compare All Bundles
            </Button>
          </div>
        </div>
      </section>

   
    </div>
  )
}

export default BundleService


