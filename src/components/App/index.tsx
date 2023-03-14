import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import '../../index.scss';

import NotFound404Page from 'pages/NotFound404Page/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound404Page />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
