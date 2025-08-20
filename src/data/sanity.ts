import { createClient } from "next-sanity";

export const projectId = "hfiax7w8";
export const dataset = "production";

export const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
});

export const draftClient = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
    perspective: "previewDrafts",
});

export function getClient(preview = false) {
    return preview ? draftClient : client;
}