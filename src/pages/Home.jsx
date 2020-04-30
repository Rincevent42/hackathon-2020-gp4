import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Image, Card } from 'semantic-ui-react'
import '../style/home.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';



class Home extends Component {
    render() {
        return (
            <div className="homepage">

                <nav>
                    <span>********</span><img src={require("../media/logo-travel-at-the-museum.png")}></img><span>********</span>
                </nav>
                <Carousel>

                    <Carousel.Item>
                        <img
                            id="sl"
                            className="d-block w-100"
                            src={require("../media/n1.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id="sl"
                            className="d-block w-100"
                            src={require("../media/img-dark.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            id="sl"
                            className="d-block w-100 "
                            src={require("../media/n3.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <h1 className="titre-home">Guided tours Welcome to the New York Museum</h1>
                <div class="astrodivider">
                    <div class="astrodividermask">
                    </div>
                    <span><i>&#10038;</i></span>
                </div>
                <div className="lien">
                    <div className="un">
                        <a className="link-asia" href='/art-asia'> Asian Art </a>
                        <Image
                            href='/art-asia'
                            src={require("../media/Kanō.jpg")}
                            size='medium'
                            class="ui medium circular image" />
                    </div>

                    <div className="deux">
                        <span>
                            <a className="link-AOA" href='/AOA'> Arts of Africa, Oceania, and the Americas </a>
                            <Image
                                src={require("../media/Kanō.jpg")}
                                size='medium'
                                className="ui medium circular image" />
                        </span>
                        <span className="gif">
                            <Image src={require("../media/retour-futur.gif")}
                                size='medium'
                                className="ui medium circular image " />
                        </span>

                        <span>
                            <a className="link-European" href='/European'> European Paintings </a>
                            <Image src={require("../media/Kanō.jpg")}
                                size='medium'
                                className="ui medium circular image" />
                        </span>
                    </div>
                    <div className="trois">
                        <a className="link-Musical" href='/Musical'> Musical Instruments </a>
                        <Image src={require("../media/Kanō.jpg")}
                            size='medium'
                            class="ui medium circular image" />
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default Home;