import { TocItem } from './types';
import { Testimonial } from './types';
import React from 'react';

export const EBOOK_COVER_URL = "https://ai-builder-content-prod.google.com/user-assets/assets/843795b5-7c70-49f3-933e-52317f26723a";
export const EBOOK_PRICE = 15;

export const FEATURES = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    title: "Visual Learning",
    description: "Master space planning with hundreds of clear diagrams and illustrations that make complex concepts easy to grasp.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    title: "Practical Layouts",
    description: "Discover dozens of proven, professional layouts for living rooms, kitchens, bedrooms, and entire floor plans.",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    title: "For All Skill Levels",
    description: "An essential tool for interior designers and architects, yet simple enough for anyone passionate about home design.",
  },
];

export const TABLE_OF_CONTENTS: TocItem[] = [
  { chapter: 'Chapter 1', title: 'Principles of Space Planning' },
  { chapter: 'Chapter 2', title: 'Analyzing Residential Spaces' },
  { chapter: 'Chapter 3', title: 'Living & Family Rooms' },
  { chapter: 'Chapter 4', title: 'Kitchens & Dining Areas' },
  { chapter: 'Chapter 5', title: 'Bedrooms & Bathrooms' },
  { chapter: 'Chapter 6', title: 'Circulation, Flow & Ergonomics' },
  { chapter: 'Chapter 7', title: 'Furniture Arrangement' },
  { chapter: 'Chapter 8', title: 'Lighting & Ambiance' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "A visual masterpiece! This guide has completely changed how I approach interior layouts. The diagrams make complex concepts so easy to understand.",
    author: "Alex Carter",
    title: "Interior Designer",
  },
  {
    quote: "Furusho's guide is the new bible for residential architects. It's packed with practical, brilliantly illustrated solutions for everyday design challenges.",
    author: "Samantha Lee",
    title: "Architect, Urban Form",
  },
  {
    quote: "I'm not a professional, just a homeowner looking to improve my space. This book was a game-changer. It gave me the confidence to redesign my entire home.",
    author: "Brian Shaw",
    title: "Homeowner & Design Enthusiast",
  },
];