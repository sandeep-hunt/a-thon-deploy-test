import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo.svg';
import Modal from 'react-bootstrap/Modal';
import Ashva from '../assets/images/rovers/header/ashva_header.png'
import Adbhut from '../assets/images/rovers/header/adbhut_header.png'
import Arav from '../assets/images/rovers/header/arav_header.png'
import Ashva6x6 from '../assets/images/rovers/header/ashva6x6_header.png'
import { Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header1() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const handleCloseM = () => setMenuOpen(false)
    const downloadFile = () => {
        // The file path is relative to the public folder in your React project
        const filePath = '/a-thon_media_kit.zip';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'a-thon_media_kit.zip'; // Specify the file name you want to use for download
        link.click();
        setMenuOpen(false)
    };

    return (
        <React.Fragment>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-white shadow-sm sticky-top">
                    <Container fluid className='headPadng'>
                        <Navbar.Brand><Link to="/"><img src={Logo} width="150" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={toggleMenu} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            show={menuOpen}
                            placement="end"
                            onHide={handleCloseM}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img src={Logo} className='img-fluid' />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link onClick={handleShow}>Products</Link>
                                    <NavDropdown
                                        title="Services"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item as={Link} to="/parts_services" onClick={handleClose}>Parts & Services</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="https://www.serviceplug.in/" target='_blank' onClick={handleClose}>Service Plug</NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to="/contact" onClick={handleCloseM}>Agri Robotics</Link>
                                    <NavDropdown
                                        title="About us"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item as={Link} to="/our-story" onClick={handleClose}>Our Story</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/team" onClick={handleClose}>Team & Facilities</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="https://forms.gle/A85jVb8Cg975hjhZA" target='_blank' onClick={handleClose}>Join Our Team</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} onClick={downloadFile}>Our Media Kit</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/contact" onClick={handleClose}>Contact</NavDropdown.Item>
                                    </NavDropdown>
                                    <Link to="https://forms.gle/WMC6rEwevCAYfse57" className='expLinkHead' target='_blank'>Configure products</Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

            <Modal className='heroMdl' size="xl" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 header-content">
                            <Link to="/ashva" className='headerMdlLink'><h5>ASHVA 4x4</h5></Link>
                            <Link to="/ashva"><img src={Ashva} className='img-fluid' alt="ashva" /></Link>
                        </div>
                        <div className="col-sm-12 col-md-3 header-content">
                            <Link to="/ashva_6x6" className='headerMdlLink'><h5>ASHVA 6x6</h5></Link>
                            <Link to="/ashva_6x6"><img src={Ashva6x6} className='img-fluid' alt="adbhut" /></Link>
                        </div>
                        <div className="col-sm-12 col-md-3 header-content">
                            <Link to="/adbhut" className='headerMdlLink'><h5>ADBHUTBOT 6X6</h5></Link>
                            <Link to="/adbhut"><img src={Adbhut} className='img-fluid' alt="adbhut" /></Link>
                        </div>
                        <div className="col-sm-12 col-md-3 header-content">
                            <Link to="/arav" className='headerMdlLink'><h5>ARAV 4x4</h5></Link>
                            <Link to="/arav"><img src={Arav} className='img-fluid' alt="arav" /></Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default Header1;