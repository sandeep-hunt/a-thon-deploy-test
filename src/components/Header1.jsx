import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/logo.svg';
import Modal from 'react-bootstrap/Modal';
import Ashva from '../assets/images/rovers/header/ashva_header.png'
import Ashva4s from '../assets/images/rovers/header/ashva4s_header.png'
import Ashvaut from '../assets/images/rovers/header/ashvaut_header.png'
import Ashva6x6 from '../assets/images/rovers/header/ashva6x6_header.png'
import { Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header1({caseType}) {

    const getBuildProductLink = (caseType) => {
        switch (caseType) {
            case '4x4':
                return 'https://forms.zohopublic.in/adminathon/form/AshvaProductConfiguration2/formperma/tHWubqs7Nab5mg3aHMBOHQkRCLGyDLaM2WktTDNXNds?model=Ashva%204X4';
            case '6x6':
                return 'https://forms.zohopublic.in/adminathon/form/AshvaProductConfiguration2/formperma/tHWubqs7Nab5mg3aHMBOHQkRCLGyDLaM2WktTDNXNds?model=Ashva%206X6';
            case 'ut':
                return 'https://forms.zohopublic.in/adminathon/form/AshvaProductConfiguration2/formperma/tHWubqs7Nab5mg3aHMBOHQkRCLGyDLaM2WktTDNXNds?model=Ashva%20UT';
            case '4s':
                return 'https://forms.zohopublic.in/adminathon/form/AshvaProductConfiguration2/formperma/tHWubqs7Nab5mg3aHMBOHQkRCLGyDLaM2WktTDNXNds?model=Ashva%204s';
            default:
                return 'https://forms.zohopublic.in/adminathon/form/AshvaProductConfiguration2/formperma/tHWubqs7Nab5mg3aHMBOHQkRCLGyDLaM2WktTDNXNds'; // Default link if no case matches
        }
    };

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
                <Navbar bg="black" key={expand} expand={expand} className="sticky-top shadow-sm">
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
                                    <Link to="/service" onClick={handleClose}>Service</Link>
                                    <Link to="/adbhut" onClick={handleClose}>Agri Robotics</Link>
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
                                    <Link
                                        to={getBuildProductLink(caseType)}
                                        className="expLinkHead"
                                        target="_blank"
                                    >
                                        Build product
                                    </Link>
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
                            <Link to="/ashva_4x4" className='headerMdlLink'><h5>ASHVA 4x4</h5></Link>
                            <Link to="/ashva_4x4"><img src={Ashva} className='img-fluid' alt="ashva 4x4" /></Link>
                        </div>
                        <div className="col-sm-12 col-md-3 header-content">
                            <Link to="/ashva_6x6" className='headerMdlLink'><h5>ASHVA 6x6</h5></Link>
                            <Link to="/ashva_6x6"><img src={Ashva6x6} className='img-fluid' alt="ashva 6x6" /></Link>
                        </div>
                        <div className="col-sm-12 col-md-3 header-content">
                            <Link to="/ashva_4s" className='headerMdlLink'><h5>ASHVA 4S</h5></Link>
                            <Link to="/ashva_4s"><img src={Ashva4s} className='img-fluid' alt="ashva 4s" /></Link>
                        </div>
                        <div className="col-sm-12 col-md-3 header-content">
                            <Link to="/ashva_ut" className='headerMdlLink'><h5>ASHVA UT</h5></Link>
                            <Link to="/ashva_ut"><img src={Ashvaut} className='img-fluid' alt="ashva ut" /></Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default Header1;