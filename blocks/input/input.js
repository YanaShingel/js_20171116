(function () {
    'use strict';

    const Block = window.Block;

    class Input extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `
              <input class="input" value="${this.options.value}"
                placeholder="${this.options.placeholder}"/>
            `;
        }

    }

    window.Input = Input;
})();