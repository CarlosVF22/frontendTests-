import React from 'react';
import { Header } from './../Header';
import Logo from './../image/logoShoes.png';
import ShoppingCartLogo from './../image/bag.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './../Main'
import FullImage from './../image/homeImage1.jpg';
import Img1 from './../image/10.jpg';
import Img2 from './../image/15.jpg';
import Img3 from './../image/16.jpg';
import Img4 from './../image/14.jpg';
import Img5 from './../image/9.jpg';
import Img6 from './../image/17.jpg';
import Video from './../video/video.mp4';
import shoes1 from './../image/shoes1.jpg';
import shoes2 from './../image/shoes2.jpg';
import shoes3 from './../image/shoes3.jpg';
import shoes5 from './../image/shoes5.jpg';
import shoes6 from './../image/shoes6.jpg';
import {Footer} from './../Footer';


function App() {
    return (
        <React.StrictMode>
            <Header
                logo={Logo}
                title={'MI ZAPATO'}
                navBarItems={[
                    <a href='./../public/index.html'>Home</a>,
                    <a href='./../public/producto.html'>Productos</a>,
                    <a href='./../public/categoria.html'>Categorias</a>
                ]}
                promMessage={'Envio gratis para pedidos superiores a $300.000'}
                shoppingCartLogo={ShoppingCartLogo}
                shoppingText={'Carrito'}
            />
            <Main
                fullImages={FullImage}
                firstGridSrc = {[
                    Img1,
                    Img2,
                    Img3,
                    Img4,
                    Img5,
                    Img6
                ]}
                video={Video}
                secondGridSrc = {[
                    shoes1,
                    shoes2,
                    shoes3,
                    shoes5,
                    shoes6
                ]}
            />
            <Footer
                footerItems = {[
                    "servicio al cliente",
                    "Mi cuenta",
                    "Recursos",
                    "Newsletter"
                ]}
            />
        </React.StrictMode>
    );
}

export {App};