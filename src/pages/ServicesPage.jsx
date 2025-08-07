import React, { useEffect, useState } from 'react';
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Input } from '@/components/ui/input.jsx';
import { 
  Search, 
  Clock, 
  IndianRupee, 
  FileText, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { serviceCategories } from '@/static/service-data';

const ServicesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
const [isCategoryVisible, setIsCategoryVisible] = useState(true);
const [manuallyToggled, setManuallyToggled] = useState(false);

  // Get all services from all categories
  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryId: category.id,
      categoryTitle: category.title,
      categoryColor: category.color,
      categoryIcon: category.icon
    }))
  );

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleServiceClick = (service) => {
    navigate(`/services/${service.categoryId}`, { 
      state: { selectedServiceId: service.id } 
    });
  };

  const handleCategoryClick = (categoryId) => {
    if (categoryId === "immediate") {
      navigate(`/immediate-service`);
      // setBookingStep(3);
      return;
    }
     navigate(`/services/${categoryId}`);
    console.log({categoryId},"categoryIdcategoryIdcategoryId")
  };
useEffect(() => {
  if (searchTerm) {
    setIsCategoryVisible(false);
  }
}, [searchTerm, manuallyToggled]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive legal and financial services to support your business at every stage. 
            From startup formation to complex compliance, we've got you covered.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {serviceCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Service Categories Overview */}
      <div className={`flex items-center justify-between mb-4 ${!isCategoryVisible?"justify-end":""}`}>
{isCategoryVisible&&  <h2 className="text-2xl font-bold text-gray-900">Service Categories</h2>
}  <button
    onClick={() => {
      setIsCategoryVisible((prev) => !prev);
      setManuallyToggled(true);
    }}
    className="flex items-center gap-1 text-sm text-black-600 font-bold hover:underline cursor-pointer"
  >
    <span>{isCategoryVisible ? "Hide" : "Show Categories"}</span>
    <motion.div
      animate={{ rotate: isCategoryVisible ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <ChevronDown className="w-4 h-4" />
    </motion.div>
  </button>
</div>
<AnimatePresence initial={false}>

{isCategoryVisible && (
    <motion.div
      key="category-grid"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden"
    >

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 group"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {category.services.length} Services
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          </motion.div>
          )}
          </AnimatePresence>

        {/* All Services List */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              All Services ({filteredServices.length})
            </h2>
            {searchTerm && (
              <>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
                className="text-sm"
              >
                Clear Search
              </Button>
              
             
              </>
            )}
          </div>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const IconComponent = service.categoryIcon;
                return (
                  <Card 
                    key={`${service.categoryId}-${service.id}`}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 group"
                    onClick={() => handleServiceClick(service)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.categoryColor} flex items-center justify-center`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {service.categoryTitle}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <IndianRupee className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-600">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FileText className="h-4 w-4" />
                          <span>{service.documents.length} documents required</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                        variant="outline"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your business needs. 
            Get personalized recommendations and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate('/immediate-service')}
            >
              Get Expert Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

