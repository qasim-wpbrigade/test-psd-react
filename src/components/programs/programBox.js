import React from "react";
import { Link } from "react-router-dom";

const ProgramBox = ({ data }) => {
    return (
        <div className="programBox">
            <h5 className="title">{data.title}</h5>
            <p className="desc">{data.desc}</p>
            <Link className="arrow-btn" to="/">
                degre detailado
            </Link>
            <div className="program-info">
                <ul>
                    <li>
                        <span className="icon bank-icon">Total Program Cost:</span>
                        <span>{data.cost}</span>
                    </li>
                    <li>
                        <span className="icon calander-icon">Next Start Date:</span>
                        <span>{data.nextDate}</span>
                    </li>
                    <li>
                        <span className="icon clock-icon">Completion Time:</span>
                        <span>{data.completionTime}</span>
                    </li>
                    <li>
                        <span className="icon star-icon">AVG. SALARY PREMIUM:</span>
                        <span>{data.avgSalary}</span>
                    </li>
                    <li>
                        <span className="icon cap-icon">Semester Credits:</span>
                        <span>{data.credits}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProgramBox;
