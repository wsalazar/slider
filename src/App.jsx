import { useState } from "react";
import { shortList, longList, list } from "./data";

const App = () => {
  const [people, setPeople] = useState(list)
  const [activeId, setActiveId] = useState(list[0].id)
  const [currentPerson, setCurrentPerson] = useState(0)
  const [person, setPerson] = useState(list[currentPerson])

  const previous = () => {
    // setPeople((person) => {
    //   const previousPersonId = person.id - 1
    //   if (previousPersonId < 1) {
    //     previousPersonId = people.length - 1
    //     return people[previousPersonId]
    //   }
    //   return people[previousPersonId]
    // })
  }

  const next = () => {
    setCurrentPerson((currentPerson) => {
      let nextPerson = currentPerson + 1;
      return nextPerson
    })
    setPerson(list[currentPerson])
    // setPeople((person)=>{
    //   let nextPersonId = person.id + 1
    //   console.log(nextPersonId)
    //   if (nextPersonId > list.length) {
    //     nextPersonId = 0
    //     return list[nextPersonId]
    //   }
    //   console.log(nextPersonId-1, list[nextPersonId-1])
    //   return list[nextPersonId-1]
    // })
  }

  return (
    <main>
      <button style={{"position":"absolute"}} onClick={() => previous()}>Previous</button>
      <div className="container" style={{"position":"relative"}}>
          {/* <div key={person.id}>
            <img src={person.image} width="50px" height="50px" alt={person.name}/>
            <p>{person.name}</p>
            <p>{person.quote}</p>
            <p>{person.title}</p>
          </div> */}
         <div className={`"slide-${currentPerson}"`}>
        {people.map((person) => {
          return (
          <div key={person.id}>
            <img src={person.image} width="50px" height="50px" alt={person.name}/>
            <p>{person.name}</p>
            <p>{person.quote}</p>
            <p>{person.title}</p>
          </div>
          )
        })}
        </div> 
      </div>
      <button style={{"position":"absolute"}} onClick={() => next()}>Next</button>
    </main>
  );
};
export default App;
