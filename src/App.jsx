import ButtonComponent from "./ButtonComponent";

// root component
function App() {
  const name = "Hari";

  console.log(name);

  return (
    <>
      <section>
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          deserunt commodi nostrum natus quis qui possimus at ad mollitia
          tempora.
        </p>

        <ButtonComponent />
      </section>

      <section>hello</section>
    </>
  );
}

export default App;
