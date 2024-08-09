import Overview from './pages/overview/overview';
import Example from './pages/example/example';
import Tour from './pages/tour/tour';
import Blog from './pages/blog/blog';
import Help from './pages/help/help';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Overview />,
    },
    {
      path: "/examples",
      element: <Example />,
    },
    {
      path: "/tour",
      element: <Tour />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/help",
      element: <Help />,
    },
  ]);
  return (
    <>
      <div className="App font-lab ">
      <RouterProvider router={router} />
    </div>

    </>
  )
}

export default App
