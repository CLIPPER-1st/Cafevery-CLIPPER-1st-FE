import { useLocation } from 'react-router-dom';

const useCheckUrl = (paths: string[]) => {
  const location = useLocation();
  return paths.includes(location.pathname);
};

export default useCheckUrl;
