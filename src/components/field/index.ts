import Block from '../../utils/Block'
import template from './template.pug';

type TProps = {
  label: string;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  classInput?: string;
  classField?: string;
  events?: {
    blur: () => void;
    focus: () => void;
  }
};

class Field extends Block {
  constructor(props: TProps) {
    super(props);
  }
  
  render() {
    return this.compile(template, {...this.props});
  }
}

export { Field as default }