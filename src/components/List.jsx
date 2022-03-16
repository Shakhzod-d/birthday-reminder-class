// import React from 'react'

const List = ({ people }) => {
  //   console.log(people); arr.map(), empty fragment
  return (
    <div>
      {people.map((person, index) => {
        const { id, name, age, image } = person
        // console.log(person)
        return (
          <article key={id} className="person">
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
export default List
