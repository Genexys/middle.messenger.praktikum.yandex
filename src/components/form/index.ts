import Block from '../../utils/Block'
import Field from '../../components/field'
import Button from '../../components/button'
import template from './template.pug';


class Form extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {
    const form = {
      login: new Field({label: 'логин'}),
      password: new Field({label: 'пароль'}),
      button: new Button({label: 'войти'})
    }

    this.children.fields = [
      {label: 'логин', type: 'text'},
      {label: 'пароль', type: 'password'}
    ].map(field => new Field({label: field.label, type: field.type}))

  }

  render() {
    return this.compile(template, this.props)
  }
}

export { Form as default }