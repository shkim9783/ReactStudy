import logo from "./logo.svg";
import "./App.css";

/* 
// 구문오류 발생
// 해당함수 사용하려면 javascript:return false; 사용해야하는데 리액트에서는 권장되지 않음
function OnChangeMode(event){
  // event 객체를 못 찾아오는듯
  console.log(event);
  // event.preventDefault();
  alert("Header!");
}  
*/

function Header(props) {
  return (
    <header>
      <h1>
        <a href={props.href} onClick={(event)=>{
            event.preventDefault();
            // 상위에서 정의된 함수를 내부에서 실행한다.
            props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const navList = props.topices.map((list, index) => (
    <li key={index}>
      <a href={'/read/'+index} onClick={(event)=>{
            event.preventDefault();
            //props.onChangeMode();
            //alert(list.title);
            
      }}>{list.title}</a>
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
      <Header title="WEB" href="/" onChangeMode={()=>{
        alert("Header!");
      }}></Header>

      <Nav topices={topices} onChangeMode={()=>{
        //alert(topices);
      }}></Nav>

      <Section title="Welcome" content="Hello, WEB"></Section>
    </div>
  );
}

export default App;
