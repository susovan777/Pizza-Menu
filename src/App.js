
export default function App() {

  return (
    <div>
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
      <h2>Pizza</h2>
    </div>
  )
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Footer() {
  const time = new Date().getHours();
  const open = 10;
  const close = 22;
  const isOpen = time >= open && time <= close;

  console.log(isOpen);

  return <footer>{new Date().toLocaleTimeString()}. We are currently open.</footer>
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  )
}
