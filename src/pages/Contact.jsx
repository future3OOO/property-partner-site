import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-wash">
      <Helmet>
        <title>Contact Property Partner | Christchurch Property Managers | Property Partner</title>
        <meta name="description" content="Get in touch with Property Partner. Phone 03 385 4888 or email hello@propertypartner.co.nz. Professional property management in Christchurch, NZ." />
        <meta name="keywords" content="contact Property Partner, Christchurch property manager phone, property management contact NZ" />
        <link rel="canonical" href="https://propertypartner.co.nz/contact" />
        <meta property="og:title" content="Contact Property Partner | Christchurch Property Managers | Property Partner" />
        <meta property="og:description" content="Get in touch with Property Partner. Phone 03 385 4888 or email hello@propertypartner.co.nz. Professional property management in Christchurch, NZ." />
        <meta property="og:url" content="https://propertypartner.co.nz/contact" />
      </Helmet>
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 border-2 border-navy bg-white font-mono text-xs uppercase tracking-widest text-navy font-bold mb-4">
              <span className="w-1.5 h-1.5 bg-teal rounded-full" />
              CONTACT_US
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-navy tracking-tighter mb-4">
              GET IN TOUCH
            </h1>
            <p className="text-navy/70 max-w-xl mx-auto">
              Have a question about our property management services? We are here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 border-4 border-navy shadow-hard bg-white">
            <div className="md:col-span-2 bg-navy p-8 md:p-12 text-white">
              <h2 className="text-2xl font-black mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-teal" />
                  <a href="mailto:hello@propertypartner.co.nz" className="hover:text-teal transition-colors">
                    hello@propertypartner.co.nz
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-teal" />
                  <span>03 385 4888</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-teal" />
                  <span>Christchurch, New Zealand</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-teal mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-navy mb-2">MESSAGE SENT</h3>
                  <p className="text-navy/70">We will get back to you shortly.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-mono font-bold uppercase text-navy">Full Name</FormLabel>
                        <FormControl>
                          <Input className="h-12 rounded-none border-2 border-navy" placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-mono font-bold uppercase text-navy">Email</FormLabel>
                        <FormControl>
                          <Input className="h-12 rounded-none border-2 border-navy" type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-mono font-bold uppercase text-navy">Phone</FormLabel>
                        <FormControl>
                          <Input className="h-12 rounded-none border-2 border-navy" placeholder="03 385 4888" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-mono font-bold uppercase text-navy">Message</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-[120px] rounded-none border-2 border-navy" placeholder="How can we help?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-navy text-white font-mono font-bold uppercase rounded-none border-2 border-navy hover:bg-teal hover:text-navy transition-colors">
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
