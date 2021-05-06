import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { message, Button, Drawer } from "antd";

import RegisterStyle from "./RegisterStyle";
import ReviewDrawerStyled from "./components/ReviewDrawerStyled";
import useInputs from "../../hooks/useInputs";
import SubHeader from "../../components/header/SubHeader";
import OptionInput from "./components/OptionInput";
import HpCertification from "./components/HpCertification";
import RegisterInput from "./components/RegisterInput";
import SignUpConditions from "./SignUpConditions";
import SingUpPersonalInfo from "./SingUpPersonalInfo";
import { register, refreshRegister } from "../../store/modules/auth";

// import Address from "../../components/Address";
// import Conditions from "./signUpConditions";
// import Personal_info from "./singUpPersonal_info";
const Context = React.createContext({ name: "Default" });

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const { registerDone } = useSelector((state) => state.auth);

  const [email, onChangeEmail] = useInputs("");
  const [emailOptionValue, onChangeEmailOptionValue] = useInputs("");
  const [nickname, onChangeNickname] = useInputs("");
  const [password, onChangePassword] = useInputs(""); //비밀번호
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [hpNumber, setHpNumber] = useInputs("");
  const [hpCode, setHpCode] = useInputs("");
  const [year, setYear] = useInputs("");
  const [month, setMonth] = useInputs("");
  const [day, setDay] = useInputs("");
  const [zipcode, setZipcode] = useInputs("");
  const [remainderAddress, setRemainderAddress] = useInputs("");
  const [address, setAddress] = useState({
    zipcode: "",
    detailedaddress: "",
  });
  const [passwordCheck, setPasswordCheck] = useInputs(""); //비밀번호 확인
  const [passwordError, setPasswordError] = useState(false);
  const [allEmail, setAllEmail] = useState("");

  // const [term, setTerm] = useState("");
  // const [termError, setTermError] = useState(false);
  // const onChangeTerm = useCallback(e => {
  //   setTerm(e.target.checked);
  //   setTermError(false);
  // }, []);

  // console.log(passwordError);

  const [messsageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (registerDone) {
      history.push("/registerFinish");
      dispatch(refreshRegister());
    }
  }, [registerDone, dispatch]);

  let Birthday = [];
  if (year || month || day) {
    Birthday = [year, month, day].join("-");
  }

  let data = {
    email: allEmail,
    nickname: nickname,
    password: password,
    name: name,
    hp: hpNumber,
    certification_code: hpCode,
  };
  let optionData = {
    gender: gender,
    birthday: Birthday,
    zipcode: address.zipcode,
    address1: address.detailedaddress,
    address2: remainderAddress,
  };

  const newOptionData = Object.keys(optionData).reduce((object, key) => {
    if (object !== null) {
      object[key] = optionData[key];

      if (object[key].length === 0) {
        delete object[key];
      }
    }
    return object;
  }, {});

  const onSubmitHandler = useCallback(
    (data, newOptionData) => {
      messsageApi.open({
        type: "info",
        content: (
          <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
        ),
        duration: 3,
      });

      // if (password !== passwordCheck) {
      //   // alert("비번 다름");
      //   return setPasswordError(true);
      // }

      if (Object.keys(newOptionData).length >= 0) {
        // console.log(newOptionData);
        const AllData = Object.assign(data, newOptionData);
        dispatch(register(AllData));
      }
    },
    [dispatch]
  );

  const [isCheckAll, setIsCheckAll] = useState(false); // 체크 박스 전체 선택 한 경우
  const [isCheck, setIsCheck] = useState([]); //선택한 체크 박스 아이디가 담긴 배열

  const service_chk_Input = useRef();
  const private_chk_Input = useRef();

  //전체선택 되어 있는 상태에서 개별선택 하나 빼면 전체선택 false
  useEffect(() => {
    if (isCheck.length < 2) {
      setIsCheckAll(false);
    } else if (isCheck.length === 2) {
      setIsCheckAll(true);
    }
  }, [isCheck]);

  //개별선택
  const handleSingleCheck = (e, id) => {
    if (e.target.checked) {
      setIsCheck([...isCheck, id]);
    } else {
      setIsCheck(isCheck.filter((el) => el !== id));
    }
  };

  //전체선택
  const handleAllCheck = (checked) => {
    const idArray = [];
    if (checked) {
      idArray.push(
        service_chk_Input.current.value,
        private_chk_Input.current.value
      );
      setIsCheck(idArray);
    } else {
      setIsCheck([]);
    }
  };

  return (
    <RegisterStyle>
      <div id="root">
        <SubHeader name={"회원가입"} unUseCart={true} />

        <div id="contentWrap">
          <div className="contentTop">
            {/* 회원가입 FORM  */}
            <RegisterInput
              value={{
                email,
                emailOptionValue,
                nickname,
                password,
                name,
                hpNumber,
                hpCode,
                passwordCheck,
                passwordError,
              }}
              setValue={{
                onChangeEmail,
                onChangeEmailOptionValue,
                onChangeNickname,
                onChangePassword,
                setName,
                setPasswordCheck,
                setPasswordError,
                setAllEmail,
              }}
            />
            {/* 휴대폰 인증 확인  */}
            <HpCertification
              hpNumber={hpNumber}
              setHpNumber={setHpNumber}
              hpCode={hpCode}
              setHpCode={setHpCode}
            />

            {/* 선택입력사항  */}
            <OptionInput
              value={{
                gender,
                year,
                month,
                day,
                zipcode,
                address,
                remainderAddress,
              }}
              setValue={{
                setGender,
                setYear,
                setMonth,
                setDay,
                setZipcode,
                setAddress,
                setRemainderAddress,
              }}
            />

            <div className="contentBot">
              <div className="contentBotTitle">
                <input
                  id="all_check"
                  type="checkbox"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={isCheckAll}
                />
                <label htmlFor="all_check">
                  전체동의 (약관 및 개인정보 수집 동의 등)
                </label>
              </div>

              <div className="necessaryWrap">
                <div>
                  <div>
                    <input
                      id="service_chk"
                      type="checkbox"
                      value={"01"}
                      onChange={(e) => handleSingleCheck(e, "01")}
                      checked={isCheck.includes("01")}
                      ref={service_chk_Input}
                    />
                    <label htmlFor="service_chk">(필수) 서비스 약관동의</label>
                  </div>
                  <SignUpDrawer drawer={"service_chk"} />
                </div>

                <div>
                  <div>
                    <input
                      id="private_chk"
                      type="checkbox"
                      value={"02"}
                      onChange={(e) => handleSingleCheck(e, "02")}
                      checked={isCheck.includes("02")}
                      ref={private_chk_Input}
                    />
                    <label htmlFor="private_chk">
                      (필수) 개인정보수집 이용동의
                    </label>
                  </div>
                  <SignUpDrawer drawer={"private_chk"} />
                </div>
              </div>

              <Context.Provider value={{ name: "Ant Design" }}>
                {contextHolder}
                <Button
                  type="primary"
                  className="signup"
                  value="회원가입"
                  onClick={() => {
                    onSubmitHandler(data, newOptionData);
                  }}
                  // disabled={
                  //   email.length !== 0 &&
                  //   nickname.length !== 0 &&
                  //   password.length !== 0 &&
                  //   passwordCheck.length !== 0 &&
                  //   name.length !== 0 &&
                  //   hpNumber.length !== 0 &&
                  //   hpCode.length !== 0
                  //     ? false
                  //     : true
                  // }
                >
                  회원가입
                </Button>
              </Context.Provider>
            </div>
          </div>
        </div>
      </div>
    </RegisterStyle>
  );
};

function SignUpDrawer({ drawer }) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button onClick={showDrawer} className="private_btn">
        전체보기
      </Button>
      <ReviewDrawerStyled
        title="(필수) 서비스 약관 동의"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={"100%"}
      >
        {drawer === "service_chk" ? (
          <SignUpConditions />
        ) : (
          <SingUpPersonalInfo />
        )}
      </ReviewDrawerStyled>
    </>
  );
}

export default Register;
