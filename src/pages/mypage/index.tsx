// import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "./style";
import HeaderView from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderView
        name="마이페이지"
      />

      <Container>
        <div className="profile-area"></div>
        <div className="card-area">
          <button onClick={() => navigate('travel-destination')}>나의 여행</button>
        </div>
      </Container>
    </>
  )
}