'use client';

import { gql, useQuery } from '@apollo/client';
import client from '../../lib/apolloClient';
import GutenbergRenderer from '../../components/GutenbergRenderer';
import Footer from '../../components/Footer';

const GET_HOME_AND_FOOTER_CONTENT = gql`
  query GetHomeAndFooterContent {
    # Home content query
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
    # Projects query
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
        custom {
          customUrl
          fieldGroupName
        }
      }
    }
    # Footer content query
    footerContent: page(id: "14", idType: DATABASE_ID) {
      footerContent {
        footerEmail {
          emailHeader
          emailLink
        }
        footerSocialLinks {
          socialsHeader
          githubLabel
          githubUrl
          linkedinLabel
          linkedinUrl
        }
        footerAboutMe {
          footerAboutMeHeader
          footerAboutMeContent
        }
      }
    }
  }
`;

interface Project {
  id: string;
  title: string;
  content: string;
  custom: {
    customUrl: string;
    fieldGroupName: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export default function Home() {
  const { data, loading, error } = useQuery(GET_HOME_AND_FOOTER_CONTENT, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract data
  const blocks = data?.pageBy?.blocks || [];
  const projects = data?.projects?.nodes || [];
  const footerContent = data?.footerContent?.footerContent;

  if (!footerContent) {
    console.warn('Footer content is missing or undefined');
  }

  return (
    <div>
      {/* Render Gutenberg blocks */}
      <div>
        {blocks.map((block: {
          [x: string]: string; name: string; attributesJSON: string 
}, index: number) => (
            <div key={index}>
            <GutenbergRenderer
              blocks={[
              {
                name: block.name,
                clientId: block.clientId,
                attributes: JSON.parse(block.attributesJSON || '{}'), // Parse attributesJSON safely
              },
              ]}
            />
            </div>
        ))}
      </div>

      {/* Render Projects */}
      <div className="max-w-screen-lg mx-auto px-4 md:px-0 bg-offWhite">
        <h2 className="eyebrow pb-10 text-eyebrow font-bold">Projects</h2>
        <h1 className="projects-title text-5xl font-bold tracking-[-0.04em]">Checkout my work</h1>
        <div className="pt-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <a
              key={project.id}
              href={project.custom.customUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block border p-4 rounded hover:shadow-lg transition-shadow duration-300"
            >
              {project.featuredImage && (
                <img
                  src={project.featuredImage.node.sourceUrl}
                  alt={project.title}
                  className="mb-4 w-full h-auto rounded"
                  width="300" // Set a standard width
                  height="200" // Set a standard height
                />
              )}
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <div className="text-sm" dangerouslySetInnerHTML={{ __html: project.content }} />
            </a>
          ))}
        </div>
      </div>

      {/* Render Footer */}
      {footerContent && <Footer footerData={footerContent} />}
    </div>
  );
}
