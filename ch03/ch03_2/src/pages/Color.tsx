import React from 'react'

type ColorProps = {}

const Color: React.FC<ColorProps> = ({}) => {
  //색상에 관련된 tailwindcss
  //무채색 : 접두사-색상명/불투명도
  //유채색 : 접수사-색상명-채도/불투명도  (채도 높을수록 어두움)
  return (
    <div className="p-4 bg-sky-700">
      <p className="w-full p-4 text-3xl text-white">Color</p>
      <div className="mb-4">
        <p className="text-white">Email Address</p>
        <input type="email" className="text-gray-900 border-sky-200 border-4" />
        <p className="text-rose-500">This field is required</p>
      </div>
    </div>
  )
}

export default Color
