let initialState = {
    l2party1: 0,
    l2party2: 0,
    l2party3: 0
  };


export const locationtwoReducer =(state=initialState, action)=>{

    switch(action.type){

        case 'l2PARTY1':
            return {...state, l2party1: state.l2party1+1}
        
        case 'l2PARTY2':
               
            return {...state, l2party2: state.l2party2+1}

        case 'l2PARTY3':
                  
            return {...state, l2party3: state.l2party3+1}
          
      
        default:
            return state
    }


}