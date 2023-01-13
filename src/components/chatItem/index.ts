import Block from '../../utils/Block'
import template from './template.pug';

type TProps = {
  avatar: string;
  name: string;
  text: string;
  time: string;
  count: number;
}

class ChatItem extends Block {
  constructor(props: TProps) {
    super(props);
  }

  render() {
    return this.compile(template, {...this.props})
  }
}

export { ChatItem as default }