import React from "react";
import PlanStyled from "./PlanStyled";
import { Link } from "react-router-dom";

const Plan = ({ lists }) => {
  // console.log("lists 플랜", lists);

  return (
    <PlanStyled>
      {lists.map(value => (
        <div className="plan_list" key={value.plan_id}>
          <Link to={`/planDetail/${value.plan_id}`}>
            <img
              src={`${process.env.REACT_APP_API_URL}${value.plan_img}`}
              alt={value.title}
            />
          </Link>
        </div>
      ))}
    </PlanStyled>
  );
};

export default Plan;
