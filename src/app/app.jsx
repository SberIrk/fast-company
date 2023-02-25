import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/ui/navBar/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import NoPage from "./components/page/noPage";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/:action?" component={Users} />
                <Route path="/login/:type?" component={Login} />
                <Route exact path="/" component={Main} />
                <Route component={NoPage} />
            </Switch>
        </>
    );
}

export default App;
