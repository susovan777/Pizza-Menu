
export default function App() {

  return (
    <div>
      <h1>Hello World! This is cloned</h1>
      <Pizza />
      <Pizza />
      <Pizza />
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
