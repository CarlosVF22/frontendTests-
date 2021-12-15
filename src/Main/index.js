import React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import {FiInstagram} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';
// import Card from 'react-bootstrap/Card';
import './main.css';
// import {data} from './../zapato';

function Main(props) {
    const firstGridSrc = props.firstGridSrc;
    const secondGridSrc = props.secondGridSrc;
    // const json = props.json;
    // const genericalpath = './../image/';

    return (
        <main>
            <Row>
                <Col xs={12} className="fullImage">
                    <Image src={props.fullImages} fluid />
                </Col>
                {firstGridSrc.map(addres => (
                    <Col xs={4} className="firtsGrid">
                        <Image src={addres} />
                    </Col>
                ))}
                <Col xs={12} className="videoContainer">
                    <Ratio aspectRatio="16x9">
                        <embed type="video/mp4" src={props.video} />
                    </Ratio>
                </Col>
            </Row>

            {/* Obteniendo informacion del archivo json */}

            {/* <section className="principalProduct">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={data[12].foto}/>
                            </Card>
                        </Col>
                    </Row>
            </section> */}

            <section>
                <Row className="secondGrid">
                    <Col xs={12} className="message">
                        <span>@mizapato</span>
                    </Col>

                    {secondGridSrc.map(addres => (
                        <Col xs={2} >
                            <Image src={addres} />
                        </Col>
                    ))}
                </Row>
            </section>
            <section>
                <div className="greySection">
                    <h2>@mizapato</h2>
                    <Row>
                        <Col className="socialNetworkContainer">
                            <FiInstagram/>
                            <FaFacebookF/>
                        </Col>
                    </Row>
                </div>
            </section>
        </main>
    );
}

export { Main };