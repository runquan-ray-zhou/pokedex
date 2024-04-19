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

  function handleRegionChange(e) {
    setStudentArray(e.target.value === "All Pokemon" ? [...dataState] : dataState.filter(ele => ele.region === e.target.value))
    setCohort(e.target.value)
  }
  
  function findPokemon(e) {
    e.preventDefault()
    setStudentArray(e.target.value === "All Pokemon" ? [...dataState] : dataState.filter(ele => ele.names.preferredName.toLowerCase() === pokemon.toLowerCase()))
    setCohort(pokemon[0].toUpperCase() + pokemon.slice(1))
    setPokemon("")
  }
  
  let cohortList = []

  for (let student of data) {
    for (let type of student.cohort.cohortCode) {
      if(!cohortList.includes(type)) {
        cohortList.push(type)
      }
    }
  }

  let regionList = []

  for (let student of data) {
      if(!regionList.includes(student.region)) {
        regionList.push(student.region)
      }
    }
  
  let regionSelection = ["All Pokemon"].concat(regionList)
  
  let cohortSelection = ["All Pokemon"].concat(cohortList)

  return (
    <div className="App">
      <Header />
      <main>
      <CohortList cohortSelection={cohortSelection} handleRegionChange={handleRegionChange} handleCohortChange={handleCohortChange} regionSelection={regionSelection}/>
      <StudentList cohort={cohort} pokemon={pokemon} setPokemon={setPokemon} findPokemon={findPokemon} studentArray={studentArray} setDataState={setDataState} dataState={dataState} />  
      </main>
    </div>
  );
}

export default App;
