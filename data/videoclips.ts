import { fetchAPI } from "@/lib/strapi/fetch-api";

export async function getVideoclipsPage() {
  return await fetchAPI("/videoclips-page", {
    method: "GET",
    query: {
      populate: {
        youtubeGallery: {
          populate: ["youtubeEmbeds"],
        },
      },
    },
  });
}
