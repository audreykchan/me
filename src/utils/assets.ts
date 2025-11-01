/**
 * Utility function to get the correct asset path with base URL
 * This ensures assets work correctly when deployed to GitHub Pages with a base path
 */
export function getAssetPath(path: string): string {
  // If it's an external URL (http/https), return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // If it's a YouTube embed URL, return as-is
  if (path.includes('youtube.com/embed')) {
    return path;
  }
  
  // For local paths, prepend the base URL
  // import.meta.env.BASE_URL will be '/me/' in production, '/' in development
  const baseUrl = import.meta.env.BASE_URL;
  // Normalize the path: ensure it starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combine baseUrl and path, handling trailing/leading slashes
  // BASE_URL is typically '/me/' (with trailing slash) or '/' (with trailing slash)
  // normalizedPath is '/images/...' (with leading slash)
  // We want: baseUrl + path without leading slash, or handle both cases
  
  if (baseUrl === '/') {
    // In development, baseUrl is '/', so just return the normalized path
    return normalizedPath;
  }
  
  // In production, baseUrl is '/me/' (with trailing slash)
  // Remove leading slash from normalizedPath and combine
  const pathWithoutLeadingSlash = normalizedPath.startsWith('/') ? normalizedPath.slice(1) : normalizedPath;
  return `${baseUrl}${pathWithoutLeadingSlash}`;
}

