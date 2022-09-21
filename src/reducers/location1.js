let initialState = {
    l1party1: 0,
    l1party2: 0,
    l1party3: 0
  };


export const locationoneReducer =(state=initialState, action)=>{

    switch(action.type){

        case 'l1PARTY1':
            //console.log("l1party1")
            return {...state, l1party1: state.l1party1+1}
        
        case 'l1PARTY2':
               
            return {...state, l1party2: state.l1party2+1}

        case 'l1PARTY3':
                  
            return {...state, l1party3: state.l1party3+1}
          
      
        default:
            return state
    }


}