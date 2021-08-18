import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />

            <Route path="/user/:id" component={Profile} />
        </Switch>
    </BrowserRouter>
);

export default Routes;