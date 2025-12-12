import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getServicesPage() {
  return await fetchAPI("/services-page", {
    method: "GET",
    query: {
      populate: {
        serviceCategories: {
          populate: {
            services: {
              populate: ["promo"],
            },
          },
        },
      },
    },
  });
}
