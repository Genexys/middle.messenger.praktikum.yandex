import Block from "../../utils/Block";
import RegistrationForm from '../../modules/registrationForm'
import Button from '../../components/button'
import template from './template.pug'

export class RegistrationPage extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.registrationPage = new RegistrationForm({title: 'Регистрация', textLink: 'Войти'});
  }

  render() {
    return this.compile(template, {})
  }
}