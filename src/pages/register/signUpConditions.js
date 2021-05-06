import React from "react";
import { ServiceContents } from "../Service/ServiceInfo";
import ServiceStyled from "../Service/ServiceStyled";

function SignUpConditions() {
    return (
        <ServiceStyled>
            <span className="info_back"></span>

            {ServiceContents.map((value, index) => {
                return (
                    <div className="lists" key={index}>
                        <h1>{value.title}</h1>
                        {value.lists.map((el, i) => (
                            <p key={i}>{el}</p>
                        ))}
                    </div>
                );
            })}
        </ServiceStyled>
    );
}

export default SignUpConditions;
