import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getWeddingsPage() {
  return await fetchAPI("/weddings-page", {
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
