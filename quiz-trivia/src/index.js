import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FirstPage from "./firstPage";
import QuizPage from './quizPage';

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <FirstPage />
  },
  {
    "path": "quiz",
    "element": <QuizPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
