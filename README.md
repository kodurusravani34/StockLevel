# StockLevel 🚀
<p align="center">
  <img src="https://ik.imagekit.io/vfs2lsbno/logo.png" alt="StockLevel Logo" width="200" />
</p>

🔗 Live Demo: [stocklevel.vercel.app](https://stocklevel.vercel.app/)

<p align="center">
  <img src="https://ik.imagekit.io/vfs2lsbno/dashboard-preview.png" alt="StockLevel Dashboard Preview" width="100%" style="border-radius: 10px; border: 1px solid #30333A;" />
</p>

A powerful full-stack stock market intelligence platform that helps users track, analyze, and stay ahead of market moves with precision. 
Built using **Next.js**, **Inngest**, and **MongoDB**, and enhanced with **AI-powered financial insights**.

## ✨ Features

### 📊 AI-Powered Market Insights
Get personalized investment summaries and "Bottom Line" market analysis. Our AI distills complex news into actionable insights tailored to your specific goals.

### 🔔 Real-Time Price & Volume Alerts
Never miss a move. Set custom upper/lower price thresholds and volume spikes to receive instant, beautifully designed email notifications.

### 📰 Smart News Summaries
Daily market digests that summarize the most important news from across the globe, focusing on what actually matters for your portfolio.

### 📈 Professional Charting
Integrated **TradingView** techncial analysis tools and real-time data visualization for every stock in your watchlist.

### 🎯 Personalized Onboarding
A tailored experience from day one. StockLevel understands your risk tolerance, preferred sectors, and investment timeline to provide relevant alerts.

### 🔒 Secure Authentication & Management
Robust user account protection powered by **better-auth**, ensuring your watchlist and preferences stay private.

---

## 🛠️ Tech Stack

### Frontend & Core
| Technology | Purpose |
| :--- | :--- |
| **Next.js 15+** | React Framework with App Router |
| **Tailwind CSS 4** | Ultra-fast, modern styling |
| **Lucide React** | Premium icon suite |
| **Sonner** | Sleek toast notifications |
| **Better-Auth** | Secure authentication handling |

### Backend & Infrastructure
| Technology | Purpose |
| :--- | :--- |
| **Inngest** | Background workflows & cron jobs |
| **Nodemailer** | Transactional email delivery |
| **MongoDB + Mongoose** | Database & Schema management |
| **OpenAI API** | AI-driven news analysis & personalization |
| **ImageKit** | Optimized image & asset storage |

---

## 🚀 Getting Started

### 🔹 Prerequisites
- Node.js (v20+)
- MongoDB Atlas account
- OpenAI API Key
- ImageKit Account

### 🔹 1. Clone the Repository
```bash
git clone https://github.com/kodurusravani34/StockLevel.git
cd StockLevel/client
```

### 🔹 2. Setup Environment Variables
Create a `.env` file in the `client/` directory:
```env
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_key
INNGEST_EVENT_KEY=your_inngest_key
INNGEST_SIGNING_KEY=your_signing_key
RESEND_API_KEY=your_resend_or_smtp_details
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```

### 🔹 3. Install & Run
```bash
npm install
npm run dev
```

---

## 📂 Project Structure
```text
StockLevel/
├── app/                # Next.js App Router (Auth, API, Root)
├── components/         # Reusable UI components
├── database/           # MongoDB schemas & connections
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
│   ├── inngest/        # Workflows, prompts & functions
│   └── nodemailer/     # Email templates & sender logic
├── middleware/         # Auth & route protection
├── public/             # Static assets
└── types/              # TypeScript definitions
```

---

## 🤖 AI Capabilities
- **Personalized Onboarding**: Generates custom welcome content based on user investment profiles.
- **News Deciphering**: Translates complex financial jargon into simple "Bottom Line" summaries.
- **Symbol Mapping**: Intelligently maps news symbols to TradingView technical symbols.

---

## ⚖️ Legal Disclaimer

**IMPORTANT: FOR INFORMATIONAL PURPOSES ONLY.**

StockLevel is a tool for tracking market data and receiving AI-generated summaries. **We are not financial advisors.** 
- All predictions, insights, or summaries provided by the AI are for educational and informational purposes only and should **not** be construed as financial advice.
- We have **nothing to do with your money**, trades, or investment outcomes. 
- Investing in stocks involves significant risk. **Do not make financial decisions based solely on the information provided by this application.**
- StockLevel and its developers are not liable for any financial losses incurred from using this tool or following any insights generated herein. Always consult with a certified financial professional before making investment decisions.

---

## 🤝 Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
This project is licensed under the **ISC License**.
