"use strict";

import Block from "../block";
import Input from "../input/input";
import Button from "../button/button";

import template from "./auth.pug";
import "./auth.scss";

export default class Auth extends Block {
    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template();

        let button = new Button(this.node.querySelector(".js-submit"), {
            text: "Войти"
        });

        let input = new Input(this.node.querySelector(".js-name"), {
            value: "",
            placeholder: "Введите имя"
        });

        button.render();
        input.render();
    }
}
