import React, { useEffect, useState } from "react";
import EventStyled from "./EventStyled";
import EventSlider from "./components/EventSlider";
import Plan from "./components/Plan";
import { bannerListInfo } from "../../store/modules/plan";
import { eventListInfo } from "../../store/modules/event";
import { useDispatch, useSelector } from "react-redux";
import { getUserToken } from "../../util/decryptUser";

const Event = () => {
  const dispatch = useDispatch();
  const { bannerLists, bannerListDone } = useSelector(state => state.plan);
  const { eventList, eventListDone } = useSelector(state => state.event);
  const { token } = getUserToken();

  useEffect(() => {
    token === undefined
      ? dispatch(bannerListInfo())
      : dispatch(bannerListInfo(token));
  }, [dispatch]);

  useEffect(() => {
    token === undefined
      ? dispatch(eventListInfo())
      : dispatch(eventListInfo(token));
  }, [dispatch]);

  //console.log(bannerLists);
  // console.log(bannerLists.result.plan_id);
  return (
    <EventStyled>
      <div className="event_wrap">
        <p>이벤트</p>
        {eventListDone ? <EventSlider events={eventList} /> : ""}
      </div>
      <div className="plan_wrap">
        <p>기획전</p>
        {bannerListDone ? <Plan lists={bannerLists.result} /> : ""}
      </div>
    </EventStyled>
  );
};

export default Event;
