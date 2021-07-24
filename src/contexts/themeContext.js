// Contains code for the theme context (what a context is: https://reactjs.org/docs/context.html)

/**
 * 
 * This implementation uses the ThemeProvider provided by styled-components.
 * 
 * A local state contains 3 key/value pairs which determine the theme mode and which mainColors and pastelColors
 * to use (light or dark) depending on the theme mode. This state provides the 'theme' prop to the ThemeProvider.
 * 
 * The default theme mode is 'light' and the theme can be changed by calling the function toggle() which provides the value
 * to the key 'toggle' in the object assigned to the 'value' prop of the context responsible for theme updation. To use the
 * theme toggler, import the function useThemeUpdate(), assign it to a variable, say, themeToggler, and type 
 * themeToggler.toggle()
 *
 * To access the the theme mode in a component, use theme.mode
 * To access the the mainColors in a component, use theme.mainColors.colorName e.g. theme.mainColors.red
 * To access the the pastelColors in a component, use theme.pastelColors.colorName e.g. theme.pastelColors.grey
 * The same can be accessed similarly in the styling of components styled using styled-components.
 * 
 */

import React, {useContext, useState} from "react"
import {ThemeProvider} from "styled-components"
import {themeLight, themeDark} from "../components/assets/theme"

// context to update the theme
const ThemeUpdateContext = React.createContext()

/**
 * Function to update the theme context
 */ 
const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}

const CustomThemeProvider = ({children}) => {
    // state for theme
    const [themeState, setThemeState] = useState(themeDark);

    /**
     * Function to toggle the theme
     */
    const toggle = () => {
        if(themeState.mode === 'light' )
            setThemeState(themeDark);
        else
            setThemeState(themeLight);
    }

    return (
            <ThemeUpdateContext.Provider value={{ toggle: toggle }}>
                <ThemeProvider theme={themeState}>
                        {children}
                </ThemeProvider>
            </ThemeUpdateContext.Provider>
    )
}

export {
    useThemeUpdate,
    CustomThemeProvider
}
