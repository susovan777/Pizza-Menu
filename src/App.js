import React from 'react';
import { ReactDOM } from 'react';
import './index.css'

export default function App() {

  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza
        name='Pizza Spinaci'
        ingrredients='Tomato, mozarella, spinach, and ricotta cheese'
        photo='pizzas/spinaci.jpg'
        price='12'
      />
      <Pizza
        name='Pizza Margherita'
        ingrredients='Tomato and mozarella'
        photo='pizzas/margherita.jpg'
        price='10'
      />
    </main>
  )
}

function Pizza(props) {
  console.log(props);
  return (
    <div className='pizza'>
      <img src={props.photo} alt={props.name} />
      <div >
        <h3>{props.name}</h3>
        <p>{props.ingrredients}</p>
        <span>{props.price + 9}</span>
      </div>
    </div>
  )
}

function Header() {
  // const style = {
  //   color: 'red',
  //   fontSize: '48px',
  //   textTransform: 'uppercase'
  // }

  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Footer() {
  const time = new Date().getHours();
  const open = 10;
  const close = 22;
  const isOpen = time >= open && time <= close;

  // console.log(isOpen);

  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()}.
      We are currently open.
    </footer>
  )
}


