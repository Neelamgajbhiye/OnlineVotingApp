let initialState = {
    l3party1: 0,
    l3party2: 0,
    l3party3: 0
  };


export const locationthreeReducer =(state=initialState, action)=>{

    switch(action.type){

        case 'l3PARTY1':
            return {...state, l3party1: state.l3party1+1}
        
        case 'l3PARTY2':
               
            return {...state, l3party2: state.l3party2+1}

        case 'l3PARTY3':
                  
            return {...state, l3party3: state.l3party3+1}
          
      
        default:
            return state
    }


}