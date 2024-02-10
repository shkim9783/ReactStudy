import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  return (
    <h1>
      <a href={props.href}>{props.title}</a>
    </h1>
  );
}

function Nav(props) {
  const navList = props.topices.map((list, index) => (
    <li key={index}>
      <a herf="">{list.title}</a>
    </li>
  ));

  return (
    <nav>
      <ol>{navList}</ol>
    </nav>
  );
}

function Section(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      <span>{props.content}</span>
    </section>
  );
}

function App() {
  const topices = [
    { title: "html", content: "html is..." },
    { title: "css", content: "css is..." },
    { title: "javascript", content: "javascript is..." },
  ];
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <Header title="WEB" href="/"></Header>

      <Nav topices={topices}></Nav>

      <Section title="Welcome" content="Hello, WEB"></Section>
    </div>
  );
}

export default App;
