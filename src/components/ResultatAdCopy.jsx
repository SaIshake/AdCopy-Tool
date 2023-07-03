import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loader } from '../assets'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import EditIcon from '@mui/icons-material/Edit';
import { clickEdit, editing } from '../redux/ad';
import { deleteItem, putAllData, getData } from '../redux/ads';
import { DeleteOutline, RemoveCircleOutline } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"

axios.defaults.withCredentials = true
const ResultatAdCopy = () => {
  const dispatch = useDispatch()
  const {loading, error, ad, edit} = useSelector(state => state.ad)
  const data = useSelector(state => state.ads.data)
  //const [edit, setedit] = useState(false)
  const [myAd, setmyAd] = useState("")
  const [errorSaving, setErrorSaving] = useState({})
  useEffect(() => {
    const handleGetAds = async() => {
      try {
        const res = await axios.get("http://localhost:4000/ad/adbyuser") 
        dispatch(getData(res.data))
      } catch (error) {
      }
    }
    handleGetAds()
    setmyAd(ad.ad)
  }, [ad])

  const handleEditingSave = (e) => {
    e.preventDefault()
    dispatch(editing({name: ad.name, ad: myAd}))
  }

  const handleSave = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:4000/ad/save", {
        name: ad.name,
        audiance: ad.audiance,
        value: ad.value,
        action: ad.action,
        language: ad.language,
        keywords: ad.keywords,
        ad: ad.ad
      })

      dispatch(putAllData(res.data))
      
    } catch (error) {
      setErrorSaving(error.response.data)
      
    }
  }
  const handleDelete = async(e, id) => {
    e.preventDefault()
    try {
      const res = await axios.delete(`http://localhost:4000/ad/delete/${id}`) 
      dispatch(deleteItem(id))
    } catch (error) {
    }
  }


  return (
    <div className='flex-1 flex flex-col z-[5]'>
      <p className='m-10 text-center font-bold rounded-xl bg-transparent border-gray-800 border backdrop-blur p-4 font-satoshi'>Every time you click the Generate button, we'll create unique and personalized Ad Copy for you</p>
      {ad.ad && <h1 className='text-[25px] font-satoshi font-bold mt-8 mx-4'>Resultat</h1>}
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
              <EditIcon className="text-cyan-600 hover:text-blue-800 cursor-pointer" onClick={() => dispatch(clickEdit())}/>
            </div>
          </div>
        </div>
      )
    )}
    </div>
    {errorSaving.message && <h1 className='text-[15px] mb-4 rounded-xl border border-red-600 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4  text-center mt-3 font-satoshi font-semibold text-red-700 mx-10'>Error : {ad.name} {errorSaving.message}</h1>}

    {data.length > 0 && <h1 className='text-[25px] font-satoshi font-bold mx-4'>History</h1>}
    {data.length > 0 && 
      <div className='m-8 max-w-full max-h-[300px] overflow-y-auto flex-1 space-y-4'>
        {data.map((item) => (
                  <div key={item._id} className='flex flex-col gap-3 max-h-h/2'>
                  <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                     Ad Copy For <span className='blue_gradient'>{item.name}</span>
                  </h2>
                  <div className='summary_box relative'>
                    <p className='font-inter font-medium text-sm p-3 text-gray-700'>{item.ad}</p>
                    <div className='absolute bottom-0 right-0 p-2 flex justify-center items-center space-x-2'>
                      <DeleteOutline className="text-cyan-600 hover:text-blue-800 cursor-pointer" onClick={(e) => handleDelete(e, item._id)}  />
                    </div>                  
                  </div>
                </div>
        ))}
      </div>
    }
    {edit && <h1 className='text-[25px] z-[10] font-satoshi font-bold mx-4'>Editing</h1>}
    {edit && 
      <div className='max-w-[300px] mx-auto my-2 z-[10] sm:max-w-full max-h-[200px] p-4 overflow-y-auto rounded-xl border border-cyan-600 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] flex-1 relative'>
        <button className="text-gray-900 absolute top-0 left-0 m-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={(e) => handleEditingSave(e)}>Save</button>
        <textarea  className='max-w-full z-[10] bg-transparent focus:outline-none my-10' cols="70" rows="8" value={myAd} placeholder='For Editing' onChange={(e) => setmyAd(e.target.value)}></textarea>
      </div>}
    </div>

  )
}

export default ResultatAdCopy