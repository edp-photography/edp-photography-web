import { getServicesPage } from "@/data/services";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";

export default async function ServicesPage() {
  const services = await getServicesPage();
  const serviceCategories = services?.data?.serviceCategories;

  return (
    <section className="container-fluid mx-auto my-8">
      <div className="space-y-16">
        <h2 className={cn(typography({ variant: "h2" }), "mb-12 text-center")}>
          Services
        </h2>

        {serviceCategories?.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-8">
            {/* Category Title */}
            {category.title && (
              <h3
                className={cn(
                  typography({ variant: "h3" }),
                  "text-primary border-b border-border pb-3"
                )}
              >
                {category.title}
              </h3>
            )}

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {category.services?.map((service, serviceIndex) => {
                if (!service) return null;

                return (
                  <div key={serviceIndex}>
                    {/* Service Title */}
                    {(() => {
                      const match = service.title.match(/^(.+)\s*\(([^)]+)\)$/);
                      if (match) {
                        return (
                          <div className={cn(typography({ variant: "h4" }))}>
                            <h4>{match[1]}</h4>
                            <p
                              className={cn(
                                typography({
                                  variant: "subtitle1",
                                  disableGutters: true,
                                }),
                                "text-muted-foreground"
                              )}
                            >
                              {match[2]}
                            </p>
                          </div>
                        );
                      }
                      return (
                        <h4 className={cn(typography({ variant: "h4" }))}>
                          {service.title}
                        </h4>
                      );
                    })()}
                    {service.subtitle && (
                      <p className={cn(typography({ variant: "subtitle1" }))}>
                        {service.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    {service.description && (
                      <p
                        className={cn(
                          typography({ variant: "body2" }),
                          "text-muted-foreground"
                        )}
                      >
                        {service.description}
                      </p>
                    )}

                    {/* Price */}
                    {service.price && (
                      <div className={cn(typography({ variant: "body2" }))}>
                        <strong>Price:</strong> {service.price}
                      </div>
                    )}

                    {/* Duration */}
                    {service.duration && (
                      <div className={cn(typography({ variant: "body2" }))}>
                        <strong>Duration:</strong> {service.duration}
                      </div>
                    )}

                    {/* Location */}
                    {service.location && (
                      <div className={cn(typography({ variant: "body2" }))}>
                        <strong>Location:</strong> {service.location}
                      </div>
                    )}

                    {/* Included Items */}
                    {service.included && (
                      <div className={cn(typography({ variant: "body2" }))}>
                        <strong>Included:</strong>
                        {renderList(service.included)}
                      </div>
                    )}

                    {/* Not Included Items */}
                    {service.notIncluded && (
                      <div className={cn(typography({ variant: "body2" }))}>
                        <strong>Not Included:</strong>
                        {renderList(service.notIncluded)}
                      </div>
                    )}

                    {/* Add-ons */}
                    {service.addOns && (
                      <div className={cn(typography({ variant: "body2" }))}>
                        <strong>Add-ons:</strong>
                        {renderList(service.addOns)}
                      </div>
                    )}

                    {/* Promo */}
                    {service.promo && (
                      <div className="rounded-lg bg-muted/50 p-4 my-2">
                        {service.promo.title && (
                          <h5
                            className={cn(
                              typography({
                                variant: "subtitle1",
                                disableGutters: true,
                              }),
                              "mt-0 uppercase"
                            )}
                          >
                            {service.promo.title}
                          </h5>
                        )}
                        {service.promo.description && (
                          <p
                            className={cn(
                              typography({
                                variant: "body2",
                                disableGutters: true,
                              })
                            )}
                          >
                            {service.promo.description}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Notes */}
                    {service.notes && (
                      <p
                        className={cn(
                          typography({ variant: "body2" }),
                          "italic text-muted-foreground"
                        )}
                      >
                        {service.notes}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function renderList(text: string | null | undefined) {
  if (!text) return null;

  const items = text
    .split(/\n/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length === 0) return null;

  return (
    <ul className="list-disc mt-2 space-y-1 ml-4 pl-2">
      {items.map((item, index) => (
        <li key={index} className="pl-2">
          {item}
        </li>
      ))}
    </ul>
  );
}
