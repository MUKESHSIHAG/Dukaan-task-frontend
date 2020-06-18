import React, { Component } from 'react'
import ReactTable from 'react-table-v6'

import api from '../api'

import styled from 'styled-components'

import 'react-table-v6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateContact extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/contacts/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteContact extends Component {
    deleteUser = event => {
        event.preventDefault()
        api.deleteContactById(this.props.id)
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ContactsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })        
        await api.getAllContacts().then(contacts => {
            this.setState({
                contacts: contacts.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { contacts, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Phone Number',
                accessor: 'phone_number',
                filterable: true,
            },            
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteContact id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateContact id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!contacts.length) {
            showTable = false
        }

        if(!showTable) {
            return (
                <Wrapper>
                    <center><h4 style={{ marginTop: "15%" }}>No Contact to show</h4></center>
                </Wrapper>
            )
        }
        return ( 
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={contacts}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={1}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ContactsList