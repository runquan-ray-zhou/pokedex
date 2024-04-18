import "/src/components/StudentInfo.css"
import StudentDetails from "/src/components/StudentDetails.jsx"


export default function StudentInfo({student, setDataState, dataState}) {
   
    let studentFullName = `${student.names.preferredName}`

    let studentBirthDay = new Date(student.dob).toLocaleString("default", {month:"long", day: "numeric", year: "numeric"})

    return (
        <div className="studentInfo__card">
            <div className="studentInfo__card-top">
                <div className="studentInfo__card-img">
                    <img src={student.profilePhoto} alt={student.names.preferredName} />
                </div>
                <div className="studentInfo__card-info">
                    <div className="studentInfo__card-fullName">{studentFullName}</div>
                    <div className="studentInfo__card-email">Region: {student.region}</div>
                    <div className="studentInfo__card-birthday"><span className="birthday">Birthday:</span> {studentBirthDay}</div>
                </div>
                <div className="studentInfo__card-ontrack-status" style={{display: !student.certifications.resume  || !student.certifications.linkedin || !student.certifications.mockInterview || !student.certifications.github? "none" : "none"}}>
                    <div>On Track to Graduate</div>
                </div>
            </div>
            <div className="studentInfo__card-bottom">
            <StudentDetails student={student} setDataState={setDataState} dataState={dataState}/>
            </div>
        </div>
    )
}