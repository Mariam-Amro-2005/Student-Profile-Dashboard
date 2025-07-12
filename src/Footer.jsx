import React from "react";
import "./css/Footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footerText: "© 2025 Student Profile Dashboard",
        };
    }

    componentDidMount() {
        console.log("Footer component mounted");
    }

    render() {
        return (
            <footer>
                <div className="footer-links">
                    <ul>
                        <li><div><img src={`${import.meta.env.BASE_URL}/icons8-privacy-policy-50.png`} alt="Privacy Icon" /><a href="/privacy">Privacy Policy</a></div></li>
                        <li><div><img src={`${import.meta.env.BASE_URL}/icons8-terms-and-conditions-50.png`} alt="Terms Icon" /><a href="/terms">Terms of Service</a></div></li>
                        <li><div><img src={`${import.meta.env.BASE_URL}/icons8-letter-50.png`} alt="Contact Icon" /><a href="/contact">Contact Us</a></div></li>
                    </ul>
                </div>
                <div className="footer-content-wrapper">
                    <div className="footer-logo">
                        <img src={`${import.meta.env.BASE_URL}/icons8-student-male-48.png`} alt="Logo" />
                    </div>
                    
                    <div className="footer-content">
                        {this.state.footerText}
                    </div>
                </div>

                <div className="footer-social-media">
                    <div className="footer-social-media-title">Follow Us</div>
                    <ul>
                        <li><a href="/facebook"><img src={`${import.meta.env.BASE_URL}/icons8-facebook-50.png`} alt="Facebook Icon" /></a></li>
                        <li><a href="/twitter"><img src={`${import.meta.env.BASE_URL}/icons8-twitter-bird-50.png`} alt="Twitter Icon" /></a></li>
                        <li><a href="/linkedin"><img src={`${import.meta.env.BASE_URL}/icons8-linkedin-50.png`} alt="LinkedIn Icon" /></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;