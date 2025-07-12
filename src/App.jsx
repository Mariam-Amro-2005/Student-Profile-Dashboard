import React from 'react'
import  Header from './Header.jsx'
import Footer from './Footer.jsx'
import StudentList from './StudentList.jsx';


class App extends React.Component{
    render(){
        let students = [
            { studentName: "John Doe", university: "Harvard", track: "Web Development", grade: 85, likes: 10 },
            { studentName: "Jane Smith", university: "MIT", track: "Data Science", grade: 90, likes: 5 },
            { studentName: "Alice Johnson", university: "Stanford", track: "Machine Learning", grade: 88, likes: 8, profilePicture: `${import.meta.env.BASE_URL}/images.jfif`, liked: true },
            { studentName: "Bob Brown", university: "Yale", track: "Cybersecurity", grade: 80, likes: 3, liked: true },
            { studentName: "Emily Clark", university: "Princeton", track: "Web Development", grade: 92, likes: 12 },
            { studentName: "Michael Lee", university: "Columbia", track: "Data Science", grade: 87, likes: 7 },
            { studentName: "Sophia Turner", university: "Berkeley", track: "Machine Learning", grade: 91, likes: 9 },
            { studentName: "David Kim", university: "UCLA", track: "Cybersecurity", grade: 83, likes: 4 },
            { studentName: "Olivia Green", university: "Oxford", track: "Web Development", grade: 89, likes: 6 },
            { studentName: "Liam White", university: "Cambridge", track: "Data Science", grade: 86, likes: 8 },
            { studentName: "Ava Black", university: "Imperial College", track: "Machine Learning", grade: 93, likes: 11 },
            { studentName: "Noah Brown", university: "Toronto", track: "Cybersecurity", grade: 82, likes: 2 }
        ];
        return (
            <>
            <Header />
            <StudentList students={students} />
            <Footer />
            </>
        )
    }
}

export default App;
