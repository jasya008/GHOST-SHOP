import { Route, Routes } from "react-router-dom";
import { Layouts } from "./components/Layouts/Layouts";
import { Home } from "./pages/Home";
import { routes } from "./routes";
import { CartProvider } from "react-use-cart";
// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  const setroutes = () =>
    routes.map(({ id, path, element }) => (
      <Route path={path} element={element} id={id} />
    ));

  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            {setroutes()}
          </Route>
        </Routes>
      </CartProvider>
      {/* <ToastContainer />   */}
    </div>
  );
}

export default App;
