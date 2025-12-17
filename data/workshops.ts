import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getWorkshopsPage() {
  return await fetchAPI("/workshops-page", {
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
