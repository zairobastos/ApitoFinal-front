import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Index from './views'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router

