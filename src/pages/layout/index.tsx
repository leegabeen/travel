import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container } from "./style";
import { useEffect, useState } from "react";

export default function LayoutPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeNav, setActiveNav] = useState('home');

  useEffect(()=> {
    if(location.pathname.includes('mypage')) {
      setActiveNav('mypage');
    } else{
      setActiveNav('home');
    }
  }, [location])

  return (
    <Container className="layout">
      <Outlet />

      <nav>
        <button onClick={() => navigate('/')}>
          <span style={{color: activeNav === 'home' ? '#222' : '#999'}}>AI 여행</span>
        </button>
        <button onClick={() => navigate('/')}>
          <span style={{color: activeNav === 'community' ? '#222' : 'var(--gray_9)'}}>커뮤니티</span>
        </button>
        <button onClick={() => navigate('/mypage')}>
          <span style={{color: activeNav === 'mypage' ? '#222' : 'var(--gray_9)'}}>마이페이지</span>
        </button>
      </nav>
    </Container>
  )
}