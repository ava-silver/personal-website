/* eslint-disable import/no-webpack-loader-syntax */
import transition from '!!raw-loader!./2025-06-22-transition.md';
import coming_out from '!!raw-loader!./2025-07-08-coming-out.md';
import to_be_a_mother from '!!raw-loader!./2025-10-04-to-be-a-mother.md';

interface PostData {
  title: string;
  id: string;
  description: string;
  content: string;
}

const posts: PostData[] = [
  {
    title: 'To Be a Mother',
    id: 'to-be-a-mother',
    description: 'A poem about the relationship between mother and child',
    content: to_be_a_mother,
  },
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
