import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import '../style/home.css';



class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="titre-home">Bienvenue Au Museum</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../media/n1.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../media/n2.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={require("../media/n3.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            </div>

        );
    }
}

export default Home;