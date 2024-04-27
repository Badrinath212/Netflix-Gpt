import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Browse from './Components/Browse';
import { Provider } from 'react-redux';
import AppStore from './Utils/AppStore';

function App() {
  const AppRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ]);
  return (
    <div>
      <Provider store={AppStore}>
        <RouterProvider router={AppRouter}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
