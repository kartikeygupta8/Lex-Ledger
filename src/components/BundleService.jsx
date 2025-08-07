import Faq from './FAQ'

function BundleService() {
  return (
    <div className="min-h-screen bg-gray-50">
   

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Header with new background color */}
        <div className="text-center mb-12">
          <div className="text-white rounded-2xl p-8 mb-8" style={{ backgroundColor: '#155dfc' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Startup Bundle</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Perfect for new businesses getting started - Complete business setup with all essential services
            </p>
          </div>
        </div>

        {/* Bundle Overview */}
        <section id="overview" className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-700 mb-6 flex items-center">
            🚀 Startup Bundle
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium ml-4">
              Most Popular
            </span>
          </h2>
          
          <div className="mb-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              Our comprehensive Startup Bundle is designed specifically for entrepreneurs and new businesses looking to establish their company legally and efficiently. This all-in-one package includes everything you need to get your startup off the ground, from company formation to essential compliance requirements, all at a significant discount compared to individual services.
            </p>
          </div>

          {/* Bundle Highlights */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-slate-700 mb-6 flex items-center">
              ⭐ Bundle Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Complete Services</h4>
                  <p className="text-sm text-slate-600">5 essential services bundled together for maximum value</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  ₹8K
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Save Money</h4>
                  <p className="text-sm text-slate-600">Save ₹8,000 compared to individual service pricing</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  30
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Days Timeline</h4>
                  <p className="text-sm text-slate-600">Complete business setup within 30 business days</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  24/7
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Support</h4>
                  <p className="text-sm text-slate-600">Dedicated support throughout the entire process</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section with new background color */}
     <section className="mb-8">
  <div className="text-white rounded-xl p-8 text-center relative overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300" style={{ backgroundColor: '#155dfc' }}>
    
    {/* Sparkle animation */}
    <div className="absolute top-0 right-0 animate-pulse text-yellow-300 p-4 text-xl">✨</div>
    
    <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center animate-fadeIn">
      💰 <span className="ml-2">Bundle Pricing</span>
    </h3>
    
    <div className="mb-4 transition-all duration-500">
      <span className="text-3xl line-through text-blue-200 mr-4">₹33,000</span>
      <span className="text-5xl font-bold text-white animate-bounce">₹25,000</span>
    </div>
    
    <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block mb-4 shadow-md animate-pulse">
      Save ₹8,000 (24% Off)
    </div>
    
    <p className="text-blue-100 mb-6 transition-opacity duration-300 hover:opacity-90">
      Includes all services, government fees, documentation, and professional charges
    </p>
    
    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fadeIn">
      Select This Bundle
    </button>
  </div>
</section>


        {/* Services Included */}
        <section id="services" className="mb-8">
          <h3 className="text-2xl font-semibold text-slate-700 mb-6 flex items-center">
            ✅ Services Included in Bundle
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start space-x-4">
                <div className="text-teal-500 mt-1">🏢</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Company Formation & Registration</h4>
                  <p className="text-slate-600 mb-3">Complete company incorporation including name reservation, MOA/AOA preparation, and Certificate of Incorporation. Get your business legally established with all required documentation.</p>
                  <div className="text-blue-600 font-semibold">
                    Individual Price: ₹12,000
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start space-x-4">
                <div className="text-teal-500 mt-1">🤝</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">LLP Registration</h4>
                  <p className="text-slate-600 mb-3">Limited Liability Partnership registration for businesses that want partnership benefits with limited liability protection. Includes LLP agreement and all regulatory filings.</p>
                  <div className="text-blue-600 font-semibold">
                    Individual Price: ₹8,000
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start space-x-4">
                <div className="text-teal-500 mt-1">📄</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Income Tax - PAN</h4>
                  <p className="text-slate-600 mb-3">PAN card application and processing for your company. Essential for all financial transactions, bank account opening, and tax compliance requirements.</p>
                  <div className="text-blue-600 font-semibold">
                    Individual Price: ₹3,000
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start space-x-4">
                <div className="text-teal-500 mt-1">🏦</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Bank Account Opening Assistance</h4>
                  <p className="text-slate-600 mb-3">Complete assistance with current account opening for your company including documentation preparation and bank liaison to ensure smooth account setup.</p>
                  <div className="text-blue-600 font-semibold">
                    Individual Price: ₹5,000
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start space-x-4">
                <div className="text-teal-500 mt-1">🛡️</div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">Basic Compliance Setup</h4>
                  <p className="text-slate-600 mb-3">Initial compliance framework setup including statutory registers, board resolution templates, and guidance on ongoing compliance requirements.</p>
                  <div className="text-blue-600 font-semibold">
                    Individual Price: ₹5,000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Comparison */}
          <div className="bg-slate-100 p-8 rounded-2xl mt-8 text-center">
            <h4 className="text-slate-700 mb-6 text-xl font-semibold flex items-center justify-center">
              🧮 Value Comparison
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <strong className="text-slate-600 block mb-2">Individual Services Total:</strong>
                <span className="text-3xl text-red-500 font-bold">₹33,000</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <strong className="text-slate-600 block mb-2">Bundle Price:</strong>
                <span className="text-3xl text-green-500 font-bold">₹25,000</span>
              </div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-xl text-lg font-bold flex items-center justify-center">
              🏆 You Save: ₹8,000 (24% Discount)
            </div>
          </div>
        </section>

        {/* FAQ */}
        <Faq/>
        
      </div>
    </div>
  )
}

export default BundleService

