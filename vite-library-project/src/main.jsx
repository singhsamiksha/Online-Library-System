import { StrictMode  } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux'
import Error from './Components/Error.jsx';
import Home from './views/Home.jsx';
import BooksList from './views/BooksList.jsx';
import BookDetail from './views/BookDetail.jsx';
import AddBook from './views/AddBook.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: <BooksList />,
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
       <RouterProvider router={appRouter} />
     </Provider>
  </StrictMode>
);
