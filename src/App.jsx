import { useState } from "react";
import Header from "./components/Header";
import CohortList from "./components/CohortList";
import StudentList from "./components/StudentList";
import data from "./data/data.json"
import "./App.css"

function App() {

  const [dataState, setDataState] = useState(data)

  const [studentArray, setStudentArray] = useState(dataState)

  const [cohort, setCohort] = useState("All Pokemon")

  const [pokemon, setPokemon] = useState("")

  function handleCohortChange(e) {
    setStudentArray(e.target.value === "All Pokemon" ? [...dataState] : dataState.filter(ele => ele.cohort.cohortCode.includes(e.target.value)))
    setCohort(e.target.value)
  }
  
  function findPokemon(e) {
    e.preventDefault()
    setStudentArray(e.target.value === "All Pokemon" ? [...dataState] : dataState.filter(ele => ele.names.preferredName.toLowerCase() === pokemon.toLowerCase()))
  }
  
  let cohortList = []

  for (let student of data) {
    for (let type of student.cohort.cohortCode) {
      if(!cohortList.includes(type)) {
        cohortList.push(type)
      }
    }
  }
  
  let cohortSelection = ["All Pokemon"].concat(cohortList)

  return (
    <div className="App">
      <Header />
      <main>
      <CohortList cohortSelection={cohortSelection} handleCohortChange={handleCohortChange}/>
      <StudentList cohort={cohort} pokemon={pokemon} setPokemon={setPokemon} findPokemon={findPokemon} studentArray={studentArray} setDataState={setDataState} dataState={dataState} />  
      </main>
    </div>
  );
}

export default App;
