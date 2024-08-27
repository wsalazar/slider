import { useEffect, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Carousel = ({people}) => {
  const [currentPerson, setCurrentPerson] = useState(0)

  useEffect(() => {
      let interval = setInterval(() => {
        next()
      }, 1000)
      return () => {
        clearInterval(interval)
      }  },[currentPerson])
  const previous = () => {
      setCurrentPerson((currentPerson) => {
        let previousPerson = (currentPerson  % people.length) - 1
        if (previousPerson < 0) {
          return people.length - 1
        }
        return previousPerson
    })
  }

  const next = () => {
    setCurrentPerson((currentPerson) => {
      if ((currentPerson + 1) > people.length) {
        return 0
      }
    
     const nextPerson = (currentPerson + 1) % people.length
     return nextPerson
    })
  }
  return (
      <section className="slider-container" style={{"position":"relative"}}>
        {people.map((person, personIndex) => {
          return (
          <article 
          key={person.id} 
          className="slide"
          style={{
            transform:`translateX(${100 * (personIndex - currentPerson)}%`,
            opacity: personIndex === currentPerson ? 1: 0,
            visibility: personIndex === currentPerson ? 'visible' : 'hidden'
          }}
          >
            <img src={person.image} width="50px" height="50px" alt={person.name}/>
            <h3>{person.title}</h3>
            <h4>{person.name}</h4>
            <p>{person.quote}</p>
          </article>
          )
        })}
      <button style={{"position":"absolute"}} className="prev" onClick={() => previous()}>
        <FiChevronLeft />
      </button>
      <button style={{"position":"absolute"}} className="next" onClick={() => next()}>
        <FiChevronRight />
      </button>      
      </section>
  )
}
export default Carousel