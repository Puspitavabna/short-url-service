"use client"
import Image from "next/image";
import mobile from "./public/mobile.png"; // Ensure this path is correct
import Logo from "./public/Logo.png"
import '@fontsource/montserrat/700.css';
import React, { useState } from 'react';
export default function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/short-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ original_url: originalUrl }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || 'Something went wrong');
        return;
      }
      const data = await res.json();
      setShortUrl(data.shortUrl);
    } catch (error) {
      setError('Network error, please try again.');
    }
  };



  return (
    <>
      {/* Navbar */}
  

      {/* Hero Section */}
      <div className="bg-teal-500 flex flex-col lg:flex-row items-center justify-center p-8 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Section: URL Shortener Form */}
        <div className="bg-white text-gray-800 rounded-lg p-6 w-full max-w-md shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">T</span>
            </div>
            <h2 className="text-lg font-semibold">Shorten a long URL</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="url"
         className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            placeholder="Enter long URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:bg-green-400"
          >
            Generate Short URL
          </button>
        </form>
        
        </div>
      </div>
      {/* <div>
        <h2 className="text-2xl">All URLs:</h2>
        <ul className="list-disc pl-5">
          {urls.map((url) => (
            <li key={url.id} className="mb-2">
              <a
                href={url.short_code}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {url.short_code} → {url.original_url}
              </a>
            </li>
          ))}
        </ul>
      </div>
     */}
    </>
  );
}