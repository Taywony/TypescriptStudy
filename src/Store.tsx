import React from 'react'
import { Restaurant } from './model/restaurant'

interface OwnProps {
  info:Restaurant,
  address(address:any):void
}

const Store:React.FC<OwnProps> = ({info}) => {
  return (
    <div>{info.name}</div>
  )
}

export default Store