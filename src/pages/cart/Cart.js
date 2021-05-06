import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, message } from "antd";
import CartStyled from "./CartStyled";
import SubHeader from "./../../components/header/SubHeader";
import ItemLists from "./../../components/itemList/ItemList";
import { getCart } from "../../store/modules/cart";
import { orderListPass } from "../../store/modules/cartToPurchase";
import { getUserToken } from "../../util/decryptUser";
import { useHistory } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
	const history = useHistory();
    const {
        cartList,
        cartListDone,
		selectDeleteItemDone,
		modifyOptionDone,
		checkedItems,
    } = useSelector(state => state.cart);
    const { token } = getUserToken();
	const [checkedSum, setCheckedSum] = useState();
	const [priceSum, setPriceSum] = useState();
	const [totalCnt, setTotalCnt] = useState();
	
    useEffect(() => {
        dispatch(getCart(token));
    }, [dispatch, selectDeleteItemDone, modifyOptionDone]);

	useEffect(() => {
		let sum = 0;
		let priceSum = 0;
		let totalCnt = 0;
		checkedItems.forEach((value) => {
			sum += value.price * value.cnt;
			priceSum += (value.realPrice - value.price) * value.cnt;
			totalCnt += value.cnt;
		})
		setCheckedSum(sum)
		setPriceSum(priceSum)
		setTotalCnt(totalCnt)
	}, [checkedItems])

	const checkItem = () => {
		let orderList = []
		checkedItems.forEach((value) => 
			orderList.push({
				"cit_id": value.cit_id,
				"cde_id": value.cde_id,
			}),
		)

		if (orderList.length !== 0) {
			dispatch(orderListPass(orderList ,token))
			history.push("/orderPurchase")
		} else {
			message.info("주문할 상품을 선택해주세요.", 1.5);
		}
	}

    return (
        <CartStyled>
            <SubHeader name={"장바구니"} unUseCart={true} />

            {
                cartListDone || selectDeleteItemDone ?
					cartList.length !== 0 ?
					<>
					<ItemLists
						lists={cartList}
						listsDone={cartListDone}
					/>
					<div className="order_info_wrap">
						<ul>
							<li className="total_price">
								<p>총 상품금액</p>
								<span>{checkedSum} 원</span>
							</li>
							<li>
								<p>할인금액</p>
								<span>{priceSum} 원</span>
							</li>
							<li>
								<p>총 배송비</p>
								<span>0 원</span>
							</li>
						</ul>
						<div className="count_price">
							<p>총 {totalCnt}개 예상 금액</p>
							<span>{checkedSum - priceSum} 원</span>
						</div>

						<div className="order_btn_wrap">
							<Button
								className="order_btn" 
								onClick={checkItem}
							>
								총 {checkedSum - priceSum}원 주문하기
							</Button>
						</div>
					</div>
					</>
					:
					<div className="non_lists">
						<p>장바구니에 담긴 상품이 없습니다.</p>
						<Button type="link" href="/">
							쇼핑하러가기
						</Button>
					</div>
                :
				null
            }
        </CartStyled>
    );
};

export default Cart;
