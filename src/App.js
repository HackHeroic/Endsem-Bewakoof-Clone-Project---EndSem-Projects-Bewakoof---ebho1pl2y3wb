import { RouterProps,RouterProvider,createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/homePage";
import Error from "./pages/Error";
import './index.css';
import ProductDetail from "./pages/productDetail";
import Products from "./components/Products";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import NavBar from "./components/navBar";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Homepage/>,
      children:[
        {
          path:'*',
          element:<Error/>
        },
        {
          path:'/login',
          element: <LoginPage/>
        },
        {
          path:'/signup',
          element:<SignUpPage/>
        },
        {
          path:'/',
          element:<Products/>
        },
        {
          path:'/product/:productId',
          element:<ProductDetail/>
        }
      ]
    }
  ])

  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </AuthProvider>

  );
}

export default App;
