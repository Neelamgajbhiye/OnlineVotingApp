import React from 'react'
import { useDispatch } from 'react-redux';
import { l1party1,l1party2,l1party3, l2party1,l2party2,l2party3, l3party1,l3party2,l3party3} from '../actions/counting';

const PollingStation = ({number}) => {
  const dispatcher = useDispatch()

let dispatchbutton=(vote)=>{
 // console.log(number)
  switch (number) {
    case '1':
      switch (vote) {
        case 'V1': return dispatcher(l1party1())
        case 'V2': return dispatcher(l1party2())
        case 'V3': return dispatcher(l1party3())

      }
      break;
      // console.log(number);
      // return dispatcher(l1party1())
   case '2':  switch (vote) {
    case 'V1': return dispatcher(l2party1())
    case 'V2': return dispatcher(l2party2())
    case 'V3': return dispatcher(l2party3())

  }
      break;
  case '3': switch (vote) {   
    case 'V1': return dispatcher(l3party1())
    case 'V2': return dispatcher(l3party2())
    case 'V3': return dispatcher(l3party3())

  }
  break;   
  
    default:
      break;
  }
}

  return (
            <div className="card col-4" styles={{margin:'10px',padding:'5px'}}>
            <div className="card-header bg-primary">PollingStation {number}</div>
            <div className="card-body">
              <div className="row">
            <div className="m-2">
                <button className="btn btn-success btn-sm" onClick={()=>{dispatchbutton('V1')}}>Vote For 1</button>
                <button className="btn btn-success btn-sm m-2" onClick={()=>{dispatchbutton('V2')}}>Vote For 2</button>
                <button className="btn btn-success btn-sm" onClick={()=>{dispatchbutton('V3')}}>Vote For 3</button>
           </div> </div></div>
          </div>
  )
}

export default PollingStation