import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bloxywebservice.co.uk",
      lastModified: new Date(),
    },
    {
      url: "https://bloxywebservice.co.uk/services",
      lastModified: new Date(),
    },
    {
      url: "https://bloxywebservice.co.uk/projects",
      lastModified: new Date(),
    },
    {
      url: "https://bloxywebservice.co.uk/information",
      lastModified: new Date(),
    },
    {
      url: "https://bloxywebservice.co.uk/contact",
      lastModified: new Date(),
    },
  ];
}
