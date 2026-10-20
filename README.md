# Academic Project

# Waga SkillStack Hub

A high performance, cross-platform e-commerce app built with Ionic, React, TypeScript and Vite. Optimized for native mobile deployment via Capacitor.

### Project Overview

Waga skillstack hub is a mobile-first e-commerce application demonstrating modern React development for native mobile.

Unlike typical academic Ionic Angular projects, this build uses the latest Ionic React stack with Vite for lightning-fast HMR (Hot Module Replacement) and production builds.

It simulates a real-world retail app with native capabilities, ready for Play Store deployment.

Built to demonstrate the exact stack used for client mobile apps in Malta.

### Tech Stack 

React 

Ionic 

TypeScript

Capacitor 

Vite 5

Vitest

Testing Library

Cypress

ESLint

Browser localStorage


 
## Skills demonstrated

Developing a multi-page application with React and Ionic

Creating typed data models and reusable shared state with React Context

Building forms with controlled inputs and user-facing validation

Implementing cart operations, price calculations, and a demo checkout flow

Persisting client-side state between visits

Integrating third-party UI functionality with Swiper

Using TypeScript, Vite, ESLint, Vitest, Testing Library, and Cypress tooling

Cypress is configured, but the repository does not currently include end-to-end spec files.

## Getting started

### Prerequisites

Node.js and npm

Git, if you are cloning the repository


### Install and run

```bash
git clone <repository-url>
cd commercePractice
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run the TypeScript check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run test.unit -- --run` | Run unit tests once |
| `npm run test.e2e` | Run Cypress (end-to-end specs can be added under `cypress/e2e`) |
| `npm run lint` | Run ESLint |	


## Project structure

```text
src/
  components/       Shared UI components
  pages/
    Home.tsx        Package selection and add-to-cart flow
    Cart.tsx        Cart editing, removal, and demo checkout
    Dashboard.tsx   Purchased-order history
    Gallery.tsx     Learning-resource carousel
    CartContext.tsx Shared cart and order-history state
  App.tsx           Ionic shell, navigation, and routes
  main.tsx          Application entry point
public/
  assets/           Static gallery assets
```  
## Key Features Implemented

Modern React 19 Architecture: Functional components with Hooks, React Router

Ionic Native Experience: Haptics feedback on Add to Cart, native keyboard handling for checkout forms

Performance: Vite build with `tsc && vite build` - optimized bundle splitting and legacy support

Responsive Product Catalog: Swiper.js for touch-first image galleries

Test-Ready: Scripts for `test.unit` (Vitest) and `test.e2e` (Cypress) already configured - shows you write testable code

PWA Ready: Can run as web + native Android from single codebase





