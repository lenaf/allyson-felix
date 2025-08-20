export function isPreviewMode() {
    return process.env.NODE_ENV === 'development' || 
           process.env.SANITY_PREVIEW_MODE === 'true';
}

export function getPreviewFromSearchParams(searchParams: { [key: string]: string | string[] | undefined }) {
    return searchParams.preview === 'true';
}