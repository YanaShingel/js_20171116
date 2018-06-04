import Block from "../block";
import Textarea from "../textarea/textarea";
import Button from "../button/button";

import template from "./message-create.pug";
// import "./message-create.scss";

export default class CreateMsg extends Block {
    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template();

        let button = new Button(this.node.querySelector(".js-submit"), {
            text: "Отправить"
        });

        let textarea = new Textarea(this.node.querySelector(".js-textarea"), {
            placeholder: "Введите сообщение",
            rows: 5
        });

        textarea.render();
        button.render();

        button.onClick = () => {
            this.onSubmit(textarea.getValue());
        };
    }

    onSubmit() {}
}
