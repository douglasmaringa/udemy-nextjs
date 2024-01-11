'use client'
import React, { useState } from 'react';
import { createContact } from '@/sanity/contact-utils';
import { toast } from 'react-hot-toast';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state to true
    setIsLoading(true);

    try {
      // Call the createContact function to add contact information to Sanity
      await createContact(name, email, issue);

      // Reset the form inputs
      setName('');
      setEmail('');
      setIssue('');
      toast.success('Issue sent');
    } catch (error) {
      console.error('Error submitting form:', error.message);
        toast.error('Error submitting form');
    } finally {
      // Set loading state back to false after submission
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6 text-[#5B20B6]">Contact Us</h2>
      <form onSubmit={handleSubmit}>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#5B20B6]"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#5B20B6]"
            required
          />
        </div>

        {/* Issue Input */}
        <div className="mb-6">
          <label htmlFor="issue" className="block text-gray-700 font-bold mb-2">Describe Your Issue:</label>
          <textarea
            id="issue"
            name="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="Enter your issue"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#5B20B6] resize-none"
            rows="4"
            required
          />
        </div>

        {/* Submit Button with Loading State */}
        <button
          type="submit"
          className="bg-[#5B20B6] text-white px-6 py-2 rounded-md hover:bg-[#4C1D95] focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Contact;
