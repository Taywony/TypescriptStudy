import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Restaurant } from './model/restaurant';

let data:Restaurant = {
  name:'tays food',
  category:'Korean Chinese Cuisine',
  address:'서울역 패스트파이브 6층',
  menu : [
    { id: 1, list: '짜장면', price: 5000 },
    { id: 2, list: '짬뽕', price: 6000 },
    { id: 3, list: '볶음밥', price: 6000 },
    { id: 4, list: '탕수육', price: 12000 },
    { id: 5, list: '어향가지', price: 25000 },
    { id: 6, list: '양장피', price: 22000 }
  ]
}
const App:React.FC = () => {
  const [myrestaurant,setMyrestaurant] = useState<Restaurant>(data)

  const changeAddress = (newAddress:any) => {
    setMyrestaurant((prev) => ({...myrestaurant,address:newAddress}))
  }

  return (
    <div className="App">
      <Store info={myrestaurant} />
    </div>
  );
}

export default App;
