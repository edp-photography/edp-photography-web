import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getPortraitsPage() {
  return await fetchAPI("/portraits-page", {
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
