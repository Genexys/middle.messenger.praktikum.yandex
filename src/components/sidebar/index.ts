import Block from '../../utils/Block'
import ChatItem from '../chatItem'
import Search from '../search'
import template from './template.pug';

class SideBar extends Block {
  constructor() {
    super();
  }
  
  protected initChildren(): void {

    this.children.chatList = [
      {avatar: 'Старый пароль', name: 'oldPassword', text: "password", time: "password", count: 2},
      {avatar: 'Старый пароль', name: 'oldPassword', text: "password", time: "password", count: 2},
      {avatar: 'Старый пароль', name: 'oldPassword', text: "password", time: "password", count: 2},
      ].map(chat => new ChatItem({avatar: chat.avatar, name: chat.name, text: chat.text, time: chat.time, count: chat.count}))

    this.children.search = new Search()
  }


  render() {
    return this.compile(template, {});
  }
}

export { SideBar as default }