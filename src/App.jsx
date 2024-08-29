import { useState } from "react";
import { shortList, longList, list } from "./data";
import Carousel from './Carousel'
import SlickCarousel from "./SlickCarousel";

const App = () => {
  const [people, setPeople] = useState(list)
  return (
    <main>
      <Carousel people={people}/>
      {/* <SlickCarousel/> */}
    </main>
  );
};
export default App;
