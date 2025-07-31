import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Button } from '@/components/ui/button.jsx';

const ContactPage = () => {
     React.useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className='flex items-start gap-3'>
          <div className="flex flex-col gap-3 mb-12">
            <Card className="text-center px-6 pt-4 pb-3 max-w-[400px] shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">contact@lexledger.com</p>
                <Button variant="link" className="text-blue-600 hover:text-blue-700">
                  Send a Message
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center px-6 pt-4 pb-3 max-w-[400px] shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-green-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+91 98765 43210</p>
                <Button variant="link" className="text-green-600 hover:text-green-700">
                  Request a Call Back
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center px-6 pt-4 pb-3 max-w-[400px] shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-xl font-semibold text-gray-900">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">123 Business Hub, Bandra West, Mumbai, Maharashtra, India</p>
                <Button variant="link" className="text-purple-600 hover:text-purple-700">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full flex-1 p-8 shadow-lg rounded-lg">
            <CardHeader className="text-center mb-6">
              <CardTitle className="text-3xl font-bold text-gray-900">Send Us a Message</CardTitle>
              <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you as soon as possible.</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input type="text" id="name" placeholder="Your Name" className="mt-1 block w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" id="email" placeholder="your@example.com" className="mt-1 block w-full" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <Input type="text" id="subject" placeholder="Subject of your inquiry" className="mt-1 block w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" placeholder="Your message..." rows="5" className="mt-1 block w-full" />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

