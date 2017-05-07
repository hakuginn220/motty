import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../atoms/button'
import Input from '../atoms/input'
import * as actions from '../../actions/oauth'

const Form = styled.form`
  display: block;
  margin: 0;
`

const Fieldset = styled.fieldset`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
`

const Legend = styled.legend`
  display: block;
  width: 100%;
  margin: 0;
  font-size: 20px;
`

const Field = styled.div`
  display: block;
  margin: 40px 0 0;
`

export default class Oauth extends Component {
  changeHostname (event) {
    event.preventDefault()
    actions.changeHostname(event.target.value)
  }

  changeEmail (event) {
    event.preventDefault()
    actions.changeEmail(event.target.value)
  }

  changePassword (event) {
    event.preventDefault()
    actions.changePassword(event.target.value)
  }

  submitOauth (event) {
    event.preventDefault()
    actions.submitOauth({
      hostname: this.props.oauth.get('hostname'),
      email: this.props.oauth.get('email'),
      password: this.props.oauth.get('password')
    })
  }

  render () {
    return (
      <Form onSubmit={this.submitOauth.bind(this)}>
        <Fieldset>
          <Legend>インスタンスの追加</Legend>
          <Field>
            <Input
              label='インスタンス先'
              id='hostname'
              type='text'
              value={this.props.oauth.get('hostname')}
              placeholder='mastodon.cloud'
              onChange={this.changeHostname.bind(this)}
            />
          </Field>
          <Field>
            <Input
              label='メールアドレス'
              id='email'
              type='text'
              value={this.props.oauth.get('email')}
              placeholder='test@sample.com'
              onChange={this.changeEmail.bind(this)}
            />
          </Field>
          <Field>
            <Input
              label='パスワード'
              id='password'
              type='password'
              value={this.props.oauth.get('password')}
              placeholder='password'
              onChange={this.changePassword.bind(this)}
            />
          </Field>
          <Field>
            <div>{this.props.oauth.get('message')}</div>
          </Field>
          <Field>
            <Button type='submit' value='次へ' />
          </Field>
        </Fieldset>
      </Form>
    )
  }
}