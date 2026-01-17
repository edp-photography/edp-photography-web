import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getCalendarsPage() {
  return await fetchAPI("/calendars-page", {
    method: "GET",
    query: {
      populate: {
        imageGallery: {
          populate: {
            images: {
              populate: ["image"],
            },
          },
        },
      },
    },
  });
}
