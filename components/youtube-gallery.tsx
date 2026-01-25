import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";
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
      className={cn("flex flex-col w-full max-w-2xl mx-auto gap-6", className)}
      {...props}
    >
      {items.map((item, index) => {
        return (
          <article key={index}>
            <YoutubeEmbed url={item.url} title={item.title} />
            <div className="py-6">
              <h3
                className={cn(
                  typography({ variant: "h6", disableGutters: true }),
                  "font-bold",
                )}
              >
                {item.title}
              </h3>
              {item.description && (
                <p
                  className={cn(
                    typography({ variant: "caption", disableGutters: true }),
                    "uppercase",
                  )}
                >
                  {item.description}
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
