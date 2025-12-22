import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getFineArtPage() {
  return await fetchAPI("/fine-art-page", {
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
