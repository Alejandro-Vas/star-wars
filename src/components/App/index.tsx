import { store } from 'store/store';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import 'styles/index.scss';

import NotFound404Page from 'pages/NotFound404Page/index';
import CharactersPage from 'pages/CharactersPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound404Page />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
