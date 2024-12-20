import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";

import { TravelDetailContainer } from "./style";
import TravelDestination, { Day, TravelList } from "../../models/TravelDestination.model";
import HeaderView from "../../components/Header";
import TabsView from "../../components/Tabs";
import CourseItemView from "../../components/CourseItem";


export default function TravelDestinationDetailPage(){
  const navigate = useNavigate();
  const {id} = useParams();

  const [travel, setTravel] = useState<TravelDestination|null|undefined>();
  const [activeDay, setActiveDay] = useState<Day>();

  useEffect(() => {
    if(id !== undefined) {
      setTravel(TravelList.filter(v => v.id === parseInt(id)).reduce((acc, value, index) => ({...acc, [index]: value})));
    }
  }, [id]);
  
  useEffect(() => {
    if((travel !== undefined) && (travel !== null) && (travel.dayList.length !== 0)) {
      setActiveDay(travel.dayList.filter(v => v.date === travel.startDate).reduce((acc, value, index) => ({...acc, [index]: value})))
    }
  }, [travel]);

  // useEffect(() => {
  //   console.log('aa', moment(activeDay?.date));
  // }, [activeDay])


  if((travel === undefined) || (travel === null)) return <></>
  
  return (
    <>
      <HeaderView
        name={travel.travelTitle}
        leftBtnType="back"
        onClickLeftBtn={() => navigate(-1)}
      />
      <TravelDetailContainer className="travel-destination-detail">
        {/* 일정이 없는 경우 */}
        {travel.dayList.length === 0 && (
          <div className="inner none">
            <div className="group-btn create-schedule">
              <button className="btn-plan">일정 계획하기</button>
              <button className="btn-suggest">일정 추천받기</button>
            </div>
          </div>
        )}

        {/* 일정이 있는 경우 */}
        {((travel.dayList.length !== 0) && (activeDay !== undefined)) && (
          <>
            <TabsView
              list={travel}
              activeItem={activeDay}
              setActiveItem={setActiveDay}
            />
            <div className="cont-wrap">
              <p>{moment(activeDay.date).format("MM월 DD일 (dd)")}</p>
              <ul className="course-list">
                {activeDay.placeList.map((placeItem, pIndex) => (
                  <CourseItemView
                    key={placeItem.id}
                    placeItem={placeItem}
                  />
                ))}
              </ul>
              <button className="btn-add-schedule">+ 일정 추가</button>
            </div>
          </>
        )}
      </TravelDetailContainer>
    </>
  )
} 