import { useState } from "react"

import StudentInfo from "/src/components/StudentInfo.jsx"

export default function StudentList({ handleTextChange, pokemon, findPokemon, studentArray, cohort, setDataState, dataState}) {

    return (
        <div>
            <h2>{cohort}</h2>
            <p>Total Pokemon: <span className="numberOfStudents">{studentArray.length}</span></p>
            <form onSubmit={findPokemon} className="pokemonSearch">
                <label><input onChange={handleTextChange} value={pokemon} type="text"/></label>
            <input type="submit" value="Search Pokemon" />
            </form>
            <ul>
                {studentArray.map((student) => <StudentInfo key={student.id} student={student} setDataState={setDataState} dataState={dataState}/>)}
            </ul>
        </div>
    )
}