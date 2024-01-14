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

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h3>Pizza</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
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

  console.log(isOpen);

  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()}. 
      We are currently open.
    </footer>
  )
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  )
}
