"use client";

import { useState } from "react";

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Handle form submission (API, webhook, etc.)
  };

  return (
    <form id="contact"
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl"></h2>
        <h2 className="text-4xl font-bold tracking-tight  sm:text-5xl text-primary">
          Let’s Talk!
        </h2>
        <p className="mt-2 text-gray-600">
          Hey, we’d love working with you. Give us a shout to see how we can
          help your business create, connect, and grow.
        </p>
        <p className="mt-1 font-medium text-primary">
          423.497.0881 <span className="mx-2">|</span> info@pixelncode.io
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-primary">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-primary">
          Business Name
        </label>
        <input
          type="text"
          name="business"
          value={formData.business}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2 text-white font-semibold hover:bg-[#6a3ec1] transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
