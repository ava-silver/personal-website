import * as React from 'react';
import deepmerge from 'deepmerge';
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

interface Defaults extends Components {
  /**
   * @deprecated Use `h1, h2, h3, h4, h5, h6` instead.
   */
  heading?: Components['h1'];
}

export const defaults: Defaults = {
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
      <Blockquote.Root mb='1'>
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
      <List.Item spacing={2} as="ul" pl={4} {...getCoreProps(props)}>
        {props.children}
      </List.Item>
    );
  },
  ol: (props) => {
    return (
      <List.Item spacing={2} as="ol" pl={4} {...getCoreProps(props)}>
        {props.children}
      </List.Item>
    );
  },
  li: (props) => {
    return <List.Item {...getCoreProps(props)}>{props.children}</List.Item>;
  },
  heading: (props) => {
    return (
      <Heading my={4} size={'lg'} {...getCoreProps(props)}>
        {props.children}
      </Heading>
    );
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

function ChakraUIRenderer(theme?: Defaults, merge = true): Components {
  const elements = {
    p: defaults.p,
    em: defaults.em,
    blockquote: defaults.blockquote,
    code: defaults.code,
    del: defaults.del,
    hr: defaults.hr,
    a: defaults.a,
    img: defaults.img,
    text: defaults.text,
    ul: defaults.ul,
    ol: defaults.ol,
    li: defaults.li,
    h1: defaults.h1,
    h2: defaults.h2,
    h3: defaults.heading,
    h4: defaults.heading,
    h5: defaults.heading,
    h6: defaults.heading,
    pre: defaults.pre,
    table: defaults.table,
    thead: defaults.thead,
    tbody: defaults.tbody,
    tr: defaults.tr,
    td: defaults.td,
    th: defaults.th,
  };

  if (theme && merge) {
    return deepmerge(elements, theme);
  }

  return elements;
}

export default ChakraUIRenderer;
