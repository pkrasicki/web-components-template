import { globalStyleSheet } from "../components";

class Component extends HTMLElement
{
	/**
	 * Creates a new component
	 * @param {string} htmlTemplate
	 * @param {string} stylesheet
	 */
	constructor(htmlTemplate, stylesheet="")
	{
		super();

		this.attachShadow({mode: "open"});

		const element = document.createElement("template");
		element.innerHTML = htmlTemplate;

		this.shadowRoot.adoptedStyleSheets = [globalStyleSheet];

		if (stylesheet != "" && stylesheet != null)
		{
			const styleElement = document.createElement("style");
			styleElement.appendChild(document.createTextNode(stylesheet));
			this.shadowRoot.append(styleElement);
		}

		this.shadowRoot.append(element.content.cloneNode(true));
	}
}

export default Component;