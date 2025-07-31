import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const ServiceBundles = ({ bundles, onBundleSelect }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Related Service Bundles
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {bundles.map((bundle) => (
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
                onClick={() => onBundleSelect(bundle)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Select Bundle
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceBundles;

