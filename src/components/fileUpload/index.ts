import Block from '../../utils/Block'
import template from './template.pug';

type TProps = {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  classField?: string;

};

class FileUpload extends Block {
  constructor(props: TProps) {
    super(props);
  }
  
  render() {
    return this.compile(template, {...this.props});
  }
}

export { FileUpload as default }