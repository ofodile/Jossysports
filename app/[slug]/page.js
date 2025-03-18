import client from '../contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { IoMdTime } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import '../css/Post.css';
import RelatedPost from "../components/RelatedPost";


export default async function Post({ params }) {
  const { slug } = await params;

  const res = await client.getEntries({
    content_type: 'jossysports',
    'fields.slug': slug,
  });

  if (!res.items.length) {
    return <div className="container">Post not found</div>;
  }

  const data = res.items[0]?.fields || {};
  const youtubeURL = data.youtube || null;

  // Custom rendering options for rich text
  const renderOptions = {
    renderNode: {
      // Render paragraphs
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="post-paragraph">{children}</p>,

      // Render headings
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="post-heading-1">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="post-heading-2">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="post-heading-3">{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="post-heading-4">{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className="post-heading-5">{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6 className="post-heading-6">{children}</h6>,
      
      // Lists
      [BLOCKS.UL_LIST]: (node, children) => <ul className="post-ul">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="post-ol">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="post-li">{children}</li>,


      // Render images
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = node.data.target.fields;
        return (
          <img
            src={`https:${asset.file.url}`}
            alt={asset.title || 'Content image'}
            className="post-image"
          />
        );
      },

      // Render hyperlinks
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="post-link">
          {children}
        </a>
      ),
    },
  };

  return (
    <>
      <div className="container">
        <div className="section-1">
          <div className="category-container">
            <span className="post-category">{data?.category}</span>
          </div>

          <h1 className="post-title">{data?.title}</h1>
          <div className="meta-container">
            <span className="meta">Jossysports admin</span>
            <span className="meta">Posted on: {data?.date}</span>
          </div>

          {data.thumbnail?.fields?.file?.url && (
            <img
              src={`https:${data.thumbnail.fields.file.url}`}
              alt={data.title || "Post Image"}
              className="post-thumbnail"
            />
          )}

          <div className="post-content">
            {documentToReactComponents(data?.content, renderOptions)}
          </div>

          {youtubeURL && (
            <div className="youtube-container">
              <iframe
                width="100%"
                height="400"
                src={youtubeURL}
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <RelatedPost />
        </div>

        <div className="section-2">
          section 2
        </div>
      </div>
    </>
  );
}
