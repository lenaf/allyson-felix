import { createClient } from "next-sanity";

export function getClient(preview = false) {
    const client = createClient({
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_DATASET,
        apiVersion: "2025-08-20",
        useCdn: false,
        token: preview ? process.env.SANITY_API_TOKEN : undefined,
        perspective: preview ? "previewDrafts" : "published",
        stega: {
            enabled: preview,
            studioUrl: process.env.NODE_ENV === 'development'
                ? 'http://localhost:3333'
                : process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
        },
    });
    return client;
}