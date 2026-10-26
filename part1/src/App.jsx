const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  

  return (
    <div>
      <Header name={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>

    </div>

    
  )
}

const Header = (course) =>{

  return <div>
    <p>{course.name}</p>
  </div>
}


const Content = ({parts}) =>{

  const [p1,p2,p3] = parts;

  console.log(p1)
  console.log(p2)
  console.log(p3)

  return <div>
    <Part part={p1}/>
    <Part part={p2}/>
    <Part part={p3}/>

  </div>
}

const Part = ({part}) =>{


  const {name,exercises} = part
  
  return <div>
    <p>{name} {exercises}</p>
  </div>
}



const Total = ({ parts }) => {
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

export default App