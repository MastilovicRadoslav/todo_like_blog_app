import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostPage />} />
    </Routes>
  );
}

export default App;
