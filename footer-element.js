import {TelepathicElement} from "../telepathic-element/telepathic-element.js";
export default class FooterElement extends TelepathicElement{
    static describe(){ return `FooterElement is used to provide a consistent footer that is databound and themeable`};
	constructor(){
		super();
	}
	
	init(){return true}

} 