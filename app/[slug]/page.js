import client from '../contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import dynamic from 'next/dynamic';
import '../css/Post.css';
import AdBanner1 from '../components/Adbanner1';
import AdBanner2 from '../components/Adbanner2';
import RelatedPost from "../components/RelatedPost";
import Adbanner3 from '../components/Adbanner3';
import Adbanner4 from '../components/Adbanner4';
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

  const imageUrl = data.thumbnail?.fields?.file?.url
    ? `https:${data.thumbnail.fields.file.url}`
    : null;

  return {
    title: data?.title,
    description: data?.description,
    keywords: data?.keyword,
    openGraph: {
      title: data?.title,
      description: data?.description,
      url: `https://www.jossysports.com.ng/${slug}`, // Replace with your real domain
      type: 'article',
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: data?.title || 'Post image',
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.title,
      description: data?.description,
      images: imageUrl ? [imageUrl] : [],
    },
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

  // Setup ad rotation
  const ads = [<Adbanner3 key="ad3" />, <Adbanner4 key="ad4" />, <Adbanner5 key="ad5" />];
  let paragraphCounter = 0;
  let adIndex = 0;

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        paragraphCounter++;
        const adToRender = paragraphCounter % 2 === 0 ? ads[adIndex % ads.length] : null;
        if (adToRender) adIndex++;

        return (
          <>
            <p className="post-paragraph">{children}</p>
            {adToRender && <div className="ads">{adToRender}</div>}
          </>
        );
      },
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

  // Reset counters before rendering
  paragraphCounter = 0;
  adIndex = 0;

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
          <div data-banner-id="6071232"></div>

          <RelatedPost />
        </div>

        <div className='section-2'>
          <script async="async" data-cfasync="false" src="//stoolsymphony.com/8a133a2ee23fc0b56f53b0e04dfd9448/invoke.js"></script>
          <div id="container-8a133a2ee23fc0b56f53b0e04dfd9448"></div>
        </div>
      </div>
    </>
  );
}
