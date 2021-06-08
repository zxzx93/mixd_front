import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReviewWriteStyled from "./ReviewWriteStyled";
import SubHeader from "./../../components/header/SubHeader";
import { Rate, Radio, Upload, Input, Button } from "antd";
import ImgCrop from "antd-img-crop";
import ShapeDrawer from "./components/ShapeDrawer";
import SaveReviewDrawer from "./components/SaveReviewDrawer";
import { reviewOrderWriteListInfo, reviewWriteListInfo } from "../../store/modules/review";
import { getUserToken } from "../../util/decryptUser";
import useInputs from "../../hooks/useInputs";

import { reviewModifyValue} from '../../store/modules/review';

const { TextArea } = Input;

const ReviewWrite = ({ cod_id ,value}) => {
    const dispatch = useDispatch();
    const [checkSize, setCheckSize] = useState(); // 사이즈
    const [checkColor, setCheckColor] = useState(); // 색상
    const [visibleShape, setVisibleShape] = useState(false);
    const [visibleSave, setVisibleSave] = useState(false);
    const { user, token } = getUserToken();
    const [fileList, setFileList] = useState([]); // 사진
    const [file, setFile] = useState([]); // 사진 //보내주는 데이터
    const { reviewWriteLists, reviewListWriteDone } = useSelector(
        (state) => state.review
    );
    const [reviewWrite, setReviewWrite] = useState(false); // 리뷰 작성
    const [rate, setRate] = useState(""); // 별점

    //나의 체형(선택) 리스트
    const [tall, setTall] = useState(""); // 키
    const [weight, setWeight] = useState(""); // 몸무게
    const [handleSize, setHandleSize] = useState(); // 사이즈 선택
    const [choiceSize, setChoiceSize] = useState(""); //사이즈 선택2


    const [createId, setCreateId] = useState("") // 리뷰 저장 아이디값

    const [reviewData, setReviewData] = useState([]); //리뷰 작성 값



    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow
            .document
            .write(image.outerHTML);
    };

    const onChange = ({ fileList: newFileList }) => {
        // let urlData = [];

        // for (let index = 0; index < newFileList.length; index++) {
        //     urlData.push(newFileList[index].thumbUrl)
        //     // console.log("사진",urlData);
        // }

        //setFile(urlData);
        setFileList(newFileList);
    };

    const showShape = () => {
        setVisibleShape(true);
    };

    const closeShape = () => {
        setVisibleShape(false);
    };
    console.log("handleSize", handleSize);

    const showVisibleSave = (createId) => {

        // console.log(String(choiceSize));
        // let value = {
        //     cre_content: reviewWrite,
        //     cre_score: rate,
        //     //tall: tall, 
        //     //weight: weight,
        //     size_sadi: checkSize,
        //     color_sadi: checkColor,
        //     clothes_type: handleSize,
        //     clothes_size: String(choiceSize)
        // }
        //console.log("사진", file);

        const formData = new FormData();

        formData.append("cre_score", rate); //별점
        formData.append("size_sadi", checkSize); //사이즈
        formData.append("color_sadi", checkColor); //색상
        formData.append("img", JSON.stringify(fileList[0].originFileObj)); //이미지
        formData.append("cre_content", reviewWrite); //리뷰작성


        formData.append("tall", tall); // 옵션 : 키
        formData.append("weight", weight); // 옵션 : 몸무게


        formData.append("clothes_type", handleSize === 0 ? "" : handleSize); // 옵션 : 타입
        formData.append("clothes_size", choiceSize);  // 옵션 : 사이즈

        formData.forEach(element => {
            console.log("데이터", typeof element, element);
        });

        setCreateId(cod_id)
        console.log("리뷰작성데이터: ", token, createId, formData);
        setVisibleSave(true);
        dispatch(reviewWriteListInfo(token, createId, formData))
        setReviewData(formData);
    };

    const closeVisibleSave = () => {
        setVisibleSave(false);
    };

    //review를 썼는지 안썼는지 구분
    const { reviewOrderWriteLists, reviewOrderWriteListDone } = useSelector(
        (state) => state.review
    );

    const [review, setReview] = useState([]);
    useEffect(() => {
        const reviewNull = reviewOrderWriteLists.filter(value => value.review === null);
        console.log(reviewNull);
        setReview(reviewNull);
    }, [reviewOrderWriteLists]);

    console.log(" review", review);

    //user id
    useEffect(() => {
        dispatch(reviewOrderWriteListInfo(token, user.group.mem_id));
    }, [dispatch, reviewOrderWriteListInfo]);

    // 사이즈
    const handleSizeChange = (e) => {
        console.log(e.target.value);
        setCheckSize(e.target.value);
    };

    // 색상
    const handleColorChange = (e) => {
        console.log(e.target.value);
        setCheckColor(e.target.value);
    };

    // 리뷰 텍스트 작성
    const handleTextChange = (e) => {
        console.log(e.target.value);
        setReviewWrite(e.target.value);
    }

    // 별점
    const rateValue = (e) => {
        console.log(e);
        setRate(e)
    }
    console.log(value);
    
    return (
        <ReviewWriteStyled>
            {
                review.map((value, index) => (
                    <div key={index}>
                        <SubHeader name={value.option.item.cit_name} />
                        <div className="score_wrap">
                            <div>
                                <div>
                                    <img
                                        src={`${value.option.item.cit_file_2}`}
                                        alt="상품 사진" />
                                </div>
                                <div>
                                    <p>
                                        {value.option.main_title.cde_title_main}
                                        <span>|</span>
                                        {value.option.cde_title}
                                    </p>
                                    <Rate style={{
                                        fontSize: 24
                                    }}
                                        // allowHalf={true}
                                        allowClear={false} autoFocus={false}
                                        // defaultValue={value}
                                        onChange={rateValue} />
                                </div>
                            </div>
                        </div>

                        <div className="size_wrap">
                            <div>
                                <div>사이즈</div>
                                <Radio.Group value={checkSize} onChange={handleSizeChange}>
                                    <Radio.Button value="작아요">작아요</Radio.Button>
                                    <Radio.Button value="정사이즈">정사이즈</Radio.Button>
                                    <Radio.Button value="커요">커요</Radio.Button>
                                </Radio.Group>
                            </div>
                            <div>
                                <div>색상</div>
                                <Radio.Group value={checkColor} onChange={handleColorChange}>
                                    <Radio.Button value="어두워요">어두워요</Radio.Button>
                                    <Radio.Button value="화면과 같아요">화면과 같아요</Radio.Button>
                                    <Radio.Button value="밝아요">밝아요</Radio.Button>
                                </Radio.Group>
                            </div>
                        </div>

                        <div className="photo_wrap">
                            <p>
                                사진 리뷰<span>최대 5장</span>
                            </p>
                            <ImgCrop>
                                <Upload
                                    multiple={true}
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}>
                                    {
                                        fileList.length < 5 && (
                                            <> < img src="/images/review_camera.png" alt="" /> <p>사진선택</p>
                                            </>
                                        )
                                    }
                                </Upload>
                            </ImgCrop>
                        </div>

                        <div className="review_wrap">
                            <p>리뷰 작성</p>
                            <TextArea
                                className="create_review"
                                placeholder={"리뷰를 작성해 주세요 :)"}
                                onChange={handleTextChange} />
                        </div>

                        <div className="shape_wrap">
                            <Button type="text" onClick={showShape}>
                                나의 체형(선택)
                                <img src="/images/arrow_r.png" alt="" />
                            </Button>
                            <ShapeDrawer
                                visible={visibleShape}
                                close={closeShape}
                                value={{
                                    handleSize,
                                    choiceSize,
                                    tall,
                                    weight
                                }}
                                setValue={{
                                    setHandleSize,
                                    setChoiceSize,
                                    setTall,
                                    setWeight
                                }} />
                        </div>

                        <div className="review_notice">
                            <p>※ 리뷰 작성시 유의사항</p>
                            <span>
                                상품과 관련 없거나 부적절한 리뷰는 무통보 삭제될 수 있습니다.
                            </span>
                            <div>
                                <Button className="create_review_cancel">취소</Button>
                                <Button
                                    className="create_review_btn"
                                    onClick={() => showVisibleSave(value.cod_id)}
                                    reviewData={reviewData}>
                                    리뷰 저장하기
                                </Button>
                            </div>
                        </div>
                    </div>
                ))
            }

            <SaveReviewDrawer visible={visibleSave} close={closeVisibleSave} />
        </ReviewWriteStyled>
    );
};

export default ReviewWrite;
