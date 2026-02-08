import { StrapiImage } from "@/components/strapi-image";
import { getCalendarsPage } from "@/data/calendars";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";

export default async function CalendarsPage() {
  const calendarsPage = await getCalendarsPage();

  const calendarImages = calendarsPage.data.imageGallery?.images ?? [];

  return (
    <section className="container-fluid mx-auto my-8">
      <h2 className={cn(typography({ variant: "h2" }), "mb-8 text-center")}>
        CALENDARS
      </h2>
      {calendarImages && calendarImages.length > 0 && (
        <div className="space-y-12 max-w-2xl mx-auto">
          {calendarImages.map(({ image, title, description }, index) => (
            <figure key={index} className="w-full">
              <div
                className="relative w-full"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              >
                <StrapiImage
                  image={image}
                  format="medium"
                  fill
                  className="object-cover md:hidden"
                  preload={index < 2}
                />
                <StrapiImage
                  image={image}
                  format="large"
                  fill
                  className="object-cover max-md:hidden"
                  preload={index < 2}
                />
              </div>

              <figcaption className="py-6">
                {title && (
                  <h3
                    className={cn(
                      typography({ variant: "h6", disableGutters: true }),
                      "font-bold",
                    )}
                  >
                    {title}
                  </h3>
                )}
                {description && (
                  <p
                    className={cn(
                      typography({ variant: "caption", disableGutters: true }),
                      "uppercase",
                    )}
                  >
                    {description}
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
