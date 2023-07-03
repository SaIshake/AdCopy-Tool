import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { begin, clear, failed, success } from '../redux/ad'
import {Configuration, OpenAIApi} from "openai"


const DemoAdCopy = () => {
  const [nameP, setNameP] = useState("")
  const [kindP, setKindP] = useState("")
  const [valueP, setValueP] = useState("")
  const [action, setAction] = useState("")
  const [language, setLanguage] = useState("")
  const [keywords, setKeywords] = useState("")
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);


  const dispatch = useDispatch()
  const handleSubmit = async(e) => {
    e.preventDefault()

    /* 
    const options = {
      method: 'POST',
      url: 'https://chatgpt53.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_ARTICLE_KEY,
        'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: `Generate a very short ad copy with ${language} for ${nameP} targeting ${kindP}. The value proposition is: ${valueP}. The call-to-action is: ${action}. with this keywords: ${keywords}`
          }
        ],
        temperature: 1
      }
    };
    */
    dispatch(begin())
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: 'user',
            content: `Generate a very short ad copy with ${language} for ${nameP} targeting ${kindP}. The value proposition is: ${valueP}. The call-to-action is: ${action}. with this keywords: ${keywords}`
          }
        ]
      });
      dispatch(success({ad: response.data.choices[0].message.content, name: nameP, audiance: kindP, value: valueP, action: action, language: language, keywords: keywords}))
    } catch (error) {
      dispatch(failed())
    }
  }
  const handleClear = (e) => {
    e.preventDefault()
    setNameP("")
    setKindP("")
    setLanguage('')
    setValueP('')
    setAction("")
    setKeywords("")
    dispatch(clear())
  }
  return (
     <div className='w-full mt-2 max-w-xl m-10'>
      <div className='flex flex-col gap-2 w-full'>
        <form className='justify-center items-center space-y-3' onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className='text-[13px] font-satoshi font-semibold my-5'>What is The product name</label>
            <input type="text" value={nameP} placeholder='Product Name ' required onChange={(e) => setNameP(e.target.value)} className='url_input peer' />
          </div>
          <div className='flex space-x-3'>
            <div className='flex-1'>
              <label className='text-[13px] font-satoshi font-semibold'>What kind of audiance you are target</label>
              <input type="text" value={kindP} placeholder='Kind Of People'  onChange={(e) => setKindP(e.target.value)} className='url_input peer' />
            </div>
            <div className='flex-1'>
              <label className='text-[13px] font-satoshi font-semibold'>what is the value Proposition</label>
              <input type="text" value={valueP} placeholder='Value Of Product ?'  onChange={(e) => setValueP(e.target.value)} className='url_input peer' />
            </div>
          </div>
          <div className='flex space-x-3'>
            <div className='flex-1'>
              <label className='text-[13px] font-satoshi font-semibold'>Language</label>
              <input type="text" value={language} placeholder='Language ?'  onChange={(e) => setLanguage(e.target.value)} className='url_input peer' />
            </div>
            <div className='flex-1'>
              <label className='text-[13px] font-satoshi font-semibold'>Call to Action</label>
              <input type="text" value={action} placeholder='CTA ?'  onChange={(e) => setAction(e.target.value)} className='url_input peer' />
            </div>
          </div>
          <div className='flex-1'>
              <label className='text-[13px] font-satoshi font-semibold'>Keywords</label>
              <input type="text" value={keywords} placeholder='Enter Keywords'  onChange={(e) => setKeywords(e.target.value)} className='url_input peer' />
          </div>
          <div className='flex mt-8'>
            <button type="submit" className="text-white  justify-center mx-auto items-center w-[50%] bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-orange-900 uppercase font-satoshi">Generate</button>
            <button onClick={(e) => handleClear(e)} className="text-white  justify-center mx-auto items-center w-[50%] bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-cyan-900 uppercase font-satoshi">Clear</button>
          </div>
          

        </form>

      </div>
     </div>
    
  )
}

export default DemoAdCopy