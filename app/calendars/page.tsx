import { getCalendarsPage } from "@/data/calendars";
import { toAbsoluteUrl } from "@/lib/strapi/utils";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";
import Image from "next/image";

export default async function CalendarsPage() {
  const calendarsPage = await getCalendarsPage();

  const calendarImages = calendarsPage.data.imageGallery?.images?.map(
    (image) => ({
      title: image.title,
      description: image.description,
      alt: image.image.alternativeText ?? "",
      src: toAbsoluteUrl(image.image.url),
      width: image.image.width!,
      height: image.image.height!,
    }),
  );

  return (
    <section className="container-fluid mx-auto my-8">
      <h2 className={cn(typography({ variant: "h2" }), "mb-8 text-center")}>
        CALENDARS
      </h2>
      {calendarImages && calendarImages.length > 0 && (
        <div className="space-y-12 max-w-2xl mx-auto">
          {calendarImages.map((image, index) => (
            <figure key={image.src} className="w-full">
              <div
                className="relative w-full"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              >
                <Image
                  fill
                  className="object-cover"
                  src={image.src}
                  alt={image.alt}
                  sizes="(max-width: 1536px) 100vw, 1536px"
                  priority={index < 2}
                />
              </div>

              <figcaption className="py-6">
                {image.title && (
                  <h3
                    className={cn(
                      typography({ variant: "h6", disableGutters: true }),
                      "font-bold",
                    )}
                  >
                    {image.title}
                  </h3>
                )}
                {image.description && (
                  <p
                    className={cn(
                      typography({ variant: "caption", disableGutters: true }),
                      "uppercase",
                    )}
                  >
                    {image.description}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
