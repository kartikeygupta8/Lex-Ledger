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
function Refund() {
  const refundContent = [
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "General Principles",
      content: "Certain fees (registration, administrative charges) are non-refundable unless explicitly stated. Refunds are evaluated case-by-case at Lex & Ledger's sole discretion."
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Client Refund Eligibility",
      content: "Pay-per-project: Refund only if Expert fails to deliver and no replacement provided within 7 days. Subscription plans: Pro-rated refund if cancelled within 3 days."
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Expert Refund Terms",
      content: "Platform fees are non-refundable unless the Platform fails to provide agreed services. Commissions are non-refundable after project confirmation."
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Non-Refundable Scenarios",
      content: "Client-initiated cancellations after work commenced, force majeure events, breach of terms, fraud, misuse, or subjective dissatisfaction not attributable to Expert non-performance."
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Refund Process",
      content: "Submit request to refunds@lexledger.com within 7 days with Transaction ID, detailed reason, and supporting evidence. Review within 15 business days, processing within 10 days if approved."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Cancellation Terms",
      content: "Clients: Notify within 24 hours of confirmation. 15% cancellation fee after 24 hours. Experts: 48 hours notice required for scheduled consultations."
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
              {renderContentSection(refundContent, "Refund and Cancellation Policy")}

</ScrollArea></div>
  )
}

export default Refund