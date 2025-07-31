
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
  # Clone the repository
  https://github.com/MohdTariqueRaza/full-stack-favorite-movies.git

  # Navigate to frontend directory
  cd client

  # Install dependencies
  npm install

  # Start development server
  npm run dev
```

### 🔧 Backend Setup

```bash
  # Navigate to backend directory
  cd server

  # Install dependencies
  npm install

  # Create .env file with your credentials
  DATABASE_URL="mysql://root:@localhost:3306/movies_db"

  npx prisma generate --schema=src/prisma/schema.prisma

  # Start the server
  npm run dev
```

### Database Schema

```bash
CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `type` varchar(100) NOT NULL,
  `director` varchar(255) NOT NULL,
  `actors` text NOT NULL,
  `genre` varchar(255) NOT NULL,
  `boxOffice` decimal(15,2) NOT NULL,
  `budget` decimal(15,2) NOT NULL,
  `location` varchar(255) NOT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
);

```


### Seed sample data (optional)

```bash
  npm run seed
```
## Demo

The application is deployed and accessible at:

- Full Stack : [https://full-stack-favorite-movies.netlify.app/](https://full-stack-favorite-movies.netlify.app/)

