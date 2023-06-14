import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loader } from '../assets'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import EditIcon from '@mui/icons-material/Edit';
import { editing } from '../redux/ad';
import { deleteItem, putAllData } from '../redux/ads';
import { DeleteOutline, RemoveCircleOutline } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';


const ResultatAdCopy = () => {
  const dispatch = useDispatch()
  const {loading, error, ad} = useSelector(state => state.ad)
  const data = useSelector(state => state.ads.data)
  const [edit, setedit] = useState(false)
  const [myAd, setmyAd] = useState("")
  useEffect(() => {
    setmyAd(ad.ad)
  }, [ad])

  const handleEditingSave = (e) => {
    e.preventDefault()
    setedit(false)
    dispatch(editing({name: ad.name, ad: myAd}))
  }

  const handleSave = (e) => {
    e.preventDefault()
    const id = uuidv4();
    dispatch(putAllData({
      id: id,
      name: ad.name,
      ad: ad.ad
    }))
  }
  const handleDelete = (e, id) => {
    e.preventDefault()
    dispatch(deleteItem(id))
  }


  return (
    <div className='flex-1 flex flex-col'>
      <p className='m-10 text-center font-bold rounded-xl bg-transparent border-gray-800 border backdrop-blur p-4 font-satoshi'>Every time you click the Generate button, we'll create unique and personalized Ad Copy for you</p>
      {ad.ad && <h1 className='text-[25px] font-satoshi font-bold mt-8'>Resultat</h1>}
      <div className='m-8  max-w-full flex-1'>
    {loading ? (
      <img src={loader} alt='loader' className='w-20 h-20 object-contain mx-auto' />
    ) : error ? (
      <p className='font-inter font-bold text-black text-center'>
        Well, that wasn't supposed to happen...
      </p>
    ) : (
     ad.ad && (
        <div className='flex flex-col gap-3 max-h-h/2'>
          <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
             Ad Copy For <span className='blue_gradient'>{ad.name}</span>
          </h2>
          <div className='summary_box relative'>
            <p className='font-inter font-medium text-sm p-4 text-gray-700'>{ad.ad}</p>
            <div className='absolute bottom-0 right-0 p-2 flex justify-center items-center space-x-2'>
              <SaveAltIcon className="text-cyan-600 hover:text-blue-800 cursor-pointer" onClick={(e) => handleSave(e)} />
              <EditIcon className="text-cyan-600 hover:text-blue-800 cursor-pointer" onClick={() => setedit(true)}/>
            </div>
          </div>
        </div>
      )
    )}
    </div>
    {data.length > 0 && <h1 className='text-[25px] font-satoshi font-bold'>History</h1>}
    {data.length > 0 && 
      <div className='m-8 max-w-full max-h-[300px] overflow-y-auto flex-1 space-y-4'>
        {data.map((item) => (
                  <div key={item.id} className='flex flex-col gap-3 max-h-h/2'>
                  <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                     Ad Copy For <span className='blue_gradient'>{item.name}</span>
                  </h2>
                  <div className='summary_box relative'>
                    <p className='font-inter font-medium text-sm p-3 text-gray-700'>{item.ad}</p>
                    <div className='absolute bottom-0 right-0 p-2 flex justify-center items-center space-x-2'>
                      <DeleteOutline className="text-cyan-600 hover:text-blue-800 cursor-pointer" onClick={(e) => handleDelete(e, item.id)}  />
                    </div>                  
                  </div>
                </div>
        ))}
      </div>
    }
    {edit && <h1 className='text-[25px] font-satoshi font-bold'>Editing</h1>}
    {edit && 
      <div className='m-8 max-w-full max-h-[200px] overflow-y-auto summary_box flex-1 relative'>
        <button className="text-gray-900 absolute top-0 left-0 m-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={(e) => handleEditingSave(e)}>Save</button>
        <textarea className='max-w-full bg-transparent focus:outline-none my-10' cols="70" rows="8" value={myAd} placeholder='For Editing' onChange={(e) => setmyAd(e.target.value)}></textarea>
      </div>}
    </div>

  )
}

export default ResultatAdCopy