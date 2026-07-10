import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // In a real application, you'd replace the domain with your actual production URL
  // and dynamically map over product slugs if you had a database.
  const baseUrl = "https://doorseal.in"; // Replace with actual domain once live

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#catalog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
