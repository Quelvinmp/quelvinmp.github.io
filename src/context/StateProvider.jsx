import { createContext, useMemo, useState } from "react"
import PropTypes from 'prop-types';

export const StateContext = createContext();

export default function StateProvider({children}) {
  const [lightMode, setLightMode] = useState(true);

  const values = useMemo(() => ({
    lightMode, setLightMode
  }), [lightMode, setLightMode])

  return (
    <StateContext.Provider value={ values }>
      {children}
    </StateContext.Provider>
  )
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};