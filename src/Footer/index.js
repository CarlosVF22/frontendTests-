import React from "react";
import './footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {
    const footerItems = props.footerItems;
    return (
        <footer>
            <Row className="footerSection">
                {footerItems.map(item => (
                    <Col xs={2} >
                        <span>{item}</span>
                    </Col>
                ))}
            </Row>
        </footer>
    );
}

export {Footer};