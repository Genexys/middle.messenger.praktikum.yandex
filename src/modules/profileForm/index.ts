import Block from '../../utils/Block'
import Field from '../../components/field'
import Button from '../../components/button'
import template from './template.pug';

type TProps = {
  // title: string,
  // textLink: string,
}

class ProfileForm extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {

    this.children.fields = [
      {label: 'Почта',name: 'email', classField: 'form-profile__field', classInput: 'form-profile__input'},
      {label: 'Логин', name: 'login', classField: 'form-profile__field', classInput: 'form-profile__input'},
      {label: 'Имя', name: 'first_name', classField: 'form-profile__field', classInput: 'form-profile__input'},
      {label: 'Фамилия', name: 'second_name', classField: 'form-profile__field', classInput: 'form-profile__input'},
      {label: 'Имя в чате', name: 'display_name', classField: 'form-profile__field', classInput: 'form-profile__input'},
      {label: 'Телефон', name: 'phone', classField: 'form-profile__field', classInput: 'form-profile__input'},
    ].map(field => new Field({label: field.label, name: field.name, classField: field.classField, classInput: field.classInput}))

    this.children.button = new Button({label: 'Сохранить', type: 'submit',})
  }

  render() {
    return this.compile(template, {})
  }
}

export { ProfileForm as default }