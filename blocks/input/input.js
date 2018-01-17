import Block from '../block';

export default class Input extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = `
        <input class="input" value="${this.options.value}" placeholder="${this.options.placeholder}"/>`;
    }

}
