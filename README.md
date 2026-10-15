# Waga SkillStack Hub

**A mobile-first learning-package storefront built with Ionic, React, and TypeScript.**

Waga SkillStack Hub is a hands-on commerce application for browsing technology-learning content and managing tutorial-package orders. It brings together a package-selection form, a persistent shopping cart, an order history, and a learning-resource gallery in a single Ionic interface.

This project demonstrates practical front-end development skills relevant to **Junior Software Developer** and **Graduate Associate** opportunities: building user-facing features, managing shared application state, validating forms, working with TypeScript, and delivering a multi-page experience with a modern web stack.

> **Project status:** This is a portfolio and learning project. Checkout is simulated; the application does not process real payments or send orders to a server.

## What the application does

- **Select learning packages:** Choose Beginner (€25) and/or Advanced (€50) packages, set a quantity, and provide order details.
- **Validate order forms:** Require a package, a positive quantity, an address, and a gender selection before adding an order.
- **Manage the cart:** Add orders, edit their details, remove individual items, and see the cart count reflected in the navigation.
- **Complete a demo checkout:** Move cart items into purchased-order history and show a confirmation with the total.
- **Review order history:** View saved orders and clear the history with a confirmation.
- **Explore learning resources:** Browse a carousel featuring topics such as Python, JavaScript, databases, networking, and web development.
- **Keep state between visits:** Persist the cart and order history in browser `localStorage`.

## Built with

| Technology | How it is used |
| --- | --- |
| React 19 | Component-based user interface |
| TypeScript 5 | Typed application code and order data |
| Ionic React 8 | Mobile-oriented UI components, navigation, and layout |
| React Router | Client-side page routing |
| Capacitor 8 | Native-platform integration scaffold |
| Swiper | Interactive learning-resource gallery |
| Vite | Local development server and production bundling |
| Vitest and Testing Library | Unit-test tooling and UI smoke test |
| Cypress | End-to-end test configuration |

## Getting started

### Prerequisites

- Node.js and npm
- Git, if you are cloning the repository

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

## Implementation notes

The cart and purchased-order history are shared through a React Context provider. `CartContext` defines the order shape and exposes the operations used by the pages; effects restore and persist state using browser `localStorage`. This keeps the prototype self-contained and makes the order flow easy to explore without a server.

The package catalogue and prices are currently defined in the client application. The “Pay Now” action is a demonstration of a checkout flow: it transfers items to local order history and displays a confirmation. There is no payment gateway, authentication, remote API, or server-side persistence.

Because order details are kept in browser storage, this prototype is **not intended for real customer data or production transactions**. A production version would need an API and database, secure payment integration, server-side validation, and an appropriate approach to personal-data handling.

## Skills demonstrated

- Developing a multi-page application with React and Ionic
- Creating typed data models and reusable shared state with React Context
- Building forms with controlled inputs and user-facing validation
- Implementing cart operations, price calculations, and a demo checkout flow
- Persisting client-side state between visits
- Integrating third-party UI functionality with Swiper
- Using TypeScript, Vite, ESLint, Vitest, Testing Library, and Cypress tooling

Cypress is configured, but the repository does not currently include end-to-end spec files.

## About me

I’m pursuing early-career opportunities as a **Junior Software Developer / Graduate Associate**, where I can contribute to real software projects, strengthen my engineering practice, and learn from experienced teams. This project reflects my interest in building practical, user-focused applications and developing a solid foundation across front-end development and the wider software delivery lifecycle.

I’m particularly interested in opportunities in Malta’s technology and professional-services sector, including **KPMG, Shireburn Software, Exigy, Crimsonwing, KeepIT**, and other teams building and supporting software products.

**Contact:** Add your professional email, LinkedIn profile, and GitHub profile here before publishing.
