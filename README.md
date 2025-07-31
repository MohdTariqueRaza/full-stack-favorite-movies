
# Movie & TV Show Manager - Full Stack Application

## Overview

This application is a full-stack web platform that allows users to manage their favorite movies and TV shows. Users can add new entries, view all entries in an infinitely scrolling table, edit existing entries, and delete entries. Each entry captures detailed information including title, director, budget, location, duration, and year.

[https://full-stack-favorite-movies.netlify.app/](https://full-stack-favorite-movies.netlify.app/)


## Features

- CRUD Operations: Create, Read, Update, Delete media entries
- Infinite Scrolling: Dynamic loading of content as user scrolls
- Detailed Media Information: Track title, director, budget, location, duration, year
- Responsive Design: Works on all device sizes


## Tech Stack

**Client:** React with Vite, TypeScript, TailwindCSS , Shadcn UI

**Server:** Node.js with Express , MySQL , Prisma , Zod


## Installation

Install Full Stack Application with npm

### 🖥️ Frontend Setup

```bash
  cd client
  npm install
  npm run dev
```

### 🔧 Backend Setup

```bash
  cd server
  npm install
  Create .env file with your credentials like DATABASE_URL="mysql://root:@localhost:3306/movies_db"
  npx prisma generate --schema=src/prisma/schema.prisma
  npm run dev
```

### Seed sample data (optional)

```bash
  npm run seed
```
## Demo

The application is deployed and accessible at:

- Full Stack : [https://full-stack-favorite-movies.netlify.app/](https://full-stack-favorite-movies.netlify.app/)

