# Waga SkillStack Hub

# A mobile-first learning-package storefront built with Ionic, React, and TypeScript.
A high performance, cross-platform e-commerce app built with Ionic React 8.5, React 19, TypeScript & Vite. Optimized for native mobile deployment via Capacitor.
### Overview

WAGA Commerce Practice is a mobile-first e-commerce application demonstrating modern React development for native mobile.
Unlike typical academic Ionic Angular projects, this build uses the latest Ionic React stack with Vite for lightning-fast HMR (Hot Module Replacement) and production builds. It simulates a real-world retail app with native capabilities, ready for Play Store deployment.
Built to demonstrate the exact stack used for client mobile apps in Malta.

### Tech Stack 

Core Framework (from package.json):
UI Framework: `@ionic/react` ^8.5.0 + `@ionic/react-router` ^8.5.0
Frontend Library: ‘react` 19.0.0 + `react-dom` 19.0.0 (Latest stable)
Language: TypeScript ~5.9.0 (Strict typing)
Build Tool: Vite ^8.0.9 + `@vitejs/plugin-react` ^6.0.1 (Not Angular CLI - Modern, 10x faster)
Routing: `react-router-dom` ^5.3.4

Native & Mobile (Capacitor 8.3.1):
`@capacitor/core` 8.3.1, `@capacitor/android` 8.3.1, `@capacitor/cli` 8.3.1
 `@capacitor/app` 8.1.0, `@capacitor/haptics` 8.0.2, `@capacitor/keyboard` 8.0.3, `@capacitor/status-bar` 8.0.2
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

bash
git clone <repository-url>
cd commercePractice
npm install
npm run dev

Open the local URL printed by Vite in browser.

### Available commands
 
Command	                                   Description
`npm run dev`                             	Start the Vite development server
`npm run build`                          	  Run the TypeScript check and create a production build
`npm run preview`               	          Preview the production build locally 

`npm run test.unit  run`          	        Run unit tests once
`npm run lint`  	Run ESLint
	


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
## Key Features Implemented

Modern React 19 Architecture: Functional components with Hooks, React Router
Ionic Native Experience: Haptics feedback on Add to Cart, native keyboard handling for checkout forms
Performance: Vite build with `tsc && vite build` - optimized bundle splitting and legacy support
Responsive Product Catalog: Swiper.js for touch-first image galleries
Test-Ready: Scripts for `test.unit` (Vitest) and `test.e2e` (Cypress) already configured - shows you write testable code
PWA Ready: Can run as web + native Android from single codebase





