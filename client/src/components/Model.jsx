import React, { useContext } from 'react'
import { createPortal } from "react-dom";
import space from './store/context';

import Form from './Form';

const Model = () => {

    const {display,handelclick} =useContext(space);
    if(!display){
        return null;
    }
    return createPortal(
        <div onClick={handelclick} className=' flex fixed justify-center items-center  top-0 left-0 bg-opacity-60 w-screen h-screen bg-zinc-900 z-10' >
          <div className=' z-20' onClick={(e) => e.stopPropagation()}>
            <Form/>
          </div>
        </div>,
        document.body
      );
}

export default Model