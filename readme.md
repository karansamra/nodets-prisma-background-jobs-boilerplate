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
   git clone https://github.com/karansamra/nodets-prisma-background-jobs-boilerplate.git
   cd nodets-prisma-background-jobs-boilerplate

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Install Prisma CLI globally (if not already installed):**

   ```bash
   npm install -g prisma

   ```

### Environment Setup

4. **Add required env variables**

   ```bash
   DATABASE_URL=`your-database-connection-url`
   PORT=3000
   ```

### Database Setup with Prisma

5. **Database Setup with Prisma**

   ```bash
   1. crate migrations
   npx prisma migrate dev --name <migration-name>

   2. deploy migrations
   npx prisma migrate deploy

   3. generate prisma clients/types
   npx prisma generate
   ```

### Scripts

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

### Built With

7. **Built With**

   This project uses the following technologies:

- **[Node.js](https://nodejs.org/)**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable server-side applications.
- **[Express](https://expressjs.com/)**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript, adding static types to the language.
- **[Prisma](https://www.prisma.io/)**: An open-source ORM (Object-Relational Mapping) tool that simplifies database access and management, providing a type-safe query builder for modern applications.
- **[BullMQ](https://docs.bullmq.io/)**: A powerful, modern queue library for Node.js, built on top of Redis, for handling background jobs, queues, and real-time data processing.
- **[Redis](https://redis.io/)**: An open-source, in-memory data structure store that is often used as a database, cache, and message broker.
- **Other packages**: Additional dependencies and development tools as specified in the `package.json` file, such as Prettier for code formatting, TSLint for code linting, and `ts-node-dev` for running TypeScript files with automatic restarts.

These technologies are chosen to create a scalable, efficient, and maintainable server-side application that can handle a variety of real-world use cases, from web services to job processing.

### License

8. **LICENSE**

This project is licensed under the MIT License - see the LICENSE file for details.

### Explanation of the Additions:

- **Database Setup with Prisma**: This section includes all necessary commands to set up Prisma, run migrations, and deploy them.
- **Environment Setup**: Describes how to manage different environment configurations using `.env` files.
- **Prerequisites** and **Installation**: Detail all necessary installations and steps to get the project running locally.

Feel free to customize this further based on your project needs!
