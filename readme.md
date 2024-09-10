# Nodets Prisma Background Jobs Boilerplate

A Node.js project using TypeScript, Express, Prisma, and various other libraries to build a scalable server-side application.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Database Setup with Prisma](#database-setup-with-prisma)
- [Scripts](#scripts)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Prisma CLI](https://www.prisma.io/docs/getting-started)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <project-directory>

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Install Prisma CLI globally (if not already installed):**

   ```bash
   npm install -g prisma

   ```

4. **Add required env variables**

   ```bash
   DATABASE_URL=`your-database-connection-url`
   PORT=3000

   ```

5. **Database Setup with Prisma**

   ```bash
   1. crate migrations
   npx prisma migrate dev --name <migration-name>

   2. deploy migrations
   npx prisma migrate deploy

   3. genaret prisma clients/types
   npx prisma generate

   ```

6. **Scripts**

   ```bash
   1. build: Compiles TypeScript files to JavaScript in the dist directory.
   npm run build

   2. start: Runs the application after compiling TypeScript files
   npm start

   3. local: Runs the development server with hot reloading using ts-node-dev
   npm run local

   4. dev: Sets up the development environment by copying .env.development to .env and starts the development server.
   npm run dev

   5. qa: Sets up the QA environment by copying .env.qa to .env and starts the development server.
   npm run qa

   6. uat: Sets up the UAT environment by copying .env.uat to .env and starts the development server.
   npm run uat
   ```
