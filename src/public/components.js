import globalStyles from "!!css-loader!./global.css";
import AppComponent from "./components/app/app.component";

export const globalStyleSheet = new CSSStyleSheet();

const components = [
	{selector: "ui-app", component: AppComponent},
];

/**
 * Initializes global styles
 * @returns {CSSStyleSheet} CSSStyleSheet
 */
export const initGlobalStyles = () =>
{
	globalStyleSheet.replaceSync(globalStyles);
	return globalStyleSheet;
};

/**
 * Initializes custom components
 */
export const initComponents = () =>
{
	components.forEach(component =>
	{
		customElements.define(component.selector, component.component);
	});
};