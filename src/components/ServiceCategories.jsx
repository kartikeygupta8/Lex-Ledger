import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight } from 'lucide-react';

const ServiceCategories = ({ categories, onCategorySelect }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {categories.map((category) => (
        <Card
          key={category.id}
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 group"
          onClick={() => onCategorySelect(category)}
        >
          <CardContent className="p-6">
            <div
              className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <category.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {category.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-600 font-medium">
                {category.services?.length || 0} Services
              </span>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Explore
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCategories;

