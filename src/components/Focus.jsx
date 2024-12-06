import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AshvaFocus from '../assets/videos/focus.mp4';
import madeIndia from '../assets/images/misc/made_in_india.png';
import { Player, ControlBar } from 'video-react';

const Focus = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="focus-container">
                    <Row>
                        <Col xs={12}>
                            <Player src={AshvaFocus} autoPlay loop muted>
                                <ControlBar disableCompletely={true} />
                            </Player>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Focus