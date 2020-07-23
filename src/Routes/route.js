import React, { Component } from 'react'
import App from '../App';
import '../App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SearchPage from '../Pages/SearchPage'

export default class Routes extends Component {
render() {
    return(<BrowserRouter>
        <Switch>
            <Route exact path="/" component={SearchPage} />
        </Switch>
        </BrowserRouter>)
}
}