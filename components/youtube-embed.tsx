import { cn } from "@/lib/utils";

export type YoutubeEmbedType = {
  title: string;
  url: string;
};

export function YoutubeEmbed({
  title,
  url,
  className,
  ...props
}: YoutubeEmbedType & React.ComponentProps<"div">) {
  return (
    <div className={cn("relative w-full aspect-video", className)} {...props}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
