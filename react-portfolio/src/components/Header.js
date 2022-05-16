import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/esm/Nav";
import {Link} from "react-router-dom";
// Link, Routes, Route

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Lawrence Blundo",
            headerLinks: [
                {title: "About", path: "/about"},
                {title: "Portfolio", path: "/portfolio"},
                {title: "Contact", path: "/contact"},
                {title: "Resume", path: "/resume"},
            ],
            about: {title: "About Me"},
            portfolio: {title: "Portfolio"},
            contact: {title: "Contact"},
            resume: {title: "Resume"}
        }
    }

    render() {
        return (
        
            <Container className="p-0" fluid={true}>
                <Navbar className="border-bottom">
                    <Navbar.Brand>Lawrence Blundo</Navbar.Brand>

                    <Navbar.Toggle aria-controls="nav-toggle" bg="transparent" expand="lg"/>
                    <Navbar.Collapse id="nav-toggle">
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default Header;

// <Router></Router>




// import React, { useState } from "react";

// import Nav from "./Navigation";
// import About from "../pages/About";
// import Portfolio from "../pages/Portfolio";
// import Contact from "../pages/Contact";
// import Resume from "../pages/Resume";

// export default function Header() {
//     const [currentPage, setCurrentPage] = useState("About");

//     // Method for checking value of currentPage to render
//     const renderPage = () => {
//         if (currentPage === "About") {
//             return <About />;
//         }
//         if (currentPage === "Portfolio") {
//             return <Portfolio />;
//         }
//         if (currentPage === "Contact") {
//             return <Contact />;
//         }
//         if (currentPage === "Resume") {
//             return <Resume />;
//         }
//         return <About />;
//     };

//     const handlePageChange = (page) => setCurrentPage(page);


//     return (
//         <div>
//             <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//             {renderPage()}
//         </div>
//     );
// };