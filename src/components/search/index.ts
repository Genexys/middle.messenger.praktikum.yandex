import Block from '../../utils/Block'
import template from './template.pug';

class Search extends Block {
  
  render() {
    return this.compile(template, {});
  }
}

export { Search as default }