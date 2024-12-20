import { Route, Routes } from 'react-router-dom';
import './styles/reset.scss';
import LayoutPage from './pages/layout';
import MyPage from './pages/mypage';
import TravelDestinationPage from './pages/travelDestination';
import AddTravelDestinationPage from './pages/travelDestination/AddTravelDestination';
import TravelDestinationDetailPage from './pages/travelDestination/TravelDestinationDetail';

function App() {
  return (
    <Routes>
      <Route path="" element={<LayoutPage />}>
      
        {/* 마이페이지 */}
        <Route path="/mypage">
          <Route path="" element={<MyPage />} />
          <Route path="travel-destination">
            <Route path=""  element={<TravelDestinationPage />} />
            <Route path="add" element={<AddTravelDestinationPage />} />
            <Route path=":id" element={<TravelDestinationDetailPage/>} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
