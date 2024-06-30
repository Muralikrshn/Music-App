import { createContext } from "react"
import { songs_list } from "../assets/app"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


  const contextValue = {
    songs_list
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider