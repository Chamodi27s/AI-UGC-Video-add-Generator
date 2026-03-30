# 🚀 AI-Powered UGC Video Ads Generator (SaaS)

A production-ready Full-Stack AI SaaS application that automatically generates high-converting User-Generated Content (UGC) video ads and images. Built with the PERN stack and powered by the Google Gemini API, this platform helps creators and marketers generate professional ad scripts, visual assets, and video concepts in seconds.

## 🌟 Key Features

* **🤖 AI Content Generation:** Utilizes Google Gemini API to craft highly engaging, natural-sounding UGC ad scripts and media prompts.
* **🔐 Secure Authentication:** Seamless user login, registration, and session management handled by Clerk.
* **💳 Subscription & Billing:** Integrated monetization features to manage user credits and SaaS tiers.
* **⚡ Blazing Fast Database:** Serverless PostgreSQL database powered by Neon for scalable data storage.
* **🐛 Real-time Error Tracking:** Integrated with Sentry to monitor application health and track bugs in production.
* **📱 Responsive UI/UX:** Built with React and PrebuiltUI for a modern, mobile-friendly experience.
* **🌐 Community Feed:** A dedicated space for users to view, share, and discover generated UGC ads.

## 🛠️ Tech Stack

**Frontend:**
* React.js
* PrebuiltUI
* Clerk (Authentication)

**Backend:**
* Node.js
* Express.js
* PostgreSQL (Neon)

**AI & DevOps:**
* Google Gemini API (AI Engine)
* Sentry (Error Monitoring)
* Hostinger VPS (Deployment)

## 🏗️ System Architecture

1. **User Input:** User submits product details and ad requirements via the React frontend.
2. **Processing:** The Node/Express backend securely receives the prompt and communicates with the Gemini API.
3. **AI Generation:** Gemini processes the context and returns a structured UGC script and visual directives.
4. **Storage:** Results and user activity are securely saved in the Neon PostgreSQL database.
5. **Delivery:** The generated ad is displayed to the user and can be published to the Community Page.

## 🚀 Getting Started (Local Development)

Follow these steps to set up the project locally on your machine.

### Prerequisites
* Node.js installed
* Git installed
* PostgreSQL database (or a Neon account)
* API Keys for Gemini, Clerk, and Sentry

