import { typography } from "@/lib/variants/typography";
import ReactMarkdown from "react-markdown";

const allowedElements = ["h3", "p"] as const;

const components: Record<
  (typeof allowedElements)[number],
  React.ComponentType
> = {
  h3: (props: React.ComponentProps<"h3">) => (
    <h1 className={typography({ variant: "h3" })} {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className={typography({ variant: "body2" })} {...props} />
  ),
};

export function MarkdownRenderer({ markdown }: { markdown?: string }) {
  if (!markdown) return null;
  return (
    <ReactMarkdown allowedElements={allowedElements} components={components}>
      {markdown}
    </ReactMarkdown>
  );
}
