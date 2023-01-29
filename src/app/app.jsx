import React from "react";
import Users from "./components/users/users";
import NavBar from "./components/navBar/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./components/main/main";
import Login from "./components/login/login";
import NoPage from "./components/noPage";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route component={NoPage} />
            </Switch>
        </>
    );
}

export default App;
