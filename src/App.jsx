import ButtonComponent from "./ButtonComponent";
import Card from "./Card";
import MyComponent from "./MyComponent";
import Title from "./Title";

// root component
function App() {
  const name = "Hari";

  console.log(name);

  return (
    <>
      <section>
        <MyComponent
          label="Hello from props"
          info="Lets learn about props"
          title="Hello from title"
          subtitle="asdf"
        />
        <MyComponent label="THis is a label" title={"title from second call"} />

        <Title label="Label of Title" />
        <ButtonComponent />

        <Card name={"Product 1"} category={"Category 1"} price={2134} />
        <Card name={"Product 2"} category={"Category 2"} price={809} />

        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          deserunt commodi nostrum natus quis qui possimus at ad mollitia
          tempora.
        </p>
      </section>

      <section>hello</section>
    </>
  );
}

export default App;
