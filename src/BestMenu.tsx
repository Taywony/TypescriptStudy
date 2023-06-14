import React from 'react'
import { Menu } from './model/restaurant'

interface OwnProps extends Menu {
  showBestMenu(name:string):string
}

const BestMenu:React.FC<OwnProps> = ({name, price, showBestMenu}) => {
  return (
    <div>
      <h1>베스트메뉴</h1>
      <p>{name}</p>
      <p>가격 : {price.toLocaleString()}</p>
    </div>
  )
}

export default BestMenu