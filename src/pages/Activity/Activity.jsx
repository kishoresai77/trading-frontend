//import { useDispatch } from 'react-redux'
import TreadingHistory from '../Portfilio/TreadingHistory'
//import { useEffect } from 'react'
//import { getAllOrdersForUser } from '@/Redux/Order/Action'

const Activity = () => {
  // const dispatch=useDispatch()
  // useEffect(() => {
  // dispatch(getAllOrdersForUser({jwt:localStorage.getItem('jwt')}))

  // },[])
  return (
    <div className='px-20'>
      <p className='py-5 pb-10 text-2xl font-semibold'>Treading History</p>
        <TreadingHistory/>
    </div>
  )
}

export default Activity