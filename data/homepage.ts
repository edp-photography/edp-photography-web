import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getHomepageData() {
  return await fetchAPI("/home-page", {
    method: "GET",
    query: {
      populate: {
        heroGallery: {
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
