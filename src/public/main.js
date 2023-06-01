import "./index.css";
import {initComponents, initGlobalStyles} from "./components";

document.adoptedStyleSheets = [ initGlobalStyles() ];

initComponents();