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
function Terms() {
     const termsContent = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Welcome to Lex & Ledger",
      content: "By accessing or using our services, you agree to be bound by these terms and conditions. Our platform connects clients with legal experts to provide comprehensive legal services."
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "User Responsibilities", 
      content: "As a user, you agree to use our platform ethically and avoid any activities that violate our policies or cause harm to others. You must provide accurate information and maintain the confidentiality of your account."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy and Data Protection",
      content: "Your privacy is important to us. We are committed to protecting your personal information in compliance with applicable laws including the Information Technology Act, 2000."
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Limitation of Liability",
      content: "Our platform is provided as is. We are not liable for Expert advice/actions. Clients engage Experts at their own risk. The Platform's liability is capped at the fees paid by the Client."
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Pricing and Payment",
      content: "Clients agree to pay fees as per the Platform's pricing structure (subscription, pay-per-project, or retainer). All fees are non-negotiable and binding once a project is confirmed."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Dispute Resolution",
      content: "Unresolved disputes will be settled via arbitration in Kanpur, Uttar Pradesh, India, under the Arbitration and Conciliation Act, 1996. Courts in Kanpur will have exclusive jurisdiction."
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
                      {renderContentSection(termsContent, "Terms and Conditions")}

</ScrollArea></div>
  )
}

export default Terms