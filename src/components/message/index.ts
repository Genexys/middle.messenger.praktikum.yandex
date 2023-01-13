import Block from '../../utils/Block'
import ProfileForm from '../../../modules/profileForm'
import ProfileAvatar from '../../../components/profileAvatar'
import template from './template.pug';

type TProps = {
  textMessage: string
  timeMessage: string
  cls?: string
}

class Message extends Block {
  constructor(props: TProps) {
    super(props);
  }


  render() {
    return this.compile(template, {...this.props})
  }
}

export { Message as default }