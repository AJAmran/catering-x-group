"use client";

import React, { useId } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// 1. Layout Primitives
export const Container = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
    <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
    </div>
);

export const Section = ({
    children,
    className = "",
    id = ""
}: {
    children?: React.ReactNode;
    className?: string;
    id?: string;
}) => (
    <section id={id} className={`py-16 md:py-24 lg:py-32 relative overflow-hidden ${className}`}>
        {children}
    </section>
);

// 2. Bento Grid Components
export const BentoGrid = ({ children, className = "", "aria-label": ariaLabel }: { children?: React.ReactNode; className?: string; "aria-label"?: string }) => (
    <ul className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${className}`} aria-label={ariaLabel}>
        {children}
    </ul>
);

export const BentoCard = ({
    children,
    className = "",
    span = 1,
    onClick,
    href,
    "aria-label": ariaLabel
}: {
    children?: React.ReactNode;
    className?: string;
    span?: 1 | 2 | 3 | 4;
    onClick?: () => void;
    href?: string;
    "aria-label"?: string;
}) => {
    const colSpans = {
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
        4: 'md:col-span-4 lg:col-span-4'
    };

    const cardStyles = `
        rounded-[2rem] p-6 md:p-8 
        border border-neutral-200/60 
        shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] 
        hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] 
        transition-all duration-500 ease-out 
        hover:-translate-y-1 cursor-pointer 
        relative overflow-hidden group list-none
        ${colSpans[span]} 
        ${className || 'bg-white'}
    `;

    if (href) {
        return (
            <li className={`list-none ${colSpans[span]}`}>
                <Link
                    href={href}
                    className={`${cardStyles} block h-full`}
                    aria-label={ariaLabel}
                >
                    {children}
                </Link>
            </li>
        );
    }

    return (
        <li
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={(e) => {
                if (onClick && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    onClick();
                }
            }}
            className={cardStyles}
            aria-label={ariaLabel}
        >
            {children}
        </li>
    );
};

// 3. Typography & UI Elements
export const SectionHeading = ({
    title,
    subtitle,
    center = false,
    light = false,
    isH1 = false,
    className = ""
}: {
    title: string;
    subtitle?: string;
    center?: boolean;
    light?: boolean;
    isH1?: boolean;
    className?: string;
}) => (
    <div className={`mb-16 md:mb-24 ${center ? 'text-center' : ''} ${className}`}>
        {subtitle && (
            <span className={`
                inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4
                ${light ? 'text-white/80' : 'text-neutral-600'}
            `}>
                <span className={`w-2 h-2 rounded-full ${light ? 'bg-catering-light' : 'bg-catering'}`} aria-hidden="true"></span>
                {subtitle}
            </span>
        )}
        {isH1 ? (
            <h1 className={`
                text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] tracking-tight
                ${light ? 'text-white' : 'text-neutral-900'}
            `}>
                {title}
            </h1>
        ) : (
            <h2 className={`
                text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] tracking-tight
                ${light ? 'text-white' : 'text-neutral-900'}
            `}>
                {title}
            </h2>
        )}
    </div>
);

export const Button = ({
    children,
    variant = 'primary',
    onClick,
    className = '',
    type = 'button',
    disabled = false,
    fullWidth = false,
    icon: Icon,
    href,
    label
}: {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    href?: string;
    label?: string; // Accessible name
}) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden";

    const variants = {
        primary: "font-sans bg-convention text-white shadow-lg shadow-convention/20 hover:shadow-convention/30 hover:bg-convention-light",
        secondary: "font-sans bg-catering text-white shadow-lg shadow-catering/20 hover:shadow-catering/30 hover:bg-catering-light",
        outline: "font-sans border border-neutral-300 bg-transparent text-neutral-900 hover:bg-neutral-100",
        white: "font-sans bg-white text-neutral-900 shadow-xl shadow-black/5 hover:shadow-black/10",
        ghost: "font-sans text-neutral-700 hover:text-convention hover:bg-neutral-100/50"
    };

    const innerContent = (
        <span className="relative z-10 flex items-center gap-2">
            {children}
            {Icon ? Icon : <ArrowUpRight size={18} aria-hidden="true" className="opacity-70 group-hover:opacity-100 transition-opacity" />}
        </span>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
                aria-label={label}
            >
                {innerContent}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
        >
            {innerContent}
        </button>
    );
};

// 4. Form Components
export const InputWrapper = ({ label, id, children }: { label: string, id: string, children?: React.ReactNode }) => (
    <div className="space-y-3 group">
        <label
            htmlFor={id}
            className="text-xs font-bold text-neutral-600 uppercase tracking-widest ml-1 group-focus-within:text-convention transition-colors"
        >
            {label}
        </label>
        {children}
    </div>
);

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement> & { label?: string }) => {
    const { label, className = "", id: providedId, ...rest } = props;
    const autoId = useId();
    const id = providedId || autoId;

    const inputEl = (
        <input
            id={id}
            className={`
                w-full px-6 py-4 rounded-2xl bg-neutral-100 
                border border-neutral-200 focus:bg-white focus:border-convention/30 
                focus:ring-4 focus:ring-convention/10 outline-none 
                transition-all duration-300 placeholder:text-neutral-500 
                text-neutral-900 font-medium ${className}
            `}
            {...rest}
        />
    );
    return label ? <InputWrapper label={label} id={id}>{inputEl}</InputWrapper> : inputEl;
};

export const Select = (props: React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string }) => {
    const { label, className = "", children, id: providedId, ...rest } = props;
    const autoId = useId();
    const id = providedId || autoId;

    const selectEl = (
        <div className="relative">
            <select
                id={id}
                className={`
                    w-full px-6 py-4 rounded-2xl bg-neutral-100 
                    border border-neutral-200 focus:bg-white focus:border-convention/30 
                    focus:ring-4 focus:ring-convention/10 outline-none 
                    transition-all duration-300 appearance-none 
                    text-neutral-900 font-medium cursor-pointer ${className}
                `}
                {...rest}
            >
                {children}
            </select>
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-neutral-500">
                <ArrowUpRight className="rotate-90" size={18} aria-hidden="true" />
            </div>
        </div>
    );
    return label ? <InputWrapper label={label} id={id}>{selectEl}</InputWrapper> : selectEl;
};

export const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string }) => {
    const { label, className = "", id: providedId, ...rest } = props;
    const autoId = useId();
    const id = providedId || autoId;

    const textEl = (
        <textarea
            id={id}
            className={`
                w-full px-6 py-4 rounded-2xl bg-neutral-100 
                border border-neutral-200 focus:bg-white focus:border-convention/30 
                focus:ring-4 focus:ring-convention/10 outline-none 
                transition-all duration-300 placeholder:text-neutral-500 
                text-neutral-900 font-medium resize-none ${className}
            `}
            {...rest}
        />
    );
    return label ? <InputWrapper label={label} id={id}>{textEl}</InputWrapper> : textEl;
};

// 5. Utility Components
export const FadeIn = ({ children, delay = 0, className = "" }: { children?: React.ReactNode, delay?: number, className?: string }) => (
    <div className={`animate-fade-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
        {children}
    </div>
);

export const Badge = ({ children, color = 'blue', className = "" }: { children?: React.ReactNode, color?: 'blue' | 'green' | 'teal' | 'red', className?: string }) => {
    const colorClasses = {
        blue: 'bg-convention/10 text-convention-dark',
        green: 'bg-emerald-500/10 text-emerald-700',
        teal: 'bg-teal-500/10 text-teal-700',
        red: 'bg-catering/10 text-catering-dark'
    };

    return (
        <span className={`
            inline-flex items-center px-3 py-1 rounded-full text-[11px] font-sans font-bold uppercase tracking-widest
            ${colorClasses[color]}
            ${className}
        `}>
            {children}
        </span>
    );
};
