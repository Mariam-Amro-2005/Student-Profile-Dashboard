import React from "react";

class StudentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: props.studentName || "N/A",
            university: props.university || "N/A",
            track: props.track || "N/A",
            grade: props.grade || "N/A",
            likes: props.likes || 0,
            liked: props.liked || false,
            profilePicture: props.profilePicture || "/icons8-profile-50.png",
        };
    }

    componentDidMount() {
        console.log("StudentCard component mounted");
    }

    handleLikeClick = () => {
        this.setState(prevState => ({
            liked: !prevState.liked,
            likes: prevState.liked ? prevState.likes - 1 : prevState.likes + 1
        }));
    }

    render() {
        return (
            <div className="student-card">
                <div className="student-pic">
                    <img src={this.state.profilePicture} alt="Student" />
                </div>

                <div className="student-info"> 
                    <div className="student-name">{this.state.studentName}</div>
                    <div className="student-info-wrapper">
                        <div className="student-info-left">
                            <div>University: {this.state.university}</div>
                            <div>Track: {this.state.track}</div>
                            <div>Grade: {this.state.grade}%</div>
                        </div>
                        
                        <div className="student-info-right">
                            <div className="likes">
                                Likes: {this.state.likes}
                                <img 
                                    src={this.state.liked ? "/icons8-heart-filled-50.png" : "/icons8-heart-50.png"} 
                                    alt="Like Icon" 
                                    onClick={this.handleLikeClick} 
                                    style={{ cursor: 'pointer', marginLeft: '8px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentCard;
