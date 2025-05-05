'use client';

import React, { useState } from "react";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { cn } from "@/app/lib/utils";
import toast, { Toaster } from 'react-hot-toast';

export default function FormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      brandName: e.target.Name.value,
      phone: e.target.PhoneNumber.value,
      email: e.target.email.value,
      location: e.target.Location.value,
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      toast.success('Thank you for connecting with us! We will get back to you soon.');
      e.target.reset();
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster 
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          style: {
            background: 'var(--background)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
            padding: '2px',
            borderRadius: '8px',
            maxWidth: '400px',
            width: '80%',
            marginTop: '2vh',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: 'var(--background)',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: 'var(--background)',
            },
          },
        }}
      />
      
      <div className="flex flex-col md:flex-row w-full min-h-[600px]">
        <div className="w-full md:w-[45%] p-8 flex items-center justify-center bg-background dark:bg-background-dark font-sans text-black dark:text-white min-h-full">
          <div className="max-w-md text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Vision Into Reality
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-400">
              Partner with NextGen Scale to elevate your brand and unlock unprecedented growth opportunities.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[55%] flex items-center justify-center">
          <div className="shadow-input mx-auto w-full max-w-lg md:max-w-xl rounded-none p-6 md:rounded-2xl md:p-8 bg-background dark:bg-background-dark font-sans">
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="Name">Name of the brand:</Label>
                  <Input
                    id="Name"
                    name="Name"
                    placeholder="NextGen Scale"
                    type="text"
                    required
                    disabled={isSubmitting}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="PhoneNumber">Phone</Label>
                  <Input
                    id="PhoneNumber"
                    name="PhoneNumber"
                    placeholder="Number"
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    title="Phone number must be exactly 10 digits"
                    disabled={isSubmitting}
                  />
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email address"
                  type="email"
                  required
                  disabled={isSubmitting}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="Location">Location</Label>
                <Input
                  id="Location"
                  name="Location"
                  placeholder="Location"
                  type="text"
                  required
                  disabled={isSubmitting}
                />
              </LabelInputContainer>

              <button
                className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Let\'s Connect →'}
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full accent-gradient opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 accent-blur opacity-0 transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);