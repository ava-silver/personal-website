import Markdown from 'react-markdown';
import renderer from './renderer';
import { Card, Stack } from '@chakra-ui/react';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

/* eslint-disable import/no-webpack-loader-syntax */
import transition from '!!raw-loader!./posts/2025-06-22-transition.md';
import coming_out from '!!raw-loader!./posts/2025-07-08-coming-out.md';

const posts = [coming_out, transition];

export default function Blog() {
  return (
    <Stack alignItems="center" width="100%" m={[3, 8]} gap="1rem">
      <Stack direction="row" width="100%" justifyContent="flex-start">
        <Link to="/" aria-label="Home">
          <FaArrowLeft style={{ marginRight: '8px' }} />
          Home
        </Link>
      </Stack>
      {posts.map((content) => (
        <Card.Root
          bg="bg.2"
          color="textColor"
          maxWidth="800px"
          height="auto"
          border="none"
        >
          <Card.Body height="auto" minHeight="5rem">
            <Markdown components={renderer} children={content} skipHtml />
          </Card.Body>
        </Card.Root>
      ))}
    </Stack>
  );
}
