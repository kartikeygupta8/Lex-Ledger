import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Moon, 
  Sun, 
  ArrowUp, 
  FileText, 
  Shield, 
  RefreshCw,
  Scale,
  Users,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
function Privacy() {
 const privacyContent = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Information Collection",
      content: "We collect information that you voluntarily provide including name, email address, contact details, and usage data to enhance your experience and provide better services."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "How We Use Your Data",
      content: "Your data is used to provide better services, improve our platform, send important updates, and customize your experience. We never share your data without consent."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Data Sharing",
      content: "We may share personal information with corporate entities and affiliates to help detect fraud and prevent illegal acts. We may disclose information if required by law or court orders."
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Your Rights",
      content: "You have the right to access, modify, or delete your data. You can adjust cookie preferences in your browser settings and contact us for data-related requests."
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Cookies and Tracking",
      content: "We use cookies to enhance your experience and track website performance. Cookies help us remember your preferences and provide personalized services."
    }
  ]
  const renderContentSection = (content, sectionTitle) => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">{sectionTitle}</h2>
        <p className="text-muted-foreground">Please read carefully before using our services</p>
      </div>
      
      <div className="grid gap-6">
        {content.map((item, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>          <ScrollArea className="h-[calc(100vh-200px)]">
              {renderContentSection(privacyContent, "Privacy Policy")}

</ScrollArea></div>
  )
}

export default Privacy