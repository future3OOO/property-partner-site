import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from 'lucide-react';

const RentalAppraisalSection = () => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 1) {
            setStep(2);
        } else {
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <section className="py-24 bg-navy text-white text-center relative overflow-hidden border-t-2 border-teal">
                <div className="container mx-auto px-6 max-w-md relative z-10">
                    <div className="w-20 h-20 bg-teal flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-hard">
                        <CheckCircle2 className="w-10 h-10 text-navy" />
                    </div>
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">REQUEST_RECEIVED</h2>
                    <p className="font-mono text-teal text-sm">
                        {'>'} PROCESSING DATA...<br />
                        {'>'} ESTIMATE INBOUND.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-white relative border-t-2 border-navy">
            <div className="container mx-auto px-6">

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row border-4 border-navy shadow-hard">

                    {/* Left Panel: Context */}
                    <div className="md:w-2/5 bg-navy p-12 text-white flex flex-col justify-between relative overflow-hidden border-r-4 border-navy">
                        <div className="relative z-10">
                            <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest mb-4 block">{'>'} VALUATION_TOOL</span>
                            <h2 className="anti-h2 mb-6 leading-none tracking-tighter">
                                CALCULATE <br /> WORTH
                            </h2>
                            <p className="font-mono text-sm text-white/70 leading-relaxed border-l-2 border-teal pl-4">
                                Input parameters for algorithmic appraisal.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 font-mono text-sm">
                            <div className={`flex items-center gap-3 mb-2 ${step >= 1 ? 'text-teal' : 'text-white/30'}`}>
                                <span className="font-bold">[01]</span>
                                <span>IDENTITY_VERIFICATION</span>
                            </div>
                            <div className={`flex items-center gap-3 ${step >= 2 ? 'text-teal' : 'text-white/30'}`}>
                                <span className="font-bold">[02]</span>
                                <span>ASSET_DETAILS</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Form */}
                    <div className="md:w-3/5 p-12 bg-white">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="mb-8 border-b-2 border-navy pb-4">
                                <h3 className="text-2xl font-black text-navy mb-1 uppercase">
                                    {step === 1 ? 'Step_01: Identity' : 'Step_02: Asset'}
                                </h3>
                            </div>

                            {step === 1 ? (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-mono font-bold uppercase text-navy">Full_Name</Label>
                                        <Input className="h-12 rounded-none border-2 border-navy bg-wash focus:ring-0 focus:border-teal transition-colors font-mono text-sm" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-mono font-bold uppercase text-navy">Email_Address</Label>
                                        <Input className="h-12 rounded-none border-2 border-navy bg-wash focus:ring-0 focus:border-teal transition-colors font-mono text-sm" type="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-mono font-bold uppercase text-navy">Phone_Number</Label>
                                        <Input className="h-12 rounded-none border-2 border-navy bg-wash focus:ring-0 focus:border-teal transition-colors font-mono text-sm" type="tel" placeholder="(021) 123-4567" required />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-mono font-bold uppercase text-navy">Property_Address</Label>
                                        <Input className="h-12 rounded-none border-2 border-navy bg-wash focus:ring-0 focus:border-teal transition-colors font-mono text-sm" placeholder="123 Example St" required />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-mono font-bold uppercase text-navy">Bedrooms</Label>
                                            <Input className="h-12 rounded-none border-2 border-navy bg-wash focus:ring-0 focus:border-teal transition-colors font-mono text-sm" type="number" min="0" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-xs font-mono font-bold uppercase text-navy">Bathrooms</Label>
                                            <Input className="h-12 rounded-none border-2 border-navy bg-wash focus:ring-0 focus:border-teal transition-colors font-mono text-sm" type="number" min="0" required />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="pt-6 flex gap-4">
                                {step === 2 && (
                                    <Button type="button" onClick={() => setStep(1)} variant="ghost" className="h-14 px-6 text-navy font-mono font-bold uppercase tracking-widest rounded-none border-2 border-navy hover:bg-navy hover:text-white">
                                        Back
                                    </Button>
                                )}
                                <Button type="submit" className="flex-1 h-14 bg-navy text-white font-mono font-bold uppercase tracking-widest rounded-none border-2 border-navy hover:bg-teal hover:text-navy hover:border-teal transition-colors shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                                    {step === 1 ? 'Next_Step >' : 'Execute_Appraisal'}
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RentalAppraisalSection;
