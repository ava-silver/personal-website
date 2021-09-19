import Color from "color";
import { FC } from "react";

interface LinkProps {
  href: string;
  plain?: boolean;
}

const Link: FC<LinkProps> = ({ children, href, plain }) => {
  if (plain != null)
    children = (
      <span style={{ color: "var(--content-color)" }}>{children}</span>
    );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
