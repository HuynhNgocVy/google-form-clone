import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";


function App() {
  return (
    <div className="App w-screen h-screen" style={{ background: "#ede7f6" }}>
      <Header></Header>
      <Container />
    </div>
  );
}

export default App;
