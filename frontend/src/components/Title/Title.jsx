import React from 'react'
import { FaRegStar } from 'react-icons/fa6'

const Title = ({title}) => {
  return (
    <div>
        <h2 className="text-4xl text-gray-500 mb-4">{title}</h2>
            <div className="flex justify-center items-center gap-4 mb-4">
                <div className="h-px w-24 bg-gradient-to-r from-transparent  to-white"></div>
                <FaRegStar />
            <div className="h-px w-24 bg-gradient-to-r from-white  to-transparent"></div>
        </div>
    </div>
  )
}

export default Title
