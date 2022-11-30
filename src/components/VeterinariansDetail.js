import "../assets/stylesheets/VeterinariansDetail.css";
import React from "react";

class VeterinariansDetail extends React.Component {
    render() {
        return (
            <div className="vet">
                <img
                    class="photos"
                    src={this.props.imagePath}
                    alt={this.props.alt}
                />
                <p id="name">{this.props.name}</p>
            </div>
        );
    }
}

export default VeterinariansDetail;
