import React from "react";
import Logo from "../../assets/images/skt-logo.svg";

const data = [
    {
        name: "SKT College",
        logo: Logo,
        fee: "9,500",
        percentage: 30,
    },
    {
        name: "Concordia University",
        percentage: 63,
    },
    {
        name: "Walden University",
        percentage: 66,
    },
    {
        name: "Grand Canyon University",
        percentage: 70,
    },
    {
        name: "University of Phoenix",
        percentage: 73,
    },
    {
        name: "Capella University",
        percentage: 85,
    },
]

const FeeComparison = () => {
    return (
        <div className="feeComparison">
            <div className="container">
                <h2>Tregåsa dogågisk</h2>
                <div className="comparison-wrapper">
                    {data.map((row,index) => (
                        <div key={index} className="comparison-box">
                            <div className="university">
                                {row.logo ? <img src={row.logo} alt={row.name} /> : <h6>{row.name}</h6>}
                            </div>
                            <div className="fee">
                                {row.fee && <h6>{row.fee}</h6>}
                                <div className="percentage"><span style={{width:`${row.percentage}%`}}></span></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeeComparison;
