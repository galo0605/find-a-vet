import "../assets/stylesheets/Home.css";
import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Button, Nav } from "react-bootstrap";
class Home extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src={require("../assets/images/carousel_professional_veterinarian.png")}
                        alt="consult-a-vet"
                    />
                    <Carousel.Caption>
                        <Button
                            variant="carousel"
                            type="submit"
                            size="lg"
                            as={Link}
                            to="/consult"
                        >
                            Consult Now
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src={require("../assets/images/carousel_join_professional_veterinarian.png")}
                        alt="apply-as-vet"
                    />
                    <Carousel.Caption>
                        <Button
                            id="apply"
                            variant="carousel"
                            type="submit"
                            size="lg"
                            as={Link}
                            to="/apply"
                        >
                            Apply Now
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel"
                        src={require("../assets/images/carousel_search_vet_clinic.png")}
                        alt="apply-as-vet"
                    />
                    <Carousel.Caption>
                        <Nav.Link id="find" as={Link} to="/find-a-vet-clinic">
                            Find an open veterinary clinic near me
                        </Nav.Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default Home;
