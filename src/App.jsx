
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [getUrl, setgetUrl] = useState([]);
  const [getVidio, setgetVidio] = useState([]);
  const [getDownload, setgetDownload] = useState();
  
  const getDataapi =  async () => {
       try {
            const Response = await axios.get(`https://api.nyx.my.id/dl/tiktok?url=${getUrl}`);
            setgetVidio(Response.data.result);
          } catch (error) {
               
          }
     }
     
       const Handlechange = (e) => {
           setgetUrl(e.target.value);
       }
       

       const Handledownload = () => {
        setTimeout(() => {
           getDataapi();
           setgetDownload(true);
          }, 1000)
       }
      

       useEffect(() => {
          getDataapi();
       }, []);



  return (
     <>
      <section>
           <div className='max-h-screen mt-24'>
               <p className='text-2xl text-slate-200'>Tiktok Downloader Vidio !!</p>
                
                <div className='mt-4 flex justify-center'>
                    <div className='relative w-[700px]'>
                         <input type="text" className='w-full py-2 rounded-md bg-slate-100 placeholder:pl-2
                          placeholder:text-slate-600' placeholder='your url vidio tiktok...' 
                          onChange={Handlechange}
                          />
                          <button className='absolute end-0 text-white
                           bg-indigo-500 hover:bg-indigo-600 font-medium 
                            text-sm px-6 py-2.5 rounded-md
                             disabled:opacity-60"' onClick={Handledownload}>
                                Download
                          </button>
                    </div>
                </div>


              <section className={`${getDownload ?  'active' : 'hidden'}`}>
                <div className={`mt-12`}>
     
                    <div className='flex justify-center'>
                    <div className='bg-slate-200 w-[400px] rounded-md flex'>
                         <img src={getVidio?.author?.avatar} alt="" className='w-[60px] p-2 rounded-md' />
                           <div className='relative pt-2'>
                           <p className='text-[10px] text-slate-800'>{getVidio.desc}</p>
                           <p className='text-[15px] text-slate-800 start-0 absolute'>{getVidio?.author?.nickname}</p>
                           </div>
                    </div>
                  

                    </div>
                    <div className='mt-2'>
                      <div className='flex justify-center'>
                     <button className='bg-indigo-500 md:w-[400px] w-[350px]  py-2 text-slate-50 rounded-md '>
                          <a href={getVidio.video1}>
                          Download Vidio pertama
                          </a>
                     </button>
                      </div>
                      <div className='flex justify-center'>
                     <button className='bg-indigo-500 md:w-[400px] w-[350px] py-2 text-slate-50 rounded-md mt-2'>
                          <a href={getVidio.video2}>
                          Download Vidio kedua
                          </a>
                     </button>
                      </div>
                      <div className='flex justify-center'>
                     <button className='bg-indigo-500 md:w-[400px] w-[350px] py-2 text-slate-50 rounded-md mt-2'>
                          <a href={getVidio.video_hd}>
                          Download Vidio HD
                          </a>
                     </button>
                      </div>
                      <div className='flex justify-center'>
                     <button className='bg-green-500 md:w-[400px] w-[350px] py-2 text-slate-50 rounded-md mt-2'>
                          <a href={getVidio.video_watermark}>
                          Download Vidio Watermark
                          </a>
                     </button>
                      </div>
                      </div>
                </div>
              </section>
           </div>
      </section> 

      </>
  )
}

export default App
