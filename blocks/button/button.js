import Block from '../block';

export default class Button extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = `
        <button class="button">
            ${this.options.text}
        </button>`;
    }

}
