import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bloxywebservices.co.uk",
      lastModified: new Date(),
    },
    {
      url: "https://bloxywebservices.co.uk/services",
      lastModified: new Date(),
    },
    {
      url: "https://bloxywebservices.co.uk/projects",
      lastModified: new Date(),
    },
    {
      url: "https://bloxywebservices.co.uk/information",
      lastModified: new Date(),
    },
    {
      url: "https://bloxywebservices.co.uk/contact",
      lastModified: new Date(),
    },
  ];
}
