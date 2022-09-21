import React from 'react'
import { useSelector } from 'react-redux'

const TotalVote = () => {
  const L1counter1 = useSelector(state=>state.l1counter.l1party1)
  const L1counter2 = useSelector(state=>state.l1counter.l1party2)
  const L1counter3 = useSelector(state=>state.l1counter.l1party3)
  
  const L2counter1 = useSelector(state=>state.l2counter.l2party1)
  const L2counter2 = useSelector(state=>state.l2counter.l2party2)
  const L2counter3 = useSelector(state=>state.l2counter.l2party3)
  
  
  const L3counter1 = useSelector(state=>state.l3counter.l3party1)
  const L3counter2 = useSelector(state=>state.l3counter.l3party2)
  const L3counter3 = useSelector(state=>state.l3counter.l3party3)
  
  const counter1 = (L1counter1+L2counter1+L3counter1)
  const counter2 = (L1counter2+L2counter2+L3counter2)
  const counter3 = (L1counter3+L2counter3+L3counter3)
  return (
    <div className="col-3 justify-content">
    <div className="card bg-light">

        <h2 className='text-center'>All Location Total</h2>
        <hr/>
       
        <div className='card-body'>Party1 Total : <button className="btn btn-warning btn-sm">{counter1}</button> </div>
        <div className='card-body'>Party2 Total : <button className="btn btn-warning btn-sm">{counter2}</button> </div>
        <div className='card-body'>Party3 Total : <button className="btn btn-warning btn-sm">{counter3}</button></div>


</div></div>
  )
}

export default TotalVote