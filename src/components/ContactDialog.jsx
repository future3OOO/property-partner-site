import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, X } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactDialog = ({ children, open: controlledOpen, onOpenChange: controlledOnOpenChange }) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Support both controlled and uncontrolled modes
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setIsOpen = controlledOnOpenChange || setInternalOpen;

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
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
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
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
      <DialogContent 
        className="w-[95vw] max-w-[800px] max-h-[90vh] p-0 bg-wash border-4 border-navy rounded-none shadow-[8px_8px_0_0_rgba(10,25,47,0.3)] md:shadow-[12px_12px_0_0_rgba(10,25,47,0.3)] overflow-hidden"
        aria-describedby={undefined}
      >
        <VisuallyHidden>
          <DialogTitle>Contact Property Partner</DialogTitle>
        </VisuallyHidden>

        {isSubmitted ? (
          <div className="p-6 md:p-12 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-teal flex items-center justify-center mx-auto mb-6 md:mb-8 border-4 border-navy shadow-hard">
              <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-navy" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-navy uppercase tracking-tighter mb-3 md:mb-4">MESSAGE_SENT</h2>
            <p className="font-mono text-xs md:text-sm text-ink-light mb-6 md:mb-8">
              {">"} THANK YOU FOR YOUR INQUIRY.<br />
              {">"} WE WILL BE IN TOUCH SHORTLY.
            </p>
            <Button onClick={handleClose} className="h-12 md:h-14 px-6 md:px-8 bg-navy text-white font-mono text-xs md:text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy transition-colors border-2 border-navy">
              Close
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 max-h-[85vh] overflow-y-auto">
            {/* Contact Info Sidebar - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block md:col-span-2 bg-navy p-6 md:p-10 text-white relative">
              <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-teal" />

              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">{">"} GET_STARTED</span>
              <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-4 md:mb-6">LET&apos;S TALK</h2>

              <p className="text-white/70 text-sm leading-relaxed mb-6 md:mb-10">
                Ready to experience hassle-free property management? Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="space-y-4 md:space-y-6 font-mono text-sm">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-teal/20 flex items-center justify-center border border-teal/30">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-teal" />
                  </div>
                  <a href="mailto:hello@propertypartner.co.nz" className="text-teal hover:underline text-xs md:text-sm">
                    hello@propertypartner.co.nz
                  </a>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-teal/20 flex items-center justify-center border border-teal/30">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-teal" />
                  </div>
                  <span className="text-white text-xs md:text-sm">03 385 4888</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-teal/20 flex items-center justify-center border border-teal/30">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-teal" />
                  </div>
                  <span className="text-white/70 text-xs md:text-sm">Christchurch, NZ</span>
                </div>
              </div>
            </div>

            {/* Mobile Header - Only shown on mobile */}
            <div className="md:hidden bg-navy p-4 text-white">
              <span className="font-mono text-[10px] font-bold text-teal uppercase tracking-widest mb-1 block">{">"} GET_STARTED</span>
              <h2 className="text-xl font-black uppercase tracking-tighter">CONTACT US</h2>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-4 md:p-10 bg-white">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-navy mb-1 md:mb-2 font-bold">Full Name</label>
                  <input
                    {...register("name")}
                    placeholder="JOHN DOE"
                    className="w-full bg-wash border-2 border-navy h-11 md:h-12 px-3 md:px-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] md:text-xs mt-1 font-mono">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-navy mb-1 md:mb-2 font-bold">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="JOHN@EXAMPLE.COM"
                    className="w-full bg-wash border-2 border-navy h-11 md:h-12 px-3 md:px-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] md:text-xs mt-1 font-mono">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-navy mb-1 md:mb-2 font-bold">Phone Number</label>
                  <input
                    {...register("phone")}
                    placeholder="03 385 4888"
                    className="w-full bg-wash border-2 border-navy h-11 md:h-12 px-3 md:px-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] md:text-xs mt-1 font-mono">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block font-mono text-[10px] md:text-xs uppercase tracking-widest text-navy mb-1 md:mb-2 font-bold">Message</label>
                  <textarea
                    {...register("message")}
                    rows="3"
                    placeholder="HOW CAN WE HELP?"
                    className="w-full bg-wash border-2 border-navy p-3 md:p-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-[10px] md:text-xs mt-1 font-mono">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 md:h-14 bg-navy text-white font-mono text-xs md:text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy hover:shadow-hard transition-all border-2 border-navy"
                >
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Send Message</>
                  )}
                </Button>
              </form>

              {/* Mobile Contact Info */}
              <div className="md:hidden mt-6 pt-4 border-t-2 border-navy/10">
                <div className="flex flex-wrap gap-4 justify-center font-mono text-[10px] text-navy/70">
                  <a href="mailto:hello@propertypartner.co.nz" className="flex items-center gap-1 text-teal">
                    <Mail className="w-3 h-3" /> Email
                  </a>
                  <a href="tel:033854888" className="flex items-center gap-1">
                    <Phone className="w-3 h-3" /> 03 385 4888
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
