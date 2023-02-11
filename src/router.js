import Main from "./hooks/Main";
import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import About from "./components/About/About";
import RestaurantList from "./components/Restaurant/RestaurantList"
import RestaurantDetail from "./components/Restaurant/RestaurantDetail"

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/about",
          element: (
            <Suspense fallback={<div>Laoding...</div>}>
              {" "}
              <About />
            </Suspense>
          ),
        },
        {
          path: "/",
          element: <RestaurantList />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantDetail />,
        },
      ],
    },
  ]);

  export default Router