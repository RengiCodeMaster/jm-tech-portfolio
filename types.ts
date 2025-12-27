import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  main?: boolean;
}

export interface TimelineStep {
  title: string;
  description: string;
  step: string;
}

export interface PlanItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}