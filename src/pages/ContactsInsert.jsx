import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ContactsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            phone_number: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputPhoneNumber = async event => {
        const phone_number = event.target.validity.valid
            ? event.target.value
            : this.state.phone_number

        this.setState({ phone_number })
    }

    handleIncludeContact = async () => {
        const { name, phone_number } = this.state
        // const arrayTime = time.split('/')
        const payload = { name, phone_number }

        await api.insertContact(payload).then(res => {
            window.alert(`Contact inserted successfully`)
            this.setState({
                name: '',
                phone_number: ''
            })
        })
    }

    render() {
        const { name, phone_number } = this.state
        return (
            <Wrapper>
                <Title>Create Contact</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Phone Number: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10000000000"
                    value={phone_number}
                    onChange={this.handleChangeInputPhoneNumber}
                />
                <Button onClick={this.handleIncludeContact}>Add Contact</Button>
                <CancelButton href={'/contacts/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ContactsInsert