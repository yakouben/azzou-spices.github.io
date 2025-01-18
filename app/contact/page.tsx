'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center"> تواصل معنا</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">راسلنا من هنا</h2>
          <p className="mb-6">املئ هذا النموذج وسنتواصل معك قريباً.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">معلومات التواصل</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-amber-600 mr-2" />
              <p>باتنة-المعذر-امام الخزناجي</p>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-amber-600 mr-2" />
              <p>0676485962</p>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-amber-600 mr-2" />
              <p>info@azzouspices.com</p>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-amber-600 mr-2" />
              <p>كل الايام من 8 صباحا الى 10 مساءا</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

