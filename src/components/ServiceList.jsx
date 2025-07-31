import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { ArrowRight } from 'lucide-react';

const ServiceList = ({ services, onServiceSelect }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {services.map((service) => (
        <Card
          key={service.id}
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
          onClick={() => onServiceSelect(service)}
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
  );
};

export default ServiceList;

