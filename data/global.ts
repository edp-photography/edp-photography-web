import { fetchAPI } from "@/lib/strapi/fetch-api";
import { cache } from "react";

export const getGlobal = cache(async () => {
  return await fetchAPI("/global", {
    query: {
      populate: "seo",
    },
    next: {
      tags: ["global"],
    },
  });
});
