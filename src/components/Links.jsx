import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Dukaan full stack task
                </Link>
                <Collapse>
                    <List style={{marginLeft: "20%"}}>
                        <Item>
                            <Link to="/contacts/list" className="nav-link text-light">
                                List all Contacts
                            </Link>
                        </Item>&nbsp&nbsp
                        <Item>
                            <Link to="/contacts/create" className="nav-link text-light">
                                Create Contact
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links