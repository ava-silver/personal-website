/* eslint-disable import/no-webpack-loader-syntax */
import transition from '!!raw-loader!./2025-06-22-transition.md';
import coming_out from '!!raw-loader!./2025-07-08-coming-out.md';

interface PostData {
  title: string;
  id: string;
  description: string;
  content: string;
}

const posts: PostData[] = [
  {
    title: 'Coming Out',
    id: 'coming-out',
    description: 'A reflection on what it means to come out',
    content: coming_out,
  },
  {
    title: 'Transition: A Retrospective',
    id: 'transition',
    description: 'A retrospective of the last 5 years of my transition',
    content: transition,
  },
];

export default posts;
