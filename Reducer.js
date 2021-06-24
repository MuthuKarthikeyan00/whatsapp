export const initialState={
    user:null,
}

export const action ={
    actionType:"SET__user",
}

const reducer =(state,action)=>{
    switch (action.type) {
        case "SET__user" :
           return{
               ...state,
               user:action.user,
           }
    
        default: {
            return state;
        }
            
    }
}

export default reducer;

