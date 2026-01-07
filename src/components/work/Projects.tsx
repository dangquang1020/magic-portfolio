import { getPosts } from '@/utils/utils';
import { Column } from '@once-ui-system/core';
import { ProjectCard } from '@/components';

// Helper to prefix image paths with basePath for GitHub Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const withBasePath = (path: string) =>
  path?.startsWith('/') ? `${basePath}${path}` : path;

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(['src', 'app', 'work', 'projects']);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap='xl' marginBottom='40' paddingX='l'>
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images.map(withBasePath)}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={
            post.metadata.team?.map((member) => ({
              src: withBasePath(member.avatar),
            })) || []
          }
          link={post.metadata.link || ''}
        />
      ))}
    </Column>
  );
}
