import Styled from "styled-components";
import dp from "../../components/styled/Dp";

/* 이미지 */
// import back from "../../images/components/back.png";
// import back_m from "";
// import arrow_down from "../../images/components/arrow_down.png";
// import x_m from "../../images/components/x_m.png";

const SignUpStyld = Styled.div`

@media screen and (max-width: 768px){
    input {
        -webkit-appearance:none;
    }
    input:checked[type="checkbox"]{
        background-color:#fff;
        -webkit-appearance:checkbox;
    }
    input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 ${dp(1000)} white inset;
    color: #000;
    }

    #root {
     
        #signup_title {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: ${dp(50)};
            line-height: ${dp(50)};
            background-color: #fff;
            z-index: 3;

        }
       
        #contentWrap {
            width: 100%;
            margin:  ${dp(50)} 0 0 0;
            box-sizing: border-box;
            padding: 0 3vw;
            overflow: hidden;
            
            .contentTop {
                position: relative;
                box-sizing: border-box;
                padding: ${dp(10)} 0  ${dp(20)} 0;
                border-bottom:  ${dp(2)} solid #D1D1D1;

                > p {
                    text-align: center;
                    font-size:  ${dp(13)};
                    font-weight: normal;
                    margin: 0 0  ${dp(30)};
                    position: relative;
                    color: #616161;

                    &::before {
                        content: "";
                        display: block;
                        width: 32%;
                        height: ${dp(1)};
                        background-color: #616161;
                        left: 0;
                        top: ${dp(10)};
                        position: absolute;
                    }

                    &::after {
                        content: "";
                        display: block;
                        width: 32%;
                        height: ${dp(1)};
                        background-color: #616161;
                        right: 0;
                        top: ${dp(10)};
                        position: absolute;
                    }
                }
                .pass_title {
                    .pass_msg {
                    //display: none;
                    font-size: ${dp(12)};
                    color: #d1d1d1;
                    font-weight: 300;
                    }   
                }
                > div {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    line-height: 1.4;
                    font-size: ${dp(13)};
                    margin: 0 0 ${dp(18)} 0;

                    &.on {
                        > input {
                            &:focus {
                                border: ${dp(1)} solid #FF3358 !important;
                            }
                        }
                        span {
                            color: #FF3358;
                        }
                    }

                    &.pass {
                        margin: 0 0 ${dp(5)} 0;
                        
                    }
                    
                    &.pass_check {
                        margin: 0 0 ${dp(0)} 0;
                        
                        > div {
                            display: none;
                        }

                        .passchk_msg {
                            //display: none;
                        }
                    }

                    &.gender {
                        > div {
                            &:first-child {
                                /* display: none; */
                            }
                            
                            >:after {
                                content:none;
                            }
                        }
                        > span {
                            display: none;
                        }

                        .genderBtn {
                            overflow: hidden;

                            > li {
                                float: left;
                                width: 49%;
                                height: ${dp(38)};
                                line-height: ${dp(38)};
                                text-align: center;
                                background-color: #F5F5F5;
                                border-radius: ${dp(4)};
                                margin-right: 2%;
                                font-size: ${dp(13)};
                                color: #d1d1d1;
                                &.on {
                                    background-color:  #000000;
                                    color: #FFFFFF;
                                }
                            
                                &:last-child {
                                    margin-right: 0;
                                }
                            }
                        }
                    }

                    &.email {
                        input {
                            width: 100%;
                        }
                        select {
                            position: relative;
                            width: 40%;
                            float: right;
                            color: #d1d1d1;
                        }
                        input[type="text"]:disabled {
                            background: #f5f5f5;
                            width: 100%;
                        }
                        .email_msg {
                            font-size: ${dp(12)};
                            padding-left: ${dp(12)};
                            font-weight: 400;
                        }
                    }
                    &.nickname {
                        .nick_msg1 {
                            font-size: ${dp(12)};
                            padding-left: ${dp(12)};
                            font-weight: 300;
                            color: #d1d1d1;
                        }
                    }

                    &.phone {
                        margin: 0 0 ${dp(5)} 0;

                        > div {
                            width: 100%;
                        }
                        > input {
                            width: 66%
                        }

                        .phone_msg {
                           font-size: ${dp(12)};
                        }
                        >button {
                            font-size: ${dp(13)};
                        }
                    }

                    &.phone_check {
                        margin-bottom: ${dp(50)};
                        > div {
                            display: none;
                        }
                        span {
                            /* position:relative; */
                            width: 66%;
                            padding: 0;

                         input {
                            width: 100%;
                            height: ${dp(43)};
                            padding-left: ${dp(10)};
                            color: #000;
                            border: ${dp(1)} solid #d1d1d1;
                            border-radius: ${dp(4)};
                            }

                          p {
                            position: absolute;
                            right: ${dp(10)};
                            margin-top:${dp(14)};
                          }
                        }
                        > button {
                            font-size: ${dp(13)};
                            width: 32%;
                            height: ${dp(43)};
                            border-radius: ${dp(4)};
                            background-color:  #000000;
                            color: #fff;
                            border: none;
                            float: right;
                            font-weight: 300;
                        }
                    }
                    &.birthday {
                        > div {
                            > div::after {
                                display: none;
                            }
                        }
                        .add_s {
                            color:#000000;
                            font-weight: 400;
                        }
                        .birth_choice {
                            width: 100%;
                            height: ${dp(43)};
                            line-height: ${dp(43)};
                            border: ${dp(1)} solid #d1d1d1;
                            border-radius: ${dp(4)};
                            padding-left: ${dp(10)};
                            color: #d1d1d1;
                            font-size: ${dp(13)};
                            font-weight: 300;
                            background-image: url("/images/drop_down.svg");
                            background-repeat: no-repeat;
                            background-position: 97% center;
                            background-size: ${dp(12)};
                        }
                    }

                    &.address {
                        margin-bottom: ${dp(35)};
                        > div {
                            > div::after {
                                display: none;
                            }
                            .add_s {
                            color:#000000;
                            font-weight: 400;
                        }
                        }
                        > input {
                            margin-bottom: ${dp(5)};

                        }

                        input:first-of-type {
                            width: 66%;
                        }

                        > button {
                            position: relative;
                            font-size: ${dp(13)};
                            width: 32%;
                            height: ${dp(43)};
                            border-radius: ${dp(4)};
                            background-color:  #000000;
                            color: #fff;
                            border: none;
                            float: right;
                            font-weight: 300;
                        }
                    }
                    > div {
                        overflow: hidden;
                        margin-bottom: ${dp(5)};

                        > div {
                            float: left;
                            margin-right: ${dp(16)};
                            font-size: ${dp(13)};
                        }
                        > div::after {
                            position: absolute;
                            content: "*";
                            color: #FF3358;
                            margin-left: ${dp(3)};
                        }

                        > span {
                            color: #d1d1d1;
                            line-height: ${dp(19)};
                            font-size: ${dp(12)};
                            font-weight: 300;
                        }
                    }

                    > input{
                        width: 100%;
                        float: left;
                        box-sizing: border-box;
                        padding: 0 ${dp(10)};
                        height: ${dp(43)};
                        border: ${dp(1)} solid #D1D1D1;
                        border-radius: ${dp(4)};
                        font-size: ${dp(13)};
                        font-weight: 300;
                        &::placeholder {
                            color: #D1D1D1;
                        }

                    }

                    .certiBtn {
                        position: relative;
                        font-size: ${dp(13)};
                        width: 32%;
                        height: ${dp(43)};
                        border-radius: ${dp(4)};
                        /* background-color: ${(props) =>
                          props.yes ? "#d1d1d1" : "#000"}; */
                        color: #fff;
                        border: none;
                        float: right;
                        font-weight: 300;
                    }

                    > span {
                        display: inline-block;
                        font-size: ${dp(12)};
                        position: relative;
                        box-sizing: border-box;
                        padding-left: ${dp(12)};
                        padding-top: ${dp(5)};
                        color: #FF3358;
                    }


                    select {

                        height: ${dp(43)};
                        border: ${dp(1)} solid #D1D1D1;
                        border-radius: ${dp(4)};
                        box-sizing: border-box;
                        padding: 0 ${dp(10)};
                        font-size: ${dp(13)};
                        background-image: url("/images/drop_down.svg");
                        background-repeat: no-repeat;
                        background-position: 92% center;
                        background-size: ${dp(10)};

                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        &::-ms-expand {
                            display: none;
                        };


                        &#year {
                            width: 33%;
                            margin-right: 2%;
                            float: left;
                            color: #d1d1d1;
                        }
                        &#month {
                            width: 31%;
                            margin-right: 2%;
                            float: left;
                            color: #d1d1d1;
                        }
                        &#day {
                            width: 32%;
                            float: right;
                            color: #d1d1d1;
                        }

                        &#email {
                            width: 63%;
                            float: right;
                            position: relative;
                            top: ${dp(1)};
                        }
                    }
                }
                 .complete {
                    position: absolute;
                    right: ${dp(10)};
                    top: ${dp(35)};
                    width: ${dp(20)};
                    height: ${dp(20)};
                    
                }
                .password_complete{
                    position: absolute;
                    right: ${dp(10)};
                    top: ${dp(12)};
                    width: ${dp(20)};
                    height: ${dp(20)};
                }

            }
        
            .contentBot {
                border-top: ${dp(1)} solid #f5f5f5;
                position: relative;
                box-sizing: border-box;
                font-size: ${dp(13)};

                .contentBotTitle {
                    margin-top: ${dp(20)};
                    line-height: ${dp(30)};
                    margin-bottom: ${dp(5)};
                    font-weight: bold;

                    > input {
                        position: relative;
                        width: ${dp(18)};
                        height: ${dp(18)};
                        margin: 0 ${dp(12)} 0 0;
                        top: ${dp(3)};
                        border: ${dp(1)} solid #D1D1D1;
                    }

                    > label {
                        font-weight: normal;
                        font-size:${dp(13)};
                    }
                }
               
                .necessaryWrap {
                    font-size: ${dp(13)};

                    
                    /* .conditions {
                        color: ;
                        .info_title{
                            display: inline-block;
                            text-align: center;
                        }
                        .lists {
                            color: red;
                            h1 {
                                display: none;
                            }
                        }
                    } */
                    /* .personal_info {
                        box-sizing: border-box;
                       
                    } */

                    > div {
                        width: 100%;
                        height: ${dp(43)};
                        box-sizing: border-box;
                        overflow: hidden;
                        padding: ${dp(4)} 0 0 ${dp(9)};
                        border: ${dp(1)} solid #D1D1D1;
                        border-radius: ${dp(4)};
                        margin-bottom: ${dp(7)};

                        > div {
                            &:first-child {
                                float: left;
                                overflow: hidden;

                                > input {
                                    width: ${dp(18)};
                                    height: ${dp(18)};
                                    margin: ${dp(9)} ${dp(12)} 0 ${dp(2)};
                                    float: left;
                                    border: ${dp(1)} solid #D1D1D1;
                                    border-radius: ${dp(3)};
                                }
                                > label {
                                    line-height: ${dp(33)};
                                    float: left;
                                    font-size: ${dp(13)};
                                }
                            }

                        }

                        button {
                            position: relative;
                            font-size: ${dp(12)};
                            float: right;
                            border: none;
                            background-color: transparent;
                            >span {
                                color: #d1d1d1;
                                font-weight: 300;
                            }
                        }
                         &:after {
                            display: none;
                        }
                    }
                }
            }

            .signup {
                width: 100%;
                height: ${dp(48)};
                line-height: ${dp(36)};
                position: relative;
                background-color: #000;
                color: #FFFFFF;
                margin: ${dp(36)} auto;
                box-sizing: border-box;
                border-radius: ${dp(4)};
                font-size: ${dp(15)};
                text-align: center;

                &.on {
                    background-color:  #000000;
                    color: #FFFFFF;
                }

                &:disabled {
                    background-color: #F5F5F5;
                    color: #D1D1D1;
                }

               >span {
                   color: #fff;
               }
            }
            .ant-btn-primary {
                border:none;
            }
        }
    }
    
}

`;

export default SignUpStyld;
