import { Home, Login } from './pages';
import {
  createBrowserRouter,
  Navigate,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import './App.css';
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
    return <RouterProvider router={router} />  
}

export default App;
