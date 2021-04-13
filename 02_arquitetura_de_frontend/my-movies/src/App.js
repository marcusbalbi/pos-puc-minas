import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <MoviesList movies={[]} />
      </section>
    </div>
  );
}

export default App;
