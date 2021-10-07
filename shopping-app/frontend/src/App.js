import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1> Kuroneko Bookstore Ecommerce Website</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
