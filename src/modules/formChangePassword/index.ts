import Block from '../../utils/Block'
import Field from '../../components/field'
import Button from '../../components/button'
import template from './template.pug';

class FormChangePassword extends Block {
  constructor() {
    super();
  }

  protected initChildren(): void {

    this.children.fields = [
      {label: 'Старый пароль',name: 'oldPassword', type: "password", classField: 'form-profile__field', classInput: 'form-profile__input'},
      {label: 'Новый пароль', name: 'newPassword', type: "password", classField: 'form-profile__field', classInput: 'form-profile__input'},
      {label: 'Повторите новый пароль', name: 'newPassword', type: "password", classField: 'form-profile__field', classInput: 'form-profile__input'},
      ].map(field => new Field({label: field.label, name: field.name, classField: field.classField, classInput: field.classInput}))

    this.children.button = new Button({label: 'Сохранить', type: 'submit',})
  }

  render() {
    return this.compile(template, {})
  }
}

export { FormChangePassword as default }