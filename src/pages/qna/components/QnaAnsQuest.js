import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../store/modules/qna";
import QnaNonQuestStyled from "./QnaNonQuestStyled";


const QnaAnsQuest = ({ blockDelete, close, setDeleteBtn, deleteCqaId,token }) => {
  const dispatch = useDispatch();
    const [deleteIfo, setDeleteIfo] = useState(false);

    const deleteBtn = () => {
        setDeleteIfo(!deleteIfo);
        dispatch(deleteComment(deleteCqaId,token));
    };

    console.log(token);
    const onCancel = () => {
        close();
        setDeleteBtn(false);
        setTimeout(() => {
            setDeleteIfo(false);
        }, 1000);
    };

    return (
        <QnaNonQuestStyled
            title={
                deleteIfo ? (
                    "삭제되었습니다."
                ) : (
                    <>
                        <p>답변이 완료된 문의입니다.</p>
                        <p className="p_title">
                            {" "}
                            정말로 상품 문의를 삭제하시겠습니까?
                        </p>
                    </>
                )
            }
            placement="bottom"
            closable={false}
            visible={blockDelete}
        >
            {deleteIfo ? (
                <p className="success" onClick={onCancel}>
                    확인
                </p>
            ) : (
                <p className="delete" onClick={deleteBtn}>
                    삭제
                </p>
            )}
            {deleteIfo ? (
                ""
            ) : (
                <p className="cancel" onClick={onCancel}>
                    취소
                </p>
            )}
        </QnaNonQuestStyled>
    );
};

export default QnaAnsQuest;
