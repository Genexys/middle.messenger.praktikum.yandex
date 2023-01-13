import Block from "../../utils/Block";
import LoginForm from '../../modules/loginForm'
import Button from '../../components/button'
import template from './template.pug'

export class LoginPage extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.loginPage = new LoginForm({title: 'Вход', textLink: 'Нет аккаунта?'});
  }

  render() {
    return this.compile(template, {})
  }
}