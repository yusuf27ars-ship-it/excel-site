import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  AI_AUTOMATION = 'ai_automation',
  PROJECTS = 'projects',
  TRAINING = 'training',
  CONTACT = 'contact'
}