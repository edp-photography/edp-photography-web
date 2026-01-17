import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getGlamourPage() {
  return await fetchAPI("/glamour-page", {
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
