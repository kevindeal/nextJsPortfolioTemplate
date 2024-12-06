'use client';

import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apolloClient';
import GutenbergRenderer from '../../components/GutenbergRenderer';

const GET_HOME_CONTENT = gql`
  query GetHomeContent {
    pageBy(uri: "home") {
      title
      blocks {
        name
        attributesJSON
        dynamicContent
        originalContent
        saveContent
      }
    }
    projects(first: 3) {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        customUrl: custom {
        customUrl
        fieldGroupName
      }
      }
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(GET_HOME_CONTENT, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blocks = data?.pageBy?.blocks || [];

  console.log('Blocks:', blocks);

  return (
    <div>
      <div>
        {blocks.map((block: { name: string; attributesJSON: string }, index: number) => (
          <div key={index}>
            {/* <pre>{JSON.stringify(block, null, 2)}</pre> */}
            <GutenbergRenderer
              blocks={[{
                name: block.name,
                attributes: JSON.parse(block.attributesJSON),
              }]}
            />
          </div>
        ))}
      </div>

      <div className="max-w-screen-lg mx-auto px-4 md:px-0 bg-offWhite">
        <h2 className="eyebrow pb-10 text-eyebrow font-bold">Projects</h2>
        <h1 className="projects-title text-5xl font-bold tracking-[-0.04em]">Checkout my work</h1>
        <div className="pt-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.projects.nodes.map((project: { id: string; title: string; content: string; customUrl: string; featuredImage: { node: { sourceUrl: string } } }) => (
        <a
          key={project.id}
          href={project.customUrl?.customUrl} // Access the nested customUrl field
          target="_blank"
          rel="noopener noreferrer"
          className="block border p-4 rounded hover:shadow-lg transition-shadow duration-300"
        >
          {project.featuredImage && (
            <img
              src={project.featuredImage.node.sourceUrl}
              alt={project.title}
              className="mb-4 w-full h-auto rounded"
            />
          )}
          <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
          <div className="text-sm" dangerouslySetInnerHTML={{ __html: project.content }} />
        </a>
          ))}
        </div>
      </div>
    </div>
  );
}
