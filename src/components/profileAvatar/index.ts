import Block from '../../utils/Block'
import template from './template.pug';

type TProps = {
  avatar: string;
};

class ProfileAvatar extends Block {
  constructor(props: TProps) {
    super(props);
  }
  
  render() {
    return this.compile(template, {...this.props});
  }
}

export { ProfileAvatar as default }