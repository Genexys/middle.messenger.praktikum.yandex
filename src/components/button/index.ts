import Block from '../../utils/Block'
import template from './template.pug';

type TProps = {
  label: string
  classes?: string
  type?: string
};

class Button extends Block {
  constructor(props: TProps) {
    super(props);
  }

  render() {
    return this.compile(template, {...this.props});
  }
}

export { Button as default }