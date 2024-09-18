# News-App
A responsive and modern news aggregator application built using React.js and Bootstrap. The app fetches the latest news from various categories and displays them in an easy-to-navigate layout. The app is optimized for both desktop and mobile use.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features
- Fetch and display news articles from an external API.
- Categorized news sections (e.g., sports, technology, health, etc.).
- Search functionality to find articles by keywords.
- Responsive design using Bootstrap.
- Dark and light theme toggle option.
- Infinite scrolling to load more articles.

## Getting Started
These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites
Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version >= 14)
- [npm](https://www.npmjs.com/get-npm) (version >= 6)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/newsapp.git 
```

2. Navigate to the project directory:
```bash
cd newsapp
```
3. Install the necessary dependencies:
```bash
npm install
```
## Running the App
To run the app locally:
```bash
npm start
```
This will start a local development server and open the app in your default browser. The app should be running at `[http://localhost:3000]`


## Technologies Used
- **React.js** - Frontend framework for building UI components.
- **Bootstrap** - CSS framework for responsive design.
- **Axios** - For making HTTP requests to fetch news data.

## Project Structure
```bash
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── Navbar.js          
│   │   ├── NewsBoard.js        
│   │   ├── NewsItem.js        
│   │   ├── NavBar.css
│   │   └── NewsBoard.css        
│   ├── App.js                 
│   ├── index.js              
│   └── App.css                
└── package.json
```
## API Integration
The app uses a third-party news API to fetch the latest articles. To set up the API:

1. Sign up for an API key from [News API](https://newsapi.org/).

```bash
REACT_APP_API_KEY=your_api_key_here
```
