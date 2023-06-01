import Component from "../component.js";
import htmlTemplate from "./app.component.html";
import stylesheet from "./app.component.css";

class AppComponent extends Component
{
	constructor()
	{
		super(htmlTemplate, stylesheet);
	}

	connectedCallback()
	{
		this.shadowRoot.querySelector(".title").textContent = document.title;
	}
}

export default AppComponent;