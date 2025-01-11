import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Components/Error.jsx';
import BrowserPage from './Components/BrowserPage.jsx';
import BookDetail from './Components/BookDetail.jsx';
import AddBook from './Components/AddBook.jsx';
import BooksByCategory from './Components/BooksByCategory.jsx'; 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/browserpage",
    element: <BrowserPage />,
    errorElement: <Error />,
  },
  {
    path: "/book/:id",
    element: <BookDetail />,
    errorElement: <Error />
  },
  {
    path: "/addbook",
    element: <AddBook />,
    errorElement: <Error />,
  },
  {
    path: "/books/:category", 
    element: <BooksByCategory />,
    errorElement: <Error />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
