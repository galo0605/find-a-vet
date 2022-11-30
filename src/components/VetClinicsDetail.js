import "../assets/stylesheets/VetClinicsDetail.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMap,
    faContactCard,
    faClock,
} from "@fortawesome/free-regular-svg-icons";
import { getDistance } from "geolib";

class VetClinicsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destLat: this.props.latitude,
            destLong: this.props.longitude,
            distance: null,
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }
    componentDidMount() {
        window.addEventListener("load", this.getLocation());
    }
    componentWillUnmount() {
        window.removeEventListener("load", this.getLocation());
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this.getCoordinates,
                this.handleLocationError
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    getCoordinates(position) {
        var dis = getDistance(
            {
                latitude: String(position.coords.latitude),
                longitude: String(position.coords.longitude),
            },
            {
                latitude: String(this.state.destLat),
                longitude: String(this.state.destLong),
            }
        );
        this.setState({
            distance: dis / 1000,
        });
    }
    handleLocationError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request of GeoLocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to getuser location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occured.");
                break;
            default:
                alert("An unknown error occured.");
        }
    }
    render() {
        return (
            <div className="vet-clinics">
                <img
                    className="vet-clinics-photos"
                    src={this.props.imagePath}
                    alt={this.props.alt}
                />
                <div id="vet-clinic-details">
                    <p id="name">{this.props.name}</p>
                    <p id="distance">{this.state.distance} km away</p>
                    <p>
                        <FontAwesomeIcon icon={faMap} className="fa" />
                        {this.props.address}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faClock} className="fa" />
                        {this.props.hours}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faContactCard} className="fa" />
                        {this.props.contact}
                    </p>
                </div>
            </div>
        );
    }
}

export default VetClinicsDetail;
