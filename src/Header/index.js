import React from 'react';
import './Header.css';
import { NavBar } from '../NavBar/index.js.js';
import { SearchBar } from '../SearchBar';
import { Logo } from '../Logo';
import { Title } from '../Title';
import { ShoppingCart } from '../ShoppingCart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header(props) {
    return (
        <header className="header">
            <Container className="headerContainer">
                <Row>
                    <Col xs={3} md={2} lg={2}>
                        <Logo
                            logo={props.logo}
                        />
                    </Col>
                    <Col xs={9} md={10} lg={10} className='titleContainer'>
                        <Title
                            title={props.title}
                        />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <NavBar
                            items={props.navBarItems}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className="headerContainer">
                <Row>
                    <Col xs={12} className="searchBarContainer" >
                        <SearchBar/>
                        <span className='messageProm'>{props.promMessage}</span>
                    </Col>
                    <Col xs={12} className="shoppingCartContainer">
                        <ShoppingCart
                            logo={props.shoppingCartLogo}
                            text={props.shoppingText}
                        />
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export { Header };
