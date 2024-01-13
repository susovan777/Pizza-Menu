
export default function App() {

  return (
    <div>
      <Header />
      <h1>Hello World!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
      <Footer />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" />
      <h2>Pizza</h2>
    </div>
  )
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>
}

function Footer() {
return <footer>{new Date().toLocaleTimeString()}. We are currently open.</footer>
}

function Menu() {

}
