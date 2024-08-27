import { useState } from "react";
import { shortList, longList, list } from "./data";
import Carousel from './Carousel'

const App = () => {
  const [people, setPeople] = useState(list)
  return (
    <main>
      <Carousel people={people}/>
    </main>
  );
};
export default App;
