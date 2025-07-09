import * as React from 'react';
import { Components } from 'react-markdown';
import {
  Code,
  Heading,
  Link,
  Text,
  Image,
  Table,
  chakra,
  List,
  Blockquote,
} from '@chakra-ui/react';

type GetCoreProps = {
  children?: React.ReactNode;
  'data-sourcepos'?: any;
};

function getCoreProps(props: GetCoreProps): any {
  return props['data-sourcepos']
    ? { 'data-sourcepos': props['data-sourcepos'] }
    : {};
}

export const defaults: Components = {
  p: (props) => {
    const { children } = props;
    return <Text mb={2}>{children}</Text>;
  },
  em: (props) => {
    const { children } = props;
    return <Text as="em">{children}</Text>;
  },
  blockquote: (props) => {
    return (
      <Blockquote.Root mb="1">
        <Blockquote.Content>{props.children}</Blockquote.Content>
      </Blockquote.Root>
    );
  },
  code: (props) => {
    const { children, className } = props;

    return (
      <Code
        className={className}
        whiteSpace="break-spaces"
        display="block"
        w="full"
        p={2}
        children={children}
      />
    );
  },
  del: (props) => {
    const { children } = props;
    return <Text as="del">{children}</Text>;
  },
  a: (props) => {
    const { children, href } = props;
    return (
      <Link href={href} color="#349eeb">
        {children}
      </Link>
    );
  },
  img: Image,
  text: (props) => {
    const { children } = props;
    return <Text as="span">{children}</Text>;
  },
  ul: (props) => {
    return (
      <List.Root spacing={2} as="ul" pl={4} {...getCoreProps(props)}>
        {props.children}
      </List.Root>
    );
  },
  ol: (props) => {
    return (
      <List.Root spacing={2} as="ol" pl={4} {...getCoreProps(props)}>
        {props.children}
      </List.Root>
    );
  },
  li: (props) => {
    return <List.Item {...getCoreProps(props)}>{props.children}</List.Item>;
  },
  h1: (props) => {
    return (
      <Heading my={4} size={'lg'} {...getCoreProps(props)}>
        {props.children}
      </Heading>
    );
  },
  h2: (props) => {
    return (
      <Heading my={4} size={'sm'} {...getCoreProps(props)}>
        {props.children}
      </Heading>
    );
  },
  h3: (props) => {
    return (
      <Heading my={4} size={'xs'} {...getCoreProps(props)}>
        {props.children}
      </Heading>
    );
  },
  pre: (props) => {
    const { children } = props;
    return <chakra.pre {...getCoreProps(props)}>{children}</chakra.pre>;
  },
  table: Table.Root,
  thead: Table.Header,
  tbody: Table.Body,
  tr: (props) => <Table.Row>{props.children}</Table.Row>,
  td: (props) => <Table.Cell>{props.children}</Table.Cell>,
  th: (props) => <Table.Header>{props.children}</Table.Header>,
};

const renderer: Components = {
  ...defaults,
  h4: defaults.h3,
  h5: defaults.h3,
  h6: defaults.h3,
};

export default renderer;
