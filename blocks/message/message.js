"use strict";

import Block from "../block";
import template from "./message.pug";
import "./message.scss";

export default class Message extends Block {
	constructor(node, options = {}) {
		super(node, options);
	}

	render() {
		this.node.innerHTML = template(this.options);
	}
}
