import React from "react";
import ImagesModalStyled from "./ImagesModalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rate } from "antd";

const Imagesmodal = ({
  modalVisible,
  close,
  lists,
  marketDetailReviewsDone,
}) => {
  const hideClose = () => {
    close();
  };
  // console.log(marketDetailReviewsDone);

  // console.log("이미지", lists);
  return (
    <ImagesModalStyled
      className="images_modal_wrap"
      visible={modalVisible}
      zIndex={1400}
      maskStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
      maskClosable={false}
      onCancel={hideClose}
      footer={null}
    >
      <div className="images_wrap">
        <Swiper>
          {lists
            ? lists.images.map((value, index) => (
                <SwiperSlide key={index}>
                  {console.log("이미지", value)}
                  <img
                    src={`${process.env.REACT_APP_API_URL}${value}`}
                    alt=""
                  />
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </div>

      <div className="content_wrap">
        <div>
          <span>{lists.user ? lists.user.mem_nickname : lists.user}</span>
          <Rate
            allowHalf={true}
            defaultValue={4}
            disabled={true}
            autoFocus={false}
          />
        </div>
        <div>
          <p>{lists.cre_content}</p>
        </div>
      </div>
    </ImagesModalStyled>
  );
};

export default Imagesmodal;
