import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, X } from 'lucide-react';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactDialog = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Message sent successfully!');
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) setTimeout(() => setIsSubmitted(false), 300); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 bg-wash border-4 border-navy rounded-none shadow-[12px_12px_0_0_rgba(10,25,47,0.3)] overflow-hidden">
        
        {isSubmitted ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-teal flex items-center justify-center mx-auto mb-8 border-4 border-navy shadow-hard">
              <CheckCircle2 className="w-10 h-10 text-navy" />
            </div>
            <h2 className="text-3xl font-black text-navy uppercase tracking-tighter mb-4">MESSAGE_SENT</h2>
            <p className="font-mono text-sm text-ink-light mb-8">
              {'>'} THANK YOU FOR YOUR INQUIRY.<br />
              {'>'} WE WILL BE IN TOUCH SHORTLY.
            </p>
            <Button onClick={handleClose} className="h-14 px-8 bg-navy text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy transition-colors border-2 border-navy">
              Close
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 bg-navy p-8 md:p-10 text-white relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal" />
              
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">{'>'} GET_STARTED</span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6">LET'S TALK</h2>
              
              <p className="text-white/70 text-sm leading-relaxed mb-10">
                Ready to experience hassle-free property management? Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal/20 flex items-center justify-center border border-teal/30">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <a href="mailto:hello@propertypartner.co.nz" className="text-teal hover:underline">
                    hello@propertypartner.co.nz
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal/20 flex items-center justify-center border border-teal/30">
                    <Phone className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-white">03 385 4888</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal/20 flex items-center justify-center border border-teal/30">
                    <MapPin className="w-5 h-5 text-teal" />
                  </div>
                  <span className="text-white/70">Christchurch, NZ</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-8 md:p-10 bg-white">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-navy mb-2 font-bold">Full Name</label>
                  <input
                    {...register('name')}
                    placeholder="JOHN DOE"
                    className="w-full bg-wash border-2 border-navy h-12 px-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-mono">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-navy mb-2 font-bold">Email Address</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="JOHN@EXAMPLE.COM"
                    className="w-full bg-wash border-2 border-navy h-12 px-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-mono">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-navy mb-2 font-bold">Phone Number</label>
                  <input
                    {...register('phone')}
                    placeholder="03 385 4888"
                    className="w-full bg-wash border-2 border-navy h-12 px-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-mono">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-navy mb-2 font-bold">Message</label>
                  <textarea
                    {...register('message')}
                    rows="4"
                    placeholder="HOW CAN WE HELP?"
                    className="w-full bg-wash border-2 border-navy p-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-mono">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-navy text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy hover:shadow-hard transition-all border-2 border-navy"
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-5 w-5" /> Send Message</>
                  )}
                </Button>
              </form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
