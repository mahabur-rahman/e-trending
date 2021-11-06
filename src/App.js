// react Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// style css
import "./index.scss";
// components
import Navbar from "./components/Navbar/Navbar";
import AllProducts from "./components/AllProduct/AllProduct";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";

// router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllProducts} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>

      {/* <Footer /> */}
    </>
  );
}

export default App;
