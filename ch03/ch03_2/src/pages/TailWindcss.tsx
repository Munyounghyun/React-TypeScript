import React from 'react'
import * as D from '../data'
type TailWindcssProps = {}

const TailWindcss: React.FC<TailWindcssProps> = ({}) => {
  return (
    <div className="bg-black/40">
      <p className="w-full p-4 text-3xl text-white">Tailwindcss</p>
      <p className="italic text-gray-50 line-clamp-3">{D.randomParagraphs(10)}</p>
      <button className="btn btn-primary" style={{textTransform: 'none'}}>
        Button
      </button>
    </div>
  )
}

export default TailWindcss
