import React, { useState } from "react";
import ReviewListStyled from "./ReviewListStyled";
import { Rate, Button, Collapse } from "antd";
import ImagesModal from "./components/ImagesModal";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { isEmpty } from "lodash";
import { DownOutlined } from "@ant-design/icons";
import DreateReviewDrawer from '../../pages/review/components/DreateReviewDrawer';

const { Panel } = Collapse;

const ReviewList = ({
  lists,
  useVideo,
  useReview,
  marketDetailReviewsDone,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  let location = useLocation();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };
  const limitDate = (regDate, limit) => {
    const date = moment(regDate).add(limit, "days");
    return moment(date).format("YYYY.MM.DD");
  };

  const [deleteBtn, setDeleteBtn] = useState(false);
  const [blockDelete, setBlockDelete] = useState(false);  

  const [deleteId , setDeleteId] = useState(""); // 리뷰 삭제 아이디 값

  const deletePop = (cre_id) => {
    setDeleteId(cre_id)
    setBlockDelete(true);
  };

  const onClose = () => {
    setBlockDelete(false);
  };

  

  console.log("lists", lists);

  return (
    <ReviewListStyled useVideo={useVideo} useReview={useReview}>
      {lists.length !== 0 ? (
        lists.map((value, index) => (
          <div key={index}>
            {console.log("리뷰", value)}
            <div className="review_content">
              <div className="review_title">
                <div className="review_img">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${value.item.cit_file_2}`}
                    alt="상품 사진"
                  />
                </div>
                <div className="review_info">
                  <div>
                    <Rate
                      llowHalf={true}
                      autoFocus={false}
                      defaultValue={value.cre_score}
                      disabled={true}
                    />
                    <span>{limitDate(value.cre_datetime)}</span>
                  </div>
                  {useVideo ? (
                    <p className="detail">
                      {value.item.cit_name}
                      <span className="blank" />
                      {value.option.cde_title}
                    </p>
                  ) : useReview ? (
                    <p className="useReview">
                      <span>{value.item.market.market_name}</span>
                      {value.item.cit_name}
                    </p>
                  ) : (
                    <p>{value.item.cit_name}</p>
                  )}
                </div>
              </div>
              <div className="user_review">
                <div className="user_info">
                  {useReview ? null : (
                    <span>
                      {value.user
                        ? value.user.mem_nickname
                        : value.mem_nickname}
                    </span>
                  )}
                  <div>
                    <span>{value.like_count}</span>
                    <Button
                      type="text"
                      icon={<img src="/images/review_like.png" alt="" />}
                    />
                  </div>
                </div>
                <div className="product_info">
                  {useVideo ? null : (
                    <p>
                      {value.option
                        ? value.option.main_title.cde_title_main
                        : value.item_option_main}

                      <span />
                      {value.option
                        ? value.option.cde_title
                        : value.item_option_sub}
                    </p>
                  )}
                  <p>
                    {value.tall}cm
                    <span />
                    {value.weight}kg
                    <span />
                    {value.size}
                    <span />
                    {value.size_sadi}
                    <span />
                    {value.color_sadi}
                  </p>
                  <div>{value.cre_content}</div>
                </div>

                {value.images && (
                  <>
                    <div className="image_wrap">
                      <ul>
                        {value.images.map((img, index) => (
                          <li key={index} onClick={showModal}>
                            {console.log(process.env.REACT_APP_API_URL, "img")}
                            <img
                              src={`${process.env.REACT_APP_API_URL}${img}`}
                              alt=""
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ImagesModal
                      modalVisible={modalVisible}
                      close={hideModal}
                      marketDetailReviewsDone={marketDetailReviewsDone}
                      lists={value}
                    />
                  </>
                )}
              </div>
              {location.pathname === "/review" && (
                <div className="review_change">
                  <span>{limitDate(value.cre_datetime)}</span>
                  <div className="change_btn">
                    <div className="modify" >수정</div>
                    
                    <div className="delete"
                        onClick={() => deletePop(value.cre_id)}
                        
                     >삭제</div>

                      <DreateReviewDrawer 
                     blockDelete={blockDelete}
                     close={onClose}
                     deleteBtn={deleteBtn}
                     deleteId={deleteId}/>
                  </div>
                </div>
              )}
            </div>
            {value.cre_reply_datetime === null &&
            value.cre_reply_datetime === null &&
            value.crea_reply_mem_id === null ? (
              " "
            ) : (
              <div className="review_answer">
                <div>
                  <Collapse
                    //defaultActiveKey={["1"]}
                    // onChange={callback}
                    expandIconPosition="right"
                    bordered={false}
                    expandIcon={({ isActive }) => (
                      <DownOutlined rotate={isActive ? 180 : 0} />
                    )}
                    className="site-collapse-custom-collapse"
                  >
                    <Panel
                      className="answer_title"
                      header={
                        <div>
                          <div>
                            <span className="market_answer">마켓답변</span>
                            <p className="market_info">
                              {value.item.market.market_name}
                              {useVideo || useReview ? (
                                <span> {value.item.cit_name}</span>
                              ) : null}
                            </p>
                          </div>
                          <div>
                            <span className="market_time">
                              {value.cre_reply_datetime}
                            </span>
                            {/* <Button
                              type="text"
                              icon={<img src="/images/arrow_r.png" alt="" />}
                            /> */}
                          </div>
                        </div>
                      }
                      key="1"
                      className="site-collapse-custom-panel"
                    >
                      <div className="answer_content">
                        {value.cre_reply_content}
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="review_non">작성한 리뷰가 없습니다.</p>
      )}
    </ReviewListStyled>
    
  );
};

export default ReviewList;
