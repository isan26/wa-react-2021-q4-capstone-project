import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./containers/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Content from './containers/Content';
import Footer from "./containers/Footer";

import Home from "pages/Home";
import Products from "pages/Products";

function App() {

  return (
    <>
      <Router>
        <GlobalStyle />
        <Header>
          <Link to="/">
            <Logo />
          </Link>
          <Search />
          <Cart />
        </Header>
        <Content>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer>
          <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
        </Footer>
      </Router>
    </>);
}

export default App;
