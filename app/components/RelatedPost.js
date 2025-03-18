import client from '../contentfulClient';
import Link from "next/link"
import Image from "next/image";
import '../css/RelatedPost.css'


export default async function RelatedPost() {
  
  const res = await client.getEntries({
    content_type: 'jossysports',
    limit: 6,  
  }); 

  const data = res.items; 
   
  return (
   <>
      <hr className="line"/>
      <h2 className="latest">Related Post</h2>
      <hr className="hr"/>
    <div className="related-container"> 
      {data.map((item) => (
          <Link href={`/${item.fields.slug}`} key={item.sys.id} className="link">
            
            <div className="related-img-container">
               <img
              src={`https:${item.fields.thumbnail?.fields?.file?.url || null}`}
              alt={item.fields.title}
              className="related-thumbnail"
              />
              <h6 className="related-tag">{item.fields.category}</h6>
            <h2 className="related-title">{item.fields.title}</h2>
            </div>
          </Link>
        ))}
    </div>
    </>
  );
}
