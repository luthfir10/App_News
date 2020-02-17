import React from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { DefaultHeader } from "./container";

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
  loader: () => import("./views/Home"),
  loading: Loading
});
const List = Loadable({
  loader: () => import("./views/Pages/List/ListNews"),
  loading: Loading
});
const Deatilnews = Loadable({
  loader: () => import("./views/Pages/Detailnews/Detail"),
  loading: Loading
});
const Page404 = Loadable({
  loader: () => import("./views/Pages/Error/Page404"),
  loading: Loading
});

function App() {
  return (
    <Router>
      <DefaultHeader />
      <Container className="themed-container">
        <Row>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/List" component={List} />
            <Route path="/detail" component={Deatilnews} />
            <Route path="*" component={Page404} />
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
