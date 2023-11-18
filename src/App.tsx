import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { LayoutContextProvider } from './context/LayoutContext';
import { Toaster } from './components/ui/toaster';
function App() {
  return (
    <LayoutContextProvider>
      <Toaster/>      
      <RouterProvider router={router} />
    </LayoutContextProvider>

  );
}

export default App;
