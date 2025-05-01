"use client"

import { useState } from 'react';
import { IconX } from './icons';

const Banner = ({ children, className }) => {
  const [show, setShow] = useState(true)


  return (show &&
    <div className={`py-2.5 px-4 bg-primary text-sm/6 text-black flex flex-wrap items-center justify-center ${className ?? ''}`}>
      {children}
      <button onClick={() => setShow(false)} type="button" className="-m-3 p-3 absolute right-0 mr-4 focus-visible:outline-offset-[-4px]">
        <span className="sr-only">Dismiss</span>
        <IconX />
      </button>
    </div>

  )
}

export default Banner
