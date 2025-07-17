import PostPage from './PostPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default {
  title: 'Pages/PostPage',
  component: PostPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route path="/posts/:id" element={<Story />} />
        </Routes>
      </BrowserRouter>
    ),
  ],
};

export const Default = () => <PostPage />;
Default.parameters = {
  reactRouter: {
    routePath: '/posts/:id',
    routeParams: { id: '1' },
  },
};
