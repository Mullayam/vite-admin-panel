import NotFound from "@/components/error/notFound";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" />,

    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
    ],

  },
  {
    path: "*",
    element: <NotFound />,
  }
]);