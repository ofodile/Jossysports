import client from '../contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import dynamic from 'next/dynamic';
import '../css/Post.css';
import AdBanner1 from '../components/Adbanner1';
import AdBanner2 from '../components/Adbanner2';;
import RelatedPost from "../components/RelatedPost";
import Adbanner4 from '../components/Adbanner4';
import Adbanner3 from '../components/Adbanner3';
import Adbanner5 from '../components/Adbanner5';
import Adbanner6 from '../components/Adbanner6';

export async function generateMetadata({ params }) {
  const resolvedParams = await params; 
  const { slug } = resolvedParams;

  
  const res = await client.getEntries({
    content_type: 'jossysports',
    'fields.slug': slug,
  });

  const data = res.items[0]?.fields || {};

  return {
    title: data?.title,
    description: data?.description,
    keywords: data?.keyword,
  };
}

export default async function Post({ params }) {
  const resolvedParams = await params; 
  const { slug } = resolvedParams;

  const res = await client.getEntries({
    content_type: 'jossysports',
    'fields.slug': slug,
  });

  if (!res.items.length) {
    return <div className="container">Post not found</div>;
  }

  const data = res.items[0]?.fields || {};
  const youtubeURL = data.youtube || null;

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="post-paragraph">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="post-heading-1">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="post-heading-2">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="post-heading-3">{children}</h3>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="post-ul">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="post-ol">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="post-li">{children}</li>,
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
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="post-link">
          {children}
        </a>
      ),
    },
  };

  return (
    <>
    <div className='ad1'>
        <AdBanner1 />
      </div>
      <div className='ad2'>
        <AdBanner2 />
      </div>
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

       
        <div className='ads'><Adbanner6 /></div>
       
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
      <div className='section-2'>
        <div className='ads'><Adbanner3 /></div>
        <div className='ads'><Adbanner3 /></div>
        <div className='ads'><Adbanner4 /></div>
        <div className='ads'><Adbanner5 /></div>
      </div>
    </div>
  </>
  );
}
