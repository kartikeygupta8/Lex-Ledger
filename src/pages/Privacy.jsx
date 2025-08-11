import React, { useState } from 'react'
import { Shield, User, FileText, Lock, ChevronRight, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function Privacy() {
  const [activeSection, setActiveSection] = useState('general')

  const sections = [
    { id: 'general', title: 'General', icon: FileText },
    { id: 'data-collection', title: 'Data Collection', icon: User },
    { id: 'cookies', title: 'Cookies', icon: Shield },
    { id: 'data-sharing', title: 'Data Sharing', icon: Lock },
    { id: 'data-security', title: 'Data Security', icon: CheckCircle },
    { id: 'third-party', title: 'Third Party Ads', icon: FileText },
    { id: 'user-consent', title: 'User Consent', icon: User },
    { id: 'grievance', title: 'Grievance', icon: FileText },
    { id: 'dispute-resolution', title: 'Dispute Resolution', icon: Shield }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L&L</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Lex & Ledger</h1>
                <p className="text-sm text-gray-500">Privacy Policy</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700 font-medium">Secure & Compliant</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-8">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="w-5 h-5 text-blue-600" />
                <h2 className="font-semibold text-gray-900">Contents</h2>
              </div>
              <p className="text-sm text-gray-600 mb-6">Navigate through our privacy policy</p>
              
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{section.title}</span>
                      <ChevronRight className="w-3 h-3 ml-auto" />
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8" />
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
              </div>
              <p className="text-blue-100 mb-6 text-lg">
                Effective Date: [DD/MM/YYYY]
              </p>
              <p className="text-blue-50 leading-relaxed">
                At Lex & Ledger, we respect your privacy and are committed to protecting your personal 
                data. This Privacy Policy explains how we collect, use, share, and safeguard data for 
                Clients and Experts using our services.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center space-x-2 bg-blue-500/30 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Last Updated: 2024</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-500/30 px-3 py-1 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">India Compliant</span>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* General Section */}
              <section id="general" className="bg-white rounded-xl shadow-sm border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">1. General</h2>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
                  <p className="text-blue-800 font-medium">
                    Important: This document is an electronic record under the Information Technology Act, 2000.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  The domain name www.lexledger.com ("Website"), is owned and operated by Lex & Ledger, a Private 
                  Company limited by shares, incorporated under the provisions of the Companies Act, 2014, and having 
                  its registered office at Kanpur.
                </p>

                {/* Data Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">User</h3>
                    <p className="text-sm text-gray-600">Any Client or Expert registered on the Platform</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personal Data</h3>
                    <p className="text-sm text-gray-600">Information that identifies you (name, email, contact)</p>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-lg">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sensitive Data</h3>
                    <p className="text-sm text-gray-600">Financial info, government IDs, certifications</p>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6">
                  <p className="text-orange-800">
                    <strong>Legal Agreement:</strong> By visiting our website, you agree to be bound by this Policy and our Terms of Use. We 
                    retain the right to amend this Policy without prior notice.
                  </p>
                </div>
              </section>

              {/* Data Collection Section */}
              <section id="data-collection" className="bg-white rounded-xl shadow-sm border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">2. Collection of Personal and Other Information</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We collect and store your personal information provided by you from time to time on the Website, including but not limited to:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Basic Information</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Username and passwords</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Email address and name</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Address and contact details</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Age, date of birth, nationality</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Usage Information</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Shopping preferences</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Browsing history</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>IP address and device info</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>Uploaded images and content</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    This information is used to provide services and features targeted at you, customize and improve the Website 
                    to make your experience safer and easier.
                  </p>
                </div>
              </section>

              {/* Cookies Section */}
              <section id="cookies" className="bg-white rounded-xl shadow-sm border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">3. Cookies</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  A 'Cookie' is a small piece of information stored by a web server on a web browser so it can later be traced back 
                  from that particular browser. Cookies are useful for enabling the browser to remember information specific to a given user.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-yellow-800">
                    <strong>Essential Cookies:</strong> Enable Platform functionality (e.g., login sessions).
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  The Website places both permanent and temporary cookies in your computer's hard drive and web browser. 
                  While you are free to decline cookies if your browser permits, you may consequently be unable to use certain features on the Website.
                </p>
              </section>

              {/* Data Sharing Section */}
              <section id="data-sharing" className="bg-white rounded-xl shadow-sm border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-4 h-4 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">4. Data Sharing</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We may share your personal information with other corporate entities and affiliates to help detect and prevent 
                  identity theft, fraud and other potentially illegal acts.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Legal Compliance</h4>
                      <p className="text-sm text-gray-600">We may disclose personal information if required by law or court orders.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <User className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Transfers</h4>
                      <p className="text-sm text-gray-600">Information may be shared in case of merger, acquisition, or restructuring.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Security Section */}
              <section id="data-security" className="bg-white rounded-xl shadow-sm border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Transactions on the Website are secure and protected. Any information entered when transacting on the Website 
                  is encrypted to protect against unintentional disclosure to third parties.
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Payment Security:</strong> Your credit and debit card information is not received, stored by or retained by us. 
                    This information is supplied directly to authorized payment gateways.
                  </p>
                </div>
              </section>

              {/* Contact Section */}
              <section id="grievance" className="bg-white rounded-xl shadow-sm border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">8. Grievance</h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In accordance with Information Technology Act 2000 and rules made thereunder, contact details are provided below:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Lex & Ledger</h3>
                  <p className="text-gray-600">Email: [Contact Email]</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L&L</span>
              </div>
              <span className="font-semibold">Lex & Ledger</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Lex & Ledger. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Privacy

