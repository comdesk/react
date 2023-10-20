import { createBrowserRouter } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Header from "./routes/Header";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movie/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/hello",
    element: <h1>hello</h1>,
  },
]);

export default App;
