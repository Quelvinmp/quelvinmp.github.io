import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import PropTypes from 'prop-types';

export const StateContext = createContext();

export default function StateProvider({children}) {
  const [lightMode, setLightMode] = useState(false);

  const toggleTheme = useCallback(() => {
    localStorage.setItem('lightMode', JSON.stringify(!lightMode))
    setLightMode(!lightMode)
  }, [lightMode])

  useEffect(() => {
    if (localStorage.getItem('lightMode')) {
      setLightMode(JSON.parse(localStorage.getItem('lightMode')))
    }
  }, [])

  const values = useMemo(() => ({
    lightMode, toggleTheme
  }), [lightMode, toggleTheme])

  return (
    <StateContext.Provider value={ values }>
      {children}
    </StateContext.Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};