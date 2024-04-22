import { useContext } from "react";
import {AppContext} from '../App';

const First=()=>{
    const {setName}=useContext(AppContext);
  return (
    <>
        
        <input type="text" placeholder='Enter the text' 
        onChange={e=>setName(e.target.value)} />
    </>
  )
}

export default First;