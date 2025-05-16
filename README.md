# 🪙 Crypto Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-2.0+-38b2ac?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![React Query](https://img.shields.io/badge/React%20Query-TanStack-red?logo=react)](https://tanstack.com/query/latest)
[![CoinGecko API](https://img.shields.io/badge/API-CoinGecko-yellow)](https://www.coingecko.com/en/api)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

A real-time cryptocurrency dashboard built with **Next.js**, **TypeScript**, **TailwindCSS**, **React Query**, and the [CoinGecko API](https://www.coingecko.com/en/api). It features client-side interactivity, SSR/SSG, API caching, global state management, and a clean responsive UI.

---

## 🚀 Live Demo

👉 [crypto-dashboard.vercel.app](https://crypto-dashboard.vercel.app) ← *(replace with your actual deployment link)*

---

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Data Fetching**: React Query / SWR
- **Styling**: TailwindCSS, shadcn/ui 
- **Charts**: Recharts 
- **API**: CoinGecko 

---

## 📦 Features

### 📊 Dashboard Page (`/dashboard`)
- Lists **Top 20** cryptocurrencies
- Displays:
  - Name, symbol, image
  - Current price (USD)
  - 24h % change (with ↑ / ↓ arrows)
- Data auto-refreshes every 60 seconds
- Client-side **search & filter** by name or symbol
- Each coin links to a detail page

### 📈 Coin Details Page (`dashboard/coin/[id]`)
- Displays:
  - Name, logo, market cap, volume, supply
  - 7-day price trend (line chart via Chart.js or Recharts)
- "Back to Dashboard" navigation


### 📦 Caching Strategy
- Coin list cached for 1 minute
- Refetches on tab focus
- Uses React Query/SWR background polling

### 💅 UI/UX
- Responsive design (mobile/tablet/desktop)
- Skeleton loaders
- Dark mode support (with toggle )

---

## 🧪 Bonus Features

- [x] 🌗 **Dark Mode** toggle 
- [x] 🚀 Deployed on [Vercel](https://vercel.com)

---

## 📁 Folder Structure

