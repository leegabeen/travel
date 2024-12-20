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
    }
    // if(location.pathname === '/' || location.pathname.includes('home')){
    //   setActiveNav('home');
    // } else if(location.pathname.includes('list')){
    //   setActiveNav('list');
    // } else if(location.pathname.includes('setting')){
    //   setActiveNav('setting');
    // }
  }, [location])

  return (
    <Container className="layout">
      <Outlet />

      <nav>
        <button onClick={() => navigate('/')}>
          {/* <img src={`/images/ic_wallet${activeNav === 'home' ? '_bk' : '_gray'}.png`} alt="홈" /> */}
          <span style={{color: activeNav === 'home' ? '#222' : '#999'}}>AI 여행</span>
        </button>
        <button onClick={() => navigate('/')}>
          {/* <img src={`/images/ic_list${activeNav === 'list' ? '_bk' : '_gray'}.png`} alt="내역" /> */}
          <span style={{color: activeNav === 'list' ? '#222' : 'var(--gray_9)'}}>커뮤니티</span>
        </button>
        <button onClick={() => navigate('/mypage')}>
          {/* <img src={`/images/ic_setting${activeNav === 'setting' ? '_bk' : '_gray'}.png`} alt="설정" /> */}
          <span style={{color: activeNav === 'mypage' ? '#222' : 'var(--gray_9)'}}>마이페이지</span>
        </button>
      </nav>
    </Container>
  )
}