import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";
import "./typography.css";

fairyGatesTheme.headerFontFamily = ['Work Sans', 'Header TC', 'sans-serif'];
fairyGatesTheme.bodyFontFamily = ['Quattrocento Sans', 'Noto Sans TC', 'serif'];

const typography = new Typography(fairyGatesTheme);

export default typography;
