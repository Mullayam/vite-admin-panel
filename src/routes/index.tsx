import Error500 from "@/components/error/internal500";
import NotFound from "@/components/error/notFound";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Home from "@/pages/Home";
import ForgetPassword from "@/pages/auth/Forget-Password";
import SignIn from "@/pages/auth/SignIn";
import Signup from "@/pages/auth/SignUp";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/authentication",
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "error/server-error",
    element: <Error500 />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);