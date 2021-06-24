import react,{useReducer,useContext,createContext} from 'react';

const StateContext=createContext();

export const StateValue =({children,reducer,initialState})=>(
      < StateContext.Provider value={useReducer(reducer,initialState)} >
          {children}
      </StateContext.Provider>    
)

export const useStateValue=()=>
    useContext(StateContext);
