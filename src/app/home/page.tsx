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
        <h1>{data?.pageBy?.title}</h1>
        {blocks.map((block: { name: string; attributesJSON: string }, index: number) => (
          <div key={index}>
            <pre>{JSON.stringify(block, null, 2)}</pre>
            <GutenbergRenderer
              blocks={[{
                name: block.name,
                attributes: JSON.parse(block.attributesJSON),
              }]}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {data.projects.nodes.map((project: { id: string; title: string; content: string; featuredImage: { node: { sourceUrl: string } } }) => (
          <div key={project.id} className="border p-4 rounded text-center">
            {project.featuredImage && (
              <img src={project.featuredImage.node.sourceUrl} alt={project.title} className="mb-4" />
            )}
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <div className="text-sm" dangerouslySetInnerHTML={{ __html: project.content }} />
          </div>
        ))}
      </div>
    </div>
  );
}
