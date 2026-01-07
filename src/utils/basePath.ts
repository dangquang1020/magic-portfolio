/**
 * Get the base path for the application.
 * This is used to prefix static assets when deploying to GitHub Pages.
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

/**
 * Prefix a path with the base path for static assets.
 * Use this for images and other static files in the public folder.
 *
 * @param path - The path to prefix (e.g., '/images/avatar.jpg')
 * @returns The prefixed path (e.g., '/magic-portfolio/images/avatar.jpg')
 */
export function withBasePath(path: string): string {
  const basePath = getBasePath();

  // Don't double-prefix
  if (basePath && path.startsWith(basePath)) {
    return path;
  }

  // Don't prefix external URLs
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//')
  ) {
    return path;
  }

  return `${basePath}${path}`;
}
