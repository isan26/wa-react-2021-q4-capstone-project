import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./containers/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Cart from "./components/Cart";
import Content from './containers/Content';
import Footer from "./containers/Footer";

import HomePage from "pages/Home";
import ProductsPage from "pages/Products";
import DetailPage from "pages/Detail";
import SearchPage from "components/Search";

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
            <Route path="/products" component={ProductsPage} />
            <Route path="/detail" component={DetailPage} />
            <Route path="/search" component={SearchPage} />
            <Route path={["/", "/home"]} component={HomePage} />
          </Switch>
        </Content>
        <Footer>
          <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
        </Footer>
      </Router>
    </>);
}

export default App;
