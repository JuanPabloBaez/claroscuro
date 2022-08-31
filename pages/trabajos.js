import React, {useEffect} from 'react';
import useSWR from 'swr';
import {useRecoilState} from 'recoil';
import {themeState} from './index.js';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Trabajos() {
    const [,setLight] = useRecoilState(themeState);
    const { data, error } = useSWR('/api/hello', fetcher);

    console.log(data)
    useEffect(()=>{
        setLight(false)
    }, [setLight]);    

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

  return (
    <div>Trabajos</div>
  )
}

export default Trabajos