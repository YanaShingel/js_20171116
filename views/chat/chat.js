import View from "../view";
import template from "./chat.pug";

import MessageCreate from "../../blocks/message-create/message-create";
import Message from "../../blocks/message/message";

import Messages from "../../models/messages";
import User from "../../models/user";

export default class Chat extends View {
    constructor(node) {
        super(node);
        this.node.innerHTML = template();

        this.form = new MessageCreate(document.querySelector(".js-form"));
        this.form.render();

        this.form.onSubmit = message => {
            this.messages.addMessage(this.user.name, message);
        };
    }

    addMessage(data) {
        let node = document.createElement("div");

        let message = new Message(node, data);
        message.render();
        this.node.querySelector(".js-list").appendChild(node);
    }

    onPoll(items) {
        this.node.querySelector(".js-list").innerHTML = "";
        items.forEach(data => this.addMessage(data));
    }

    show() {
        this.user = User.load();
        this.messages = new Messages();

        if (!this.user) {
            location.href = "./#auth";
        }

        super.show();
        this.messages.fetch(items => {
            items.forEach(data => this.addMessage(data));

            this.messages.start(data => this.onPoll(data));
        });
    }
}
