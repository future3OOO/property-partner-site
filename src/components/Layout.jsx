import React from 'react';
import { cn } from "@/lib/utils";

export const Section = ({ className, children, ...props }) => (
    <section className={cn("py-16 md:py-24", className)} {...props}>
        {children}
    </section>
);

export const Container = ({ className, children, ...props }) => (
    <div className={cn("container mx-auto px-4 md:px-6", className)} {...props}>
        {children}
    </div>
);
