import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getTravelPage() {
  return await fetchAPI("/travel-page", {
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
