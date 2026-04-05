# CyberSuraksha Project Setup Guide

## Project Overview
CyberSuraksha is a cybersecurity project that aims to provide comprehensive security solutions through a user-friendly interface.

## Prerequisites
Before setting up the project, ensure you have the following installed:
- Node.js (version 14 or later)
- npm (Node Package Manager)
- Git
- MongoDB (for backend)

## Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<owner>/CyberSuraksha.git
   cd CyberSuraksha/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend server:**
   ```bash
   npm start
   ```

4. **Access the frontend:**
   Open your browser and navigate to `http://localhost:3000`.

## Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd ../backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file and configure your MongoDB URI and any other necessary configurations.

4. **Start the backend server:**
   ```bash
   npm start
   ```

5. **Access the backend API:**
   The backend usually runs on `http://localhost:5000`.

## Running the Project

After starting both frontend and backend, ensure that they are correctly running and communicate via the specified API endpoints.