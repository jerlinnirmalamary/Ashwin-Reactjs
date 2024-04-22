import { useContext } from "react";
import {AppContext} from '../App';

const Secand=()=>{
    const {name}=useContext(AppContext);
  return (
    <>
     Name: {name}
    </>
  )
}

export default Secand;