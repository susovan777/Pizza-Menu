import React from 'react';
import pizzaData from './data';
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
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All
        from our stone oven, all organic, all delicious.
      </p>
      <ul className='pizzas'>
        {
          pizzaData.map((pizza) => <Pizza
            // name={pizza.name}
            // ingrredients={pizza.ingredients}
            // photo={pizza.photoName}
            // price={pizza.price}
            pizza={pizza}
            key={pizza.name}
          />)
        }
      </ul>
      {/* <Pizza
        name='Pizza Margherita'
        ingrredients='Tomato and mozarella'
        photo='pizzas/margherita.jpg'
        price='10'
      /> */}
    </main>
  )
}

function Pizza(props) {
  // console.log(props.pizza);
  return (
    <li className='pizza'>
      <img src={props.pizza.photoName} alt={props.pizza.name} />
      <div >
        <h3>{props.pizza.name}</h3>
        <p>{props.pizza.ingredients}</p>
        {/* <span>₹{props.pizza.price}9</span> */}
        <span>{props.pizza.soldOut ? 'SOLD OUT' : props.pizza.price}</span>
      </div>
    </li>
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
      <h1>Fast Pizza Co.</h1>
    </header>
  )
}

function Footer() {
  const time = new Date().getHours();
  const open = 10;
  const close = 22;
  const isOpen = time >= open && time <= close;

  // console.log(time,isOpen);

  return (
    <footer className='footer'>
      <div className='order'>
        <p>We are currently {isOpen ? 'open' : 'close'}.</p>
        <button className='btn'>Order</button>
      </div>
    </footer>
  )
}


