import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "antd";
import { genderChange } from "../../store/modules/gender";
import GenderStyled from "./GenderStyled";
import { getUserToken } from "../../util/decryptUser";

const Gender = () => {
    const dispatch = useDispatch();
    // const gender = JSON.parse(localStorage.getItem("gender"));
    const { gender } = useSelector((state) => state.gender);
    const [changeGender, setChangeGender] = useState(gender);

    const onChange = (checked) => {
        console.log("checked", checked);
        setChangeGender(changeGender);
        dispatch(genderChange(checked));
    };

    // 로컬 ? 로컬 : mem

    console.log("genderaa", gender);

    console.log("changeGender", changeGender);

    return (
        <GenderStyled className="gender" gender={gender}>
            <div>
                <Switch
                    className="switch"
                    onChange={onChange}
                    defaultChecked={gender}
                />
            </div>
        </GenderStyled>
    );
};

export default Gender;
