import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getFashionPage() {
  return await fetchAPI("/fashion-page", {
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
