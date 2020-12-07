import Typography from "typography"
import sternGroveTheme from "typography-theme-stern-grove"
sternGroveTheme.baseFontSize = '16px'
sternGroveTheme.baseLineHeight = '1.5'


const typography = new Typography(sternGroveTheme)

export const { scale, rhythm, options } = typography
export default typography
