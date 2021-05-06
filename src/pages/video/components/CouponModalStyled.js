import Styled from "styled-components";
import { Modal } from "antd";
import dp from "../../../components/styled/Dp";

const CouponModalStyled = Styled(Modal)`
@media screen and (max-width: 768px) {
    
    .con_random {
        position: relative;
        background-image: url("/images/coupon_bg.svg");
        background-size: ${dp(280)};
        background-repeat: no-repeat;
        text-align: center;
        height: ${dp(330)};

        >button {
            border-style: none;
            width: ${dp(240)};
            height: ${dp(42)};
            line-height: ${dp(42)};
            background-color: #ffafbe;
            border-radius: ${dp(4)};
            color: #fff;
            background-image: url("/images/icon_arrow.svg");
            background-repeat: no-repeat;
            background-size: ${dp(6)};
            background-position: ${dp(172)};
            background-position-y: ${dp(17)};
            font-size: ${dp(12)};
            font-weight: 350;
            box-shadow: 0 ${dp(3)} ${dp(6)} rgba(0, 0, 0, 0.1);
        }
        .con_title {
            width: ${dp(116)};
            margin-top: ${dp(40)}; 
        }
        >p {
            margin-top: ${dp(8)};
            font-size: ${dp(12)};
        }
        .coupon_img {
            width: ${dp(258)}; 
        }
        .price {
            position: absolute;
            left: ${dp(42)};
            top: ${dp(144)};
            font-size: ${dp(36)};
            color: #ff3358;
            font-weight: bold;
        }
        .limit {
            position: absolute;
            left: ${dp(42)};
            top: ${dp(194)};
            font-size: ${dp(12)};
        }
        .orderPrice {
            position: absolute;
            left: ${dp(42)};
            top: ${dp(210)};
            font-size: ${dp(10)};
            color: #bbbbbb;
            font-weight: 350;
        }
    }

    .con_random_ok {
        position: absolute;
        left:0;
        top: ${dp(338)};
        width: 100%;
        height: ${dp(42)};
        line-height: ${dp(42)};
        background-color: #fff;
        text-align: center;
        border-radius: ${dp(4)};
        color: #616161;  
    }    
    .done_random {
        position: relative;
        width: 100%;
        background-color: #fff3f3;
        padding: ${dp(28)} ${dp(24)};
        font-size: ${dp(12)};
        text-align: center;
        border-radius: ${dp(10)};

        >img {
            margin: ${dp(12)} 0;
            width: ${dp(28)};
            height: ${dp(27)};
        }
        >p{
           line-height: ${dp(20)};
           color: #000000;
           font-size: ${dp(12)};
        }
    }  
    .random_ok {
        position: absolute;
        left:0;
        top: ${dp(166)};
        width: 100%;
        height: ${dp(42)};
        line-height: ${dp(42)};
        background-color: #fff;
        text-align: center;
        border-radius: ${dp(4)};
        color: #616161;  
    }
}
`;
export default CouponModalStyled;
