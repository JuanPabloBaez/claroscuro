import React, {useEffect} from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import {useRecoilState,useRecoilValue} from 'recoil';
import {themeState,langState} from './index.js';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Trabajos() {
    const [,setLight] = useRecoilState(themeState);
    const lang = useRecoilValue(langState);
    const {data, error } = useSWR('/api/hello', fetcher);

   
    useEffect(()=>{
        setLight(false)
    }, [setLight]);    

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>


  return (
    <div>
    <h4>{lang==="esp" ? "Selección de trabajos" : "Slected works"}</h4>
    
    {data.map((item, index)=>{
       console.log(item)
     return( <div className='item-container' key={index}>
        <h2>{lang==="esp" ? item.title_esp : item.title_eng}</h2>
        <p>{lang==="esp" ? item.cat_esp : item.cat_eng}</p>

        <Image
          src={item.photo}
          alt={`frame of ${item.title_eng}`}
          width={500}
          height={500}
        />
      </div>)
    })}
    </div>
    
  )
}

export default Trabajos