import React from 'react'

const username = ({params}:any) => {
  return (
    <div>{params.username}</div>
  )
}

export default username