// components/ui/Navigation.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navItems } from "@/constants/content";
import CloudImage from "./CloudImage";
import { siteConfig } from "@/constants/siteConfig";

export default function Navigation({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = key => {
    onNavigate?.(key);
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo / Brand */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center"
          >
            <CloudImage
              publicId={siteConfig.logoPublicId}
              alt="Pixel + Code Logo"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:space-x-8">
          {navItems.map(item => (
            <button
              key={item.key}
              onClick={() => handleNavigate(item.key)}
              className={`font-medium hover:text-gray-900 ${
                activeSection === item.key ? "text-primary" : "text-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-700 hover:text-gray-900 p-2 rounded-md"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center">
          <button
            onClick={() => handleNavigate("contact")}
            className="ml-4 rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Dialog */}
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => {
                  handleNavigate("home");
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-bold text-gray-900"
              >
                Pixel & Code
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900 p-2 rounded-md"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-4">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => {
                    handleNavigate(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left font-medium hover:text-gray-900 ${
                    activeSection === item.key
                      ? "text-indigo-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => {
                  handleNavigate("contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
