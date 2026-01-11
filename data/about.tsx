import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getAboutPage() {
  return await fetchAPI("/about-page", {
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
