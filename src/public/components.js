import globalStyles from "!!css-loader!./global.css";
import AppComponent from "./components/app/app.component";

export const globalStyleSheet = new CSSStyleSheet();

const components = [
	{selector: "ui-app", component: AppComponent},
];

/**
 * Initializes custom components
 */
const initComponents = () =>
{
	globalStyleSheet.replaceSync(globalStyles);

	components.forEach(component =>
	{
		customElements.define(component.selector, component.component);
	});
}

export default initComponents;