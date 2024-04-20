import Gallery from "../components/Gallery";
import { ApiProvider } from "../context/ContextApi";
;


const Home = () => {



  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <ApiProvider>
      <Gallery />
      </ApiProvider>
    </div>
  );
};
export default Home;
