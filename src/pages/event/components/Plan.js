import React from "react";
import PlanStyled from "./PlanStyled";
import { Link } from "react-router-dom";

const Plan = ({ lists }) => {
  c//onsole.log("lists 플랜", lists);

  return (
    <PlanStyled>
      {lists.map(value => (
        <div className="plan_list" key={value.plan_id}>
          <Link to={`/planDetail/${value.plan_id}`}>
            <img
              src={`${value.plan_img}`}
              alt={value.title}
            />
          </Link>
        </div>
      ))}
    </PlanStyled>
  );
};

export default Plan;
