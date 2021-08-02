// Contains code for the theme context (what a context is: https://reactjs.org/docs/context.html)

/**
 * 
 * This implementation uses the ThemeProvider provided by styled-components.
 * 
 * A local state contains an object which determines the theme specifications 
 * to be used (light or dark). This state provides the 'theme' prop to the ThemeProvider.
 * 
 * The default theme mode is 'light' and the theme can be changed by calling the function toggle() which provides the value
 * to the key 'toggle' in the object assigned to the 'value' prop of the context responsible for theme updation. To use the
 * theme toggler, import the function useThemeUpdate(), assign it to a variable, say, themeToggler, and type 
 * themeToggler.toggle()
 *
 * To check specifications for each theme, check /src/components/assets/theme.tsx
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
    const [themeState, setThemeState] = useState(themeLight);

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
