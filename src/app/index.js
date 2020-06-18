import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ContactsList, ContactsInsert, ContactsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <center>
                <div>
                    <h3><a className="text-primary" href="https://github.com/MUKESHSIHAG/Dukaan-task-frontend" target="_blank">Github link of frontend</a></h3><br></br>
                    <h3><a href="https://github.com/MUKESHSIHAG/Dukaan-task-backend" target="_blank">Github link of Backend</a></h3>
                </div>
            </center>
            <Switch>
                <Route path="/contacts/list" exact component={ContactsList} />
                <Route path="/contacts/create" exact component={ContactsInsert} />
                <Route
                    path="/contacts/update/:id"
                    exact
                    component={ContactsUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App