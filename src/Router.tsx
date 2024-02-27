import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Like from './pages/Like';
import MyPage from './pages/MyPage';
import Setting from './pages/Setting';
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/likes" element={<Like />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}
