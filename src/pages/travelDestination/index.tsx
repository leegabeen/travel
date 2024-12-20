import { Container } from "./style";
import HeaderView from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { TravelList } from "../../models/TravelDestination.model";

export default function TravelDestinationPage() {
  const navigate = useNavigate();
  
  return (
    <>
      <HeaderView
        name="나의 여행지"
        leftBtnType="back"
        onClickLeftBtn={() => navigate(-1)}
      />

      <Container className="travel-destination">
        <button className="btn-add-destination"
          onClick={() => navigate('add')}
        >
          <img src="/images/ic_add.png" alt="여행지 추가" />
          <span>여행지 추가</span>
        </button>

        <ul>
          {TravelList.map((travelItem, tIndex) => (
            <li key={travelItem.id}
              onClick={() =>navigate(`${travelItem.id}`)}
            >
              <img src="/images/test-img.png" alt={travelItem.travelTitle} />
              <div className="info">
                <p className="title">{travelItem.travelTitle}</p>
                <p>{travelItem.startDate} ~ {travelItem.endDate}</p>
                <p>{travelItem.city.map((city, cIndex) => (
                  <span key={city}>{city}</span>
                ))}</p>
              </div>
              <button className="btn-action"
                onClick={(e) =>{
                  e.stopPropagation();
                  console.log('bb')
                }}
              >
                <img src="/images/ic_more_gray5.png" alt="메뉴" />
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}