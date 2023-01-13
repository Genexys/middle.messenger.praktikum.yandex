import Block from '../../utils/Block'
import FormChangePassword from '../../modules/formChangePassword'
import ProfileForm from '../../modules/profileForm'
import ProfileAvatar from '../../components/profileAvatar'
import template from './template.pug';

type TProps = {
  nickName: string
}

export class Profile extends Block {
  constructor(props: TProps) {
    super(props);
  }

  protected initChildren(): void {

    this.children.formChangePassword = new FormChangePassword();
    this.children.formProfile = new ProfileForm();
    this.children.profileAvatar = new ProfileAvatar({avatar: 'https://dummyimage.com/130x130/EFEFEF/000'});
  }

  render() {
    return this.compile(template, {...this.props})
  }
}
