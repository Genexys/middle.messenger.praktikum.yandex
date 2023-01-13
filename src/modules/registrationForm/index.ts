import Block from '../../utils/Block'
import Field from '../../components/field'
import Button from '../../components/button'
import template from './template.pug';

type TProps = {
  title: string,
  textLink: string,
}

class RegistrationForm extends Block {
  constructor(props: TProps) {
    super(props);
  }

  protected initChildren(): void {

    this.children.fields = [
      {label: 'Почта',name: 'email'},
      {label: 'Логин', name: 'login'},
      {label: 'Имя', name: 'first_name'},
      {label: 'Фамилия', name: 'second_name'},
      {label: 'Телефон', name: 'phone'},
      {label: 'Пароль', name: 'password', type: 'password'},
      {label: 'Пароль (ещё раз)', name: 'password', type: 'password'},
    ].map(field => new Field({label: field.label, type: field.type, name: field.name}))

    this.children.button = new Button({label: 'Зарегистрироваться'})
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export { RegistrationForm as default }