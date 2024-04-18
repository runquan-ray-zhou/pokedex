import "/src/components/CohortList.css"

export default function CohortList({cohortSelection, handleCohortChange}) {

    return (
        <div className="cohortList__card">
            <h2>Choose Pokemon by Type </h2>
            {cohortSelection.map((cohort,i) => <li key={i}><input type="button" onClick={handleCohortChange} value={cohort} /></li>)}
        </div>
    )
}