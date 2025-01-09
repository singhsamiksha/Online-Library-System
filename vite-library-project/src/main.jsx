import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './Components/Error.jsx'
import BrowserPage from './Components/BrowserPage.jsx'; // Add the import for BrowserPage component
import BookDetail from './Components/BookDetail.jsx'; // Add the import for BookDetail component
import AddBook from './Components/AddBook.jsx'; // Add the import for AddBook component

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
    path: "/bookdetail",
    element: <BookDetail />,
    errorElement: <Error />,
  },
  {
    path: "/addbook",
    element: <AddBook />,
    errorElement: <Error />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
