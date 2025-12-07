import React, { useState, useEffect } from 'react';
import {
    CheckCircle, Circle, Calendar, Mail, Phone, User, Home, Clock,
    TrendingUp, Award, AlertTriangle, Sparkles, Droplets, Wind,
    Leaf, Wrench, Package, Key, Printer, ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MoveOutChecklist = () => {
    // --- STATE ---
    const defaultChecklistItems = [
        // PREPARATION
        {
            id: 'prep-1',
            task: 'Plan Ahead',
            description: 'Dedicate 1-2 days for deep cleaning after your belongings have been cleared out. For professional cleaning, especially an end-of-tenancy deep clean, book services well in advance.',
            priority: 'Critical',
            section: 'preparation',
            completed: false
        }, {
            id: 'prep-2',
            task: 'Professional Services',
            description: 'Consider hiring professionals for tasks like cleaning and painting. This ensures quality and reduces the risk of bond deductions for unsatisfactory work.',
            priority: 'Recommended',
            section: 'preparation',
            completed: false
        }, {
            id: 'prep-3',
            task: 'Clarification',
            description: 'If you have any doubts about this checklist, please reach out. We’re here to assist.',
            priority: 'Standard',
            section: 'preparation',
            completed: false
        },
        // DAMAGE & REPAIRS
        {
            id: 'damage-1',
            task: 'Property Inspection',
            description: 'Carefully inspect the property for any damages or maintenance issues that may have been overlooked during your tenancy. Promptly report these to your property manager so they can be resolved before you move out.',
            priority: 'Critical',
            section: 'damage',
            completed: false
        }, {
            id: 'damage-2',
            task: 'Professional Painting',
            description: 'For wall touch-ups or paint repairs, professional services can be required to match existing finishes and quality. DIY paint jobs that don’t meet standards could lead to bond deductions.',
            priority: 'Required',
            section: 'damage',
            completed: false
        },
        // CLEANING ESSENTIALS - Kitchen
        {
            id: 'kitchen-1',
            task: 'Kitchen Deep Clean',
            description: 'Thoroughly clean the oven, stovetop, and range hood filters. Ensure all surfaces, including inside/outside of cupboards and drawers, are spotless.',
            priority: 'Critical',
            section: 'kitchen',
            completed: false
        },
        // CLEANING ESSENTIALS - Bathrooms
        {
            id: 'bath-1',
            task: 'Bathrooms',
            description: 'Clean all fixtures to remove soap scum, mineral buildup, and residue. Pay extra attention to showers and baths. Ensure all drains/shower wastes are clear of any hair/debris.',
            priority: 'Critical',
            section: 'bathrooms',
            completed: false
        },
        // CLEANING ESSENTIALS - Walls
        {
            id: 'walls-1',
            task: 'Walls',
            description: 'Vacuum any cobwebs. Use sugar soap formulated wall wipes for cleaning light markings off all walls. If walls have scuff marks, try using a magic eraser. If it’s more than scuff marks, then engage a professional painter.',
            priority: 'Required',
            section: 'walls',
            completed: false
        },
        // CLEANING ESSENTIALS - Ceilings
        {
            id: 'ceiling-1',
            task: 'Ceilings',
            description: 'Vacuum any cobwebs. Spot clean, removing all visible dirt, mould, and insect residue (pay attention to residue around light fittings).',
            priority: 'Standard',
            section: 'ceilings',
            completed: false
        },
        // CLEANING ESSENTIALS - Floors
        {
            id: 'floor-1',
            task: 'Complete floor cleaning',
            description: 'Vacuum, then wash all hard floors thoroughly with a floor cleaning product removing all dirt and grime. A quick once over with a mop is usually not enough.',
            priority: 'Required',
            section: 'floors',
            completed: false
        },
        // CLEANING ESSENTIALS - Carpets
        {
            id: 'carpet-1',
            task: 'Carpets',
            description: 'Vacuum and shampoo, ensuring they are clean/stain-free. Engaging a professional carpet cleaner is the easiest way to do this. For pet owners, professional cleaning is essential to remove all odours & a final vacuum post-shampooing is required.',
            priority: 'Critical',
            section: 'carpets',
            completed: false
        },
        // CLEANING ESSENTIALS - Odours
        {
            id: 'odour-1',
            task: 'Odours',
            description: 'All cooking, hygiene-related and pet odours must be fully removed from the property. Special attention may be needed for indoor pet areas.',
            priority: 'Critical',
            section: 'odours',
            completed: false
        },
        // OUTDOOR SPACES
        {
            id: 'outdoor-1',
            task: 'Lawns & Gardens',
            description: 'Mow the lawns, trim edges, weed gardens, and remove all garden waste. Please don’t go hiding grass clipping somewhere because they don’t all fit in the green bin! *Note: Only applicable if listed as your responsibility.',
            priority: 'Required',
            section: 'outdoor',
            completed: false
        }, {
            id: 'outdoor-2',
            task: 'Garage/Driveway',
            description: 'These areas should be clean, free from rubbish and personal belongings. Any new flooring stains should be removed.',
            priority: 'Required',
            section: 'outdoor',
            completed: false
        },
        // DETAIL CLEANING
        {
            id: 'detail-1',
            task: 'Doors & Skirting',
            description: 'Wipe down skirting boards, architraves, doors, and door frames to remove dust and marks.',
            priority: 'Standard',
            section: 'details',
            completed: false
        }, {
            id: 'detail-3',
            task: 'Windows',
            description: 'Clean inside and out, including frames, tracks, and glass.',
            priority: 'Required',
            section: 'details',
            completed: false
        },
        // TEXTILES
        {
            id: 'textile-1',
            task: 'Curtains & Blinds',
            description: 'Cold Wash all curtains/linings/nets if dirty or showing signs of mould and pet hair. Thoroughly Clean all blinds, removing all dirt and dust build up (consider engaging a professional).',
            priority: 'Required',
            section: 'textiles',
            completed: false
        },
        // FIXTURES & FITTINGS
        {
            id: 'fixture-1',
            task: 'Electrical & Hardware',
            description: 'Wipe light shades, surrounds, and switches to remove fingerprints. Clean door handles and latches.',
            priority: 'Required',
            section: 'fixtures',
            completed: false
        }, {
            id: 'fixture-2',
            task: 'All light fixtures',
            description: 'Should be in working order and replace any blown light bulbs.',
            priority: 'Required',
            section: 'fixtures',
            completed: false
        },
        // FURNISHINGS & CHATTELS
        {
            id: 'furnish-1',
            task: 'Keep or replace',
            description: 'Ensure all items listed in your tenancy agreement are in working order and in good condition, considering normal wear and tear. If any furnishings are missing then they need to be replaced.',
            priority: 'Required',
            section: 'furnishings',
            completed: false
        },
        // APPLIANCES
        {
            id: 'appliance-1',
            task: 'Whiteware',
            description: 'Clean and run dishwashers (if applicable) on an empty cycle. Important: Unscrew and remove the bottom sump/filter to clean out any food debris.',
            priority: 'Standard',
            section: 'appliances',
            completed: false
        }, {
            id: 'appliance-2',
            task: 'Heating & Ventilation',
            description: 'Clean heat pump filters, dust vents, and wipe down ceiling/extraction fans.',
            priority: 'Required',
            section: 'appliances',
            completed: false
        },
        // RUBBISH
        {
            id: 'rubbish-1',
            task: 'Council Bins',
            description: 'Ensure council bins are empty and clean. Arrange alternative rubbish removal if bin collection does not align with your move-out.',
            priority: 'Required',
            section: 'rubbish',
            completed: false
        }, {
            id: 'rubbish-2',
            task: 'General rubbish',
            description: 'Ensure that rubbish is removed from all areas of the property.',
            priority: 'Critical',
            section: 'rubbish',
            completed: false
        },
        // KEYS & REMOTES
        {
            id: 'keys-1',
            task: 'Return Keys',
            description: 'All keys and remotes issued at the start of tenancy must be returned in good working order.',
            priority: 'Critical',
            section: 'keys',
            completed: false
        },
        // FINAL CHECKS
        {
            id: 'final-1',
            task: 'Condition',
            description: 'Leave the property in a condition you’d be happy to find if you were the next tenant.',
            priority: 'Required',
            section: 'final',
            completed: false
        }, {
            id: 'final-2',
            task: 'Bond inspection',
            description: 'Review each item in this checklist and ensure you\'ve completed all tasks before the bond inspection is due to be carried out.',
            priority: 'Critical',
            section: 'final',
            completed: false
        }
    ];

    const [items, setItems] = useState(defaultChecklistItems);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle Item handler
    const toggleItem = (id) => {
        setItems(prevItems => prevItems.map(item => item.id === id ? {
            ...item,
            completed: !item.completed
        } : item));
    };

    // Derived State
    const totalTasks = items.length;
    const completedTasks = items.filter(item => item.completed).length;
    const progressPercent = Math.round(completedTasks / totalTasks * 100);

    // Helpers
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Critical': return 'bg-red-50 text-red-600 border-red-100';
            case 'Required': return 'bg-teal-50 text-teal-600 border-teal-100';
            case 'Recommended': return 'bg-amber-50 text-amber-600 border-amber-100';
            default: return 'bg-wash text-ink-light border-wash';
        }
    };

    const getSectionItems = (section) => items.filter(item => item.section === section);

    const renderChecklistSection = (title, icon, sections) => {
        const sectionItems = sections.flatMap(s => getSectionItems(s));
        const sectionCompleted = sectionItems.filter(i => i.completed).length;
        const sectionTotal = sectionItems.length;

        if (sectionTotal === 0) return null;

        const isFinalSection = title === 'Final Checks';
        const cardBaseClasses = isFinalSection
            ? 'bg-teal/5 border-teal'
            : 'bg-white border-navy/10';

        return (
            <div className="mb-6 break-inside-avoid">
                <div className="flex items-center justify-between mb-4 border-b-2 border-navy/10 pb-2">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-navy text-white flex items-center justify-center">
                            {icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-black uppercase tracking-widest text-navy">{title}</h3>
                            <p className="text-xs text-ink-light font-mono">
                                {sectionCompleted} of {sectionTotal} completed
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    {sectionItems.map(item => (
                        <div
                            key={item.id}
                            onClick={() => toggleItem(item.id)}
                            className={`${cardBaseClasses} border p-4 hover:border-teal transition-all cursor-pointer group relative overflow-hidden`}
                        >
                            <div className="flex items-start gap-4 z-10 relative">
                                <div className="mt-0.5 shrink-0">
                                    {item.completed
                                        ? <CheckCircle className="text-teal w-6 h-6" />
                                        : <Circle className="text-navy/20 group-hover:text-teal w-6 h-6" />
                                    }
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-start justify-between gap-3 mb-1">
                                        <h4 className={`font-bold text-sm ${item.completed ? 'text-ink-light line-through decoration-teal' : 'text-navy'}`}>
                                            {item.task}
                                        </h4>
                                        {item.priority === 'Critical' && (
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 border shrink-0 ${getPriorityColor(item.priority)}`}>
                                                {item.priority}
                                            </span>
                                        )}
                                    </div>
                                    <p className={`text-xs leading-relaxed ${item.completed ? 'text-ink-light/50' : 'text-ink'}`}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col min-h-screen bg-wash print:bg-white">
            <div className="print:hidden">
                <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>

            <main className="flex-grow pt-24 pb-24 print:pt-0 print:pb-0">
                <div className="print:hidden container mx-auto px-6 mb-8">
                    <Link to="/tenant-resources" className="inline-flex items-center gap-2 text-navy hover:text-teal transition-colors mb-6 font-mono text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Back to Resources
                    </Link>
                </div>

                {/* WRAPPER (A4 WIDTH SIMULATION) */}
                <div className="mx-auto bg-white shadow-2xl print:shadow-none print:w-full max-w-[800px]">

                    {/* PAGE 1: PREPARATION */}
                    <div className="relative p-12 min-h-[1123px] flex flex-col bg-white print:break-after-page">
                        {/* Header */}
                        <header className="flex justify-between items-start border-b-8 border-navy pb-8 mb-10">
                            <div>
                                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-2 block">Interactive Guide</span>
                                <h1 className="text-5xl font-black tracking-tighter text-navy uppercase leading-none mb-2">
                                    Move Out<br /><span className="text-teal">Checklist</span>
                                </h1>
                            </div>
                            <div className="text-right">
                                <h2 className="text-xl font-bold uppercase tracking-widest text-navy">Property Partner</h2>
                                <p className="text-xs font-mono text-ink-light mt-1">03 385 4888</p>
                            </div>
                        </header>

                        {/* Progress Hero */}
                        <div className="bg-navy text-white p-6 mb-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-32 bg-teal rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
                            <div className="relative z-10 flex justify-between items-end">
                                <div>
                                    <p className="text-teal font-mono text-xs mb-2 uppercase tracking-widest">Overall Progress</p>
                                    <div className="flex items-baseline gap-3">
                                        <p className="text-6xl font-black tracking-tighter leading-none">{progressPercent}%</p>
                                        <p className="text-white/60 text-sm font-mono">{completedTasks}/{totalTasks} tasks</p>
                                    </div>
                                </div>
                                {progressPercent === 100 && (
                                    <div className="flex items-center gap-2 text-teal animate-pulse">
                                        <Award className="w-6 h-6" />
                                        <span className="font-bold uppercase tracking-widest text-sm">Complete!</span>
                                    </div>
                                )}
                            </div>
                            <div className="h-2 bg-white/10 mt-6 w-full">
                                <div className="h-full bg-teal transition-all duration-500" style={{ width: `${progressPercent}%` }} />
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="bg-wash p-4 border border-navy/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="text-navy w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-ink-light">Critical Tasks</span>
                                </div>
                                <p className="text-2xl font-black text-navy">
                                    {items.filter(i => i.priority === 'Critical' && i.completed).length} / {items.filter(i => i.priority === 'Critical').length}
                                </p>
                            </div>
                            <div className="bg-wash p-4 border border-navy/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="text-navy w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-ink-light">Remaining</span>
                                </div>
                                <p className="text-2xl font-black text-navy">
                                    {totalTasks - completedTasks}
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow space-y-2">
                            {renderChecklistSection('Preparation', <Calendar className="w-5 h-5" />, ['preparation'])}
                            {renderChecklistSection('Damage & Repairs', <Wrench className="w-5 h-5" />, ['damage'])}
                        </div>

                        {/* Footer */}
                        <div className="mt-auto pt-6 border-t border-navy/10 flex items-center justify-between">
                            <p className="text-[10px] text-ink-light uppercase tracking-widest">Page 1 of 4 — Preparation</p>
                            <button onClick={() => window.print()} className="print:hidden bg-navy text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-teal transition-colors flex items-center gap-2">
                                <Printer className="w-4 h-4" /> Print Checklist
                            </button>
                        </div>
                    </div>

                    {/* PAGE 2: CLEANING ESSENTIALS */}
                    <div className="relative p-12 min-h-[1123px] flex flex-col bg-wash/30 print:break-after-page print:bg-white">
                        <div className="mb-8 border-b-4 border-navy pb-4">
                            <h2 className="text-4xl font-black tracking-tighter text-navy uppercase">
                                Cleaning <span className="text-teal">Essentials</span>
                            </h2>
                            <p className="text-xs text-ink-light mt-2 uppercase tracking-widest">Kitchen, Bathrooms, Walls, Ceilings, Floors</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                            <div className="space-y-6">
                                {renderChecklistSection('Kitchen', <Sparkles className="w-5 h-5" />, ['kitchen'])}
                                {renderChecklistSection('Walls', <Package className="w-5 h-5" />, ['walls'])}
                                {renderChecklistSection('Ceilings', <Package className="w-5 h-5" />, ['ceilings'])}
                            </div>
                            <div className="space-y-6">
                                {renderChecklistSection('Bathrooms', <Droplets className="w-5 h-5" />, ['bathrooms'])}
                                {renderChecklistSection('Floors & Carpets', <Package className="w-5 h-5" />, ['floors', 'carpets'])}
                                {renderChecklistSection('Odour Control', <Wind className="w-5 h-5" />, ['odours'])}
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-navy/10">
                            <p className="text-[10px] text-ink-light uppercase tracking-widest">Page 2 of 4 — Cleaning Essentials</p>
                        </div>
                    </div>

                    {/* PAGE 3: OUTDOOR & DETAILS */}
                    <div className="relative p-12 min-h-[1123px] flex flex-col bg-white print:break-after-page">
                        <div className="mb-8 border-b-4 border-navy pb-4">
                            <h2 className="text-4xl font-black tracking-tighter text-navy uppercase">
                                Outdoor & <span className="text-teal">Details</span>
                            </h2>
                            <p className="text-xs text-ink-light mt-2 uppercase tracking-widest">Gardens, Finishing Touches, Textiles</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                            <div className="space-y-6">
                                {renderChecklistSection('Outdoor Spaces', <Leaf className="w-5 h-5" />, ['outdoor'])}
                                {renderChecklistSection('Detail Cleaning', <Sparkles className="w-5 h-5" />, ['details'])}
                            </div>
                            <div className="space-y-6">
                                {renderChecklistSection('Curtains & Blinds', <Package className="w-5 h-5" />, ['textiles'])}

                                {/* Pro Tips */}
                                <div className="bg-navy text-white p-8 relative overflow-hidden mt-8">
                                    <div className="absolute bottom-0 right-0 p-32 bg-teal rounded-full blur-[80px] opacity-20 -mr-16 -mb-16"></div>
                                    <h3 className="text-teal font-mono text-xs uppercase tracking-widest mb-4">Pro Tips</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 shrink-0"></div>
                                            <span>Work top to bottom, room by room for efficiency</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 shrink-0"></div>
                                            <span>Allow 1-2 full days for thorough cleaning</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 shrink-0"></div>
                                            <span>Take photos of your clean work for records</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-navy/10">
                            <p className="text-[10px] text-ink-light uppercase tracking-widest">Page 3 of 4 — Outdoor & Details</p>
                        </div>
                    </div>

                    {/* PAGE 4: FINAL CHECKS */}
                    <div className="relative p-12 min-h-[1123px] flex flex-col bg-wash/30 print:break-after-page print:bg-white">
                        <div className="mb-8 border-b-4 border-navy pb-4">
                            <h2 className="text-4xl font-black tracking-tighter text-navy uppercase">
                                Final <span className="text-teal">Checks</span>
                            </h2>
                            <p className="text-xs text-ink-light mt-2 uppercase tracking-widest">Fixtures, Furnishings, Keys & Handover</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                            <div className="space-y-6">
                                {renderChecklistSection('Fixtures & Fittings', <Wrench className="w-5 h-5" />, ['fixtures'])}
                                {renderChecklistSection('Furnishings & Chattels', <Home className="w-5 h-5" />, ['furnishings'])}
                                {renderChecklistSection('Appliances', <Package className="w-5 h-5" />, ['appliances'])}
                            </div>
                            <div className="space-y-6">
                                {renderChecklistSection('Rubbish Removal', <Package className="w-5 h-5" />, ['rubbish'])}
                                {renderChecklistSection('Keys & Remotes', <Key className="w-5 h-5" />, ['keys'])}
                                {renderChecklistSection('Final Checks', <CheckCircle className="w-5 h-5" />, ['final'])}
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-navy/10">
                            <p className="text-[10px] text-ink-light uppercase tracking-widest">Page 4 of 4 — Final Checks</p>
                        </div>
                    </div>

                </div>
            </main>

            <div className="print:hidden">
                <Footer />
            </div>
        </div>
    );
};

export default MoveOutChecklist;
