import React,{ createContext } from 'react'
import Compo1 from './SelfContextApi/Compo1'

const FirstName=createContext();
const LastName=createContext();
const App=()=>{
    return (
      <div>
      <FirstName.Provider value="React">
      <LastName.Provider value="Component"> 
      <Compo1 />
      </LastName.Provider>
          
      </FirstName.Provider>
      </div>
         
      
    )
}
export default App
export { FirstName,LastName };

////react contex api allows you to easily access data at diffrent level of component tree without passing props to every level
