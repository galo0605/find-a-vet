import "../assets/stylesheets/VetClinics.css";
import React, { Component } from "react";
import VetClinicsDetail from "./VetClinicsDetail";

class VetClinics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null,
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(
            this
        );
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
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
        this.reverseGeocodeCoordinates();
    }
    reverseGeocodeCoordinates() {
        fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.state.latitude}&longitude=${this.state.longitude}&localityLanguage=en`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    userAddress:
                        data.principalSubdivision + ", " + data.countryName,
                })
            )
            .catch((error) => alert(error));
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
            <>
                <div id="vet-clinics-wrapper">
                    <label className="lbl-list">
                        List of Open Veterinary Clinics Near You
                    </label>
                    <label className="lbl-list">
                        ({this.state.userAddress})
                    </label>
                    <VetClinicsDetail
                        name="Holy Spirit Animal Clinic"
                        imagePath={require("../assets/images/vet-clinic-holy-spirit.jpg")}
                        alt="vet-clinic-holy-spirit"
                        address="62 Holy Spirit Dr, Don Antonio, Quezon City, Metro Manila"
                        contact="(02) 8994 1058"
                        hours="Mon-Sun 9AM to 5PM"
                        latitude="14.6827749"
                        longitude="121.0771045"
                    />
                    <VetClinicsDetail
                        name="Pet House Veterinary Clinic & Grooming Center- Don Antonio"
                        imagePath={require("../assets/images/vet-clinic-pet-house.jpg")}
                        alt="vet-clinic-pet-house"
                        address="13-J Holy Spirit Drive, Brgy. Holy Spirit, Quezon City, Metro Manila"
                        contact="744-2432 / 500-2448"
                        hours="Mon-Sun 9AM to 5PM"
                        latitude="14.685877"
                        longitude="121.0748612"
                    />
                    <VetClinicsDetail
                        name="UP Veterinary Teaching Hospital, Diliman Station"
                        imagePath={require("../assets/images/vet-clinic-up-veterinary.jpg")}
                        alt="vet-clinic-up-veterinary"
                        address="101 E. Jacinto Street, Diliman, Quezon City,Metro Manila"
                        contact="(02) 8928 5436"
                        hours="Mon-Fri 8AM to 11AM, 1PM to 3PM"
                        latitude="14.651898"
                        longitude="121.0587062"
                    />
                    <VetClinicsDetail
                        name="Petlink Wellness Center and Veterinary Clinic"
                        imagePath={require("../assets/images/vet-clinic-petlink.jpg")}
                        alt="vet-clinic-petlink"
                        address="173 West, Macario Asistio Sr, Ave, Caloocan, Metro Manila"
                        contact="3524028"
                        hours="Open 24 hrs"
                        latitude="14.6517719"
                        longitude="120.9777225"
                    />
                    <VetClinicsDetail
                        name="Caloocan Veterinary Center"
                        imagePath={require("../assets/images/vet-clinic-ppbcc.jpg")}
                        alt="vet-clinic-ppbcc"
                        address="155 Boni Ave, Mandaluyong, 1550 Metro Manila"
                        contact="0917 331 6223"
                        hours="Mon-Sun 9AM to 5PM"
                        latitude="14.658199"
                        longitude="120.9682089"
                    />
                </div>
            </>
        );
    }
}

export default VetClinics;
