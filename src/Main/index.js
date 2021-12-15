import React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
// import Card from 'react-bootstrap/Card';
import './main.css';
// import {data} from './../zapato';

function Main(props) {
    const firstGridSrc = props.firstGridSrc;
    // const json = props.json;
    // const genericalpath = './../image/';

    return (
        <main>
            <Row>
                <Col xs={12} className="fullImage">
                    <Image src={props.fullImages} fluid/>
                </Col>
                {firstGridSrc.map(addres => (
                    <Col className="firtsGrid">
                        <Image src={addres}/>
                    </Col>
                ))}
                <Col xs={12} className="videoContainer">
                    <Ratio aspectRatio="16x9">
                        <embed type="video/mp4" src={props.video}/>
                    </Ratio>
                </Col>
            </Row>
            {/* <section className="principalProduct">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={data[12].foto}/>
                            </Card>
                        </Col>
                    </Row>
            </section> */}
        </main>
    );
}

export {Main};