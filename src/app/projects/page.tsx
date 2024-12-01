import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apolloClient';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      nodes {
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        excerpt
      }
    }
  }
`;

export default function Projects() {
  const { data, loading, error } = useQuery(GET_PROJECTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {data.projects.nodes.map((project: any) => (
          <div key={project.id}>
            <img src={project.featuredImage?.node?.sourceUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
