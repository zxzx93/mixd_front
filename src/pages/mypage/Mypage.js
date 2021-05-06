import React, { useEffect } from "react";
import MypageStyled from "./MypageStyled";
import MypageFooter from "./components/MypageFooter";
import SubHeader from "./../../components/header/SubHeader";
import { getUserToken } from "../../util/decryptUser";
import MypageNoLogin from "./components/MypageNoLogin";
import MypageLogin from "./components/MypageLogin";
import MypageLoginInfo from "./components/MypageLoginInfo";
import MypageNoLoginInfo from "./components/MypageNoLoginInfo";
import { genderChange } from "../../store/modules/gender";
import { useDispatch } from "react-redux";

const Mypage = () => {
    // const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();
    const { user, token } = getUserToken();
    const name = "마이페이지";

    // console.log(user.mem_sex);

    // useEffect(() => {
    //     // console.log(user.mem_sex === 1);
    //     if (user) {
    //         if (user.mem_sex === 1) {
    //             localStorage.setItem("gender", true);
    //             dispatch(genderChange(true));
    //         } else {
    //             localStorage.setItem("gender", false);
    //             dispatch(genderChange(false));
    //         }
    //     }
    //     console.log(user);
    // }, []);

    return (
        <>
            <MypageStyled genderUse={true} id="section">
                <SubHeader name={name} genderUse={true} />

                {user ? (
                    <>
                        <MypageLogin me={user} token={token} />
                        <MypageLoginInfo />
                    </>
                ) : (
                    <>
                        <MypageNoLogin />
                        <MypageNoLoginInfo />
                    </>
                )}

                <MypageFooter />
            </MypageStyled>
        </>
    );
};

export default Mypage;
