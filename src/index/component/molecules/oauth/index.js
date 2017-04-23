import React, { Component } from 'react'
import style from './style.css'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import * as Action from '../../../action/oauth'

export default class Oauth extends Component {
  _updateValue (event) {
    event.preventDefault()
    Action.oauthUpdateValue(event.target.value)
  }

  _submitValue (event) {
    event.preventDefault()
    Action.oauthUpdateResult(this.props.oauth.get('value'))
  }

  _render0 () {
    return (
      <form className={style.form} onSubmit={this._submitValue.bind(this)}>
        <fieldset className={style.fieldset}>
          <legend className={style.legend}>インスタンスの追加</legend>
          <div className={style.field}>
            <Input
              label='ドメインを入力'
              id='instance_domain_name'
              value={this.props.oauth.get('value')}
              placeholder='mastodon.cloud'
              onChange={this._updateValue.bind(this)}
            />
          </div>
          <div className={style.field}>
            {this.props.oauth.get('error')}
          </div>
          <div className={style.field}>
            <Button
              type='submit'
              value='次へ'
            />
          </div>
        </fieldset>
      </form>
    )
  }

  _render1 () {
    return (
      <div>
        <div>インスタンス確認中</div>
        <div>{this.props.oauth.get('value')}</div>
        <div>リザルト情報</div>
        <div>{this.props.oauth.getIn(['result', 'title'])}</div>
        <div>{this.props.oauth.getIn(['result', 'url'])}</div>
        <div>{this.props.oauth.getIn(['result', 'email'])}</div>
      </div>
    )
  }

  render () {
    switch (this.props.oauth.get('action')) {
      case 1:
        return this._render1()
      default:
        return this._render0()
    }
  }
}
