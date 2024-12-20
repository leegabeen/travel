import { useNavigate } from "react-router-dom";
import HeaderView from "../../components/Header";
import { AddTravelContainer } from "./style";

export default function AddTravelDestinationPage(){
  const navigate = useNavigate();
  return (
    <>
      <HeaderView
        name="나의 여행지 추가"
        leftBtnType="back"
        onClickLeftBtn={() => navigate(-1)}
      />
      <AddTravelContainer className="add-travel-destination">
      </AddTravelContainer>
    </>
  )
} 