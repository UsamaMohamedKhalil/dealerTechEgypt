import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-28'>
         <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>
      </div>
    </div>
  )
}

export default HireMe
