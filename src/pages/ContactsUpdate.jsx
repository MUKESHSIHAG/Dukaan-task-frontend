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

class ContactsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            phone_number: ''
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

    handleUpdateContact = async () => {
        const { id, name, phone_number } = this.state
        const payload = { name, phone_number }

        await api.updateContactById(id, payload).then(res => {
            window.alert(`Contact updated successfully`)
            this.setState({
                name: '',
                phone_number: ''
            })
            window.location.href = '/contacts/list'
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const contact = await api.getContactById(id)

        this.setState({
            name: contact.data.data.name,
            phone_number: contact.data.data.phone_number,
        })
    }

    render() {
        const { name, phone_number } = this.state
        return (
            <Wrapper>
                <Title>Update Contact</Title>

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

                <Button onClick={this.handleUpdateContact}>Update Contact</Button>
                <CancelButton href={'/contacts/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ContactsUpdate