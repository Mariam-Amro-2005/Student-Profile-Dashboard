import React from "react";
import StudentCard from "./StudentCard";
import "./css/Students.css"; 

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: props.students || [],
            selectedTrack: "All"
        };
    }

    componentDidMount() {
        console.log("StudentList component mounted");
    }

    handleTrackChange = (event) => {
        this.setState({ selectedTrack: event.target.value });
    };

    getUniqueTracks() {
        let tracks = this.state.students.map(student => (student.track || "N/A").trim());
        return ["All", ...Array.from(new Set(tracks))];
    }

    render() {
        let { students, selectedTrack } = this.state;
        let tracks = this.getUniqueTracks();
        let filteredStudents = selectedTrack === "All"
            ? students
            : students.filter(student => ((student.track || "N/A").trim().toLowerCase() === selectedTrack.trim().toLowerCase()));
        return (
            <div className="student-list-container">
            <div className="student-list-header">
                <div className="title">Student List</div>
                <div className="track-filter">
                    Track Filter: {" "}
                    <select value={selectedTrack} onChange={this.handleTrackChange}>
                        {tracks.map(track => (
                            <option key={track} value={track}>{track}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="student-list">
                {filteredStudents.map((student, index) => (
                    <StudentCard key={student.studentName || index} {...student} />
                ))}
            </div>
            </div>
            
        );
    }
}

export default StudentList;