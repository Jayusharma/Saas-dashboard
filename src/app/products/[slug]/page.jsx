import React from 'react'

const page = ({params}) => {
    const {slug} = params;
  return (
    <div>product : {slug}</div>
  )
}

export default page