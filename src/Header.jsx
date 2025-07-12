import React from "react";
import "./css/Header.css";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: props.loggedIn || false,
        };
    }

    componentDidMount() {
        console.log("Header component mounted");
    }

    handleAuthToggle = () => {
        this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));
    }

    render() {
        const { loggedIn } = this.state;

        return (
            <header>
                <div className="logo">
                    <img src={`${import.meta.env.BASE_URL}/icons8-student-male-48.png`} alt="Logo" />
                    <div>Student Profile Dashboard</div>
                </div>

                {loggedIn ? (
                    <div className="Logout">
                        <img src={`${import.meta.env.BASE_URL}/images.jfif`} alt="User Icon" />
                        <button onClick={this.handleAuthToggle}>Logout</button>
                    </div>
                ) : (
                    <div className="Login">
                        <img src={`${import.meta.env.BASE_URL}/icons8-profile-100.png`} alt="User Icon" />
                        <button onClick={this.handleAuthToggle}>Login</button>
                    </div>
                )}
            </header>
        );
    }
}

export default Header;
