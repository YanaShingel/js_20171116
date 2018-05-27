"use strict";

import Block from "../block";
import Message from "../message/message";

import template from "./chat.pug";
import "./chat.scss";

export default class Chat extends Block {
	constructor(node, options = {}) {
		super(node, options);
	}

	render() {
		this.node.innerHTML = template();
	}
}
