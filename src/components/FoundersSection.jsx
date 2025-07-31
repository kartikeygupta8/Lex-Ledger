import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';

const FoundersSection = ({ founders }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team brings together expertise in technology, operations, and finance 
            to deliver comprehensive solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${founder.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <founder.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {founder.role}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {founder.expertise}
                </p>
                <p className="text-gray-600 text-sm">
                  {founder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;

