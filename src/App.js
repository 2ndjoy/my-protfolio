import './App.css';

import { RouterProvider } from 'react-router-dom';
import { Routers } from './Components/Routers/Routers';

function App() {
  return (
    <div data-theme="cupcake">
      <RouterProvider router={Routers}></RouterProvider>
    </div>
  );
}

export default App;
