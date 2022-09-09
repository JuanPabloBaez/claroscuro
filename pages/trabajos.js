import React, {useEffect} from 'react';
import Image from 'next/future/image';
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
    <>
    <h4 className='works_sub'>{lang==="esp" ? "Selección de trabajos" : "Selected works"}</h4>
    <div className='works'>
    {data.map((item, index)=>{
      return( 
      <div className='item-container' key={index}>
       <Image
          src={item.photoBW}
          alt={`frame of ${item.title_eng}`}
          width={350}
          height={350}
          className="work_foto"
          id="fotoBW"
        />
        <Image
          src={item.photo}
          alt={`frame of ${item.title_eng}`}
          width={350}
          height={350}
          className="work_foto"
        />
        <h2>{lang==="esp" ? item.title_esp : item.title_eng}</h2>
        <span><h3>{lang==="esp" ? item.cat_esp : item.cat_eng}</h3><h4>{item.prod_year}</h4></span>
        <p>{lang==="esp" ? item.info_esp : item.info_eng}</p>
       { item.link && <a className="work_link" href={item.link} target="_blank" rel="noopener noreferrer"><Image
          src="/play.svg"
          alt={`watch ${item.title_eng}`}
          width={100}
          height={100}
        /></a> }
         
      </div>)
    })}
    </div>
    </>
  )
}

export default Trabajos