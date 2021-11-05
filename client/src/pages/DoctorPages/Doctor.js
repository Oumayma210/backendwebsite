import React from "react";
// import PatientsList from "../../Components/PatientsList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Doctor = () => {
    return (
        <div>
            <Link to="/patientList">
                <Button> Patient List </Button>
            </Link>
            <Link to="/addrdv">
                <Button> Rendez-Vous </Button>
            </Link>
            {/* nrmlt nhotha f get all rendezvous taht kol rendez reservée fama edit! */}
            <Link to="/editrdv">
                <Button> Edit Rendez-Vous </Button>
            </Link>
        </div>
    );
};

export default Doctor;
