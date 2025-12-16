import { cn } from "@/lib/utils";
import { YoutubeEmbed, YoutubeEmbedType } from "./youtube-embed";

export function YoutubeGallery({
  items,
  className,
  ...props
}: {
  items: YoutubeEmbedType[];
} & React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex w-full max-w-4xl mx-auto gap-6", className)}
      {...props}
    >
      {items.map((item, index) => (
        <YoutubeEmbed key={index} url={item.url} title={item.title} />
      ))}
    </div>
  );
}
