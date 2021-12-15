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
import Img4 from './../image/5.jpg';
import Video from './../video/video.mp4';


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
                ]}
                video={Video}
            />
        </React.StrictMode>
    );
}

export {App};