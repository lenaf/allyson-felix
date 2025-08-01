/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "http://cdn.sanity.io|cdn.sanity.io" }],
    },
};

export default nextConfig;
