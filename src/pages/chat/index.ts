import Block from "../../utils/Block";
import Sidebar from '../../components/sidebar'
import template from './template.pug'

export class ChatPage extends Block {

  constructor() {
    super();
  }

  protected initChildren(): void {
    this.children.sidebar = new Sidebar();
  }

  render() {
    return this.compile(template, {})
  }
}