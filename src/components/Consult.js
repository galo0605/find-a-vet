import "../assets/stylesheets/Consult.css";
import React from "react";
import VeterinariansDetail from "./VeterinariansDetail";

class Consult extends React.Component {
    render() {
        return (
            <>
                <div id="wrapper">
                    <label id="lbl-consult">
                        Qualified Panel of Veterinarians
                    </label>
                    <VeterinariansDetail
                        name="Dr. Jose Cruz"
                        imagePath={require("../assets/images/vet-1.png")}
                        alt="vet-1"
                    />
                    <VeterinariansDetail
                        name="Dr. Samantha Reyes"
                        imagePath={require("../assets/images/vet-2.png")}
                        alt="vet-1"
                    />
                    <VeterinariansDetail
                        name="Dr. Beatrice Perez"
                        imagePath={require("../assets/images/vet-3.png")}
                        alt="vet-1"
                    />
                    <VeterinariansDetail
                        name="Dr. Cathleene Uy"
                        imagePath={require("../assets/images/vet-4.png")}
                        alt="vet-1"
                    />
                </div>
            </>
        );
    }
}

export default Consult;
