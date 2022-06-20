import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./movies/movies";
import NotFound from "./movies/notFound";
import Rentals from "./movies/rentals";
import Customers from "./movies/customers";
import NavBar from "./movies/navbar";
import MovieForm from "./movies/movieForm";
import LoginForm from "./movies/loginForm";
import Register from "./movies/register";
import Logout from "./movies/logout";
import auth from "./services/authService";
import ProtectedRoute from "./movies/common/protectedRoute";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <NavBar user={user}></NavBar>
        <main className="container">
          <Switch>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <ProtectedRoute
              path="/movies/:id"
              component={MovieForm}
            ></ProtectedRoute>
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            ></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
