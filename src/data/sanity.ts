import { createClient } from "next-sanity";

export const projectId = "hfiax7w8";
export const dataset = "production";

export const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
});