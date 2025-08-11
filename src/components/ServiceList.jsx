import React from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Badge } from "@/components/ui/badge.jsx";
import { ArrowRight } from "lucide-react";

const ServiceList = ({ services, onServiceSelect }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {services.map((service,idx) => (
        <Card
          key={service.id}
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100"
          onClick={() => onServiceSelect(service)}
        >
          <CardContent className="p-6">
            <div className="flex flex-col justify-between items-start mb-4">
              <div
  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
    idx % 2 === 0
      ? "bg-gradient-to-r from-blue-500 to-purple-600"
      : "bg-gradient-to-r from-green-500 to-blue-600"
  }`}
              >
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-start">

              <h3 className="text-lg font-semibold text-gray-900 flex-1">
                {service.name}
              </h3>
              <Badge variant="outline" className="ml-4">
                {service.duration}
              </Badge>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
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
