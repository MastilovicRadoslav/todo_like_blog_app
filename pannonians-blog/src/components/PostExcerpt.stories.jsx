import PostExcerpt from './PostExcerpt';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Blog/PostExcerpt',
  component: PostExcerpt,
  decorators: [(Story) => <BrowserRouter><Story /></BrowserRouter>]
};

const mockPost = {
  id: 1,
  title: 'Example Title',
  body: 'This is the body of the post that should be shortened in preview...',
};

export const Default = () => <PostExcerpt post={mockPost} />;
