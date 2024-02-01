import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Like from './pages/Like';
import MyPage from './pages/MyPage';
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/likes" element={<Like />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}
