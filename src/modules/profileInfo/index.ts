import Block from '../../utils/Block'
import Field from '../../components/field'
import Button from '../../components/button'
import template from './template.pug';

type TProps = {
  title: string,
  textLink: string,
}

class ProfileInfo extends Block {
  constructor(props: TProps) {
    super(props);
  }

  protected initChildren(): void {

    this.children.listInfo = [
      {label: 'логин', type: 'text'},
      {label: 'пароль', type: 'password'}
    ].map(field => new Field({label: field.label, type: field.type}))

    this.children.button = new Button({label: 'Вход', classes: 'main-form__btn--login'})
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export { ProfileInfo as default }