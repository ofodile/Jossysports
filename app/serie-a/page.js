import client from '../contentfulClient';
import Link from "next/link";
import '../css/category.css';
import Adbanner1 from '../components/Adbanner1';
import Adbanner2 from '../components/Adbanner2';

export default async function SeriaA({ searchParams }) {
  // Get current page from searchParams
  const params = await searchParams;
  const currentPage = parseInt(params?.page || '1', 10);

  const itemsPerPage = 30;
  const skip = (currentPage - 1) * itemsPerPage;

  const res = await client.getEntries({
    content_type: 'jossysports',
    'fields.category': 'Serie A',
    limit: itemsPerPage,
    skip,
  });

  const data = res.items;
  const totalItems = res.total;

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <div className="ad1">
        <Adbanner1 />
      </div>
      <div className="ad2">
        <Adbanner2 />
      </div>
      <h2 className="latest">Serie A</h2>
      <hr className="hr" />

      <div className="container">
        {data.map((item) => (
          <Link href={`/${item.fields.slug}`} key={item.sys.id} className="link">
            <div className="img-container">
              <img
                src={`https:${item.fields.thumbnail?.fields?.file?.url || ''}`}
                alt={item.fields.title}
                className="thumbnail"
              />
              <h6 className="tag">{item.fields.category}</h6>
              <h2 className="title">{item.fields.title}</h2>
            </div>
          </Link>
        ))}

        {/* Pagination Controls */}
        <div className="pagination">
          {/* Previous Button */}
          {currentPage > 1 && (
            <Link href={`/?page=${currentPage - 1}`} className="pagination-link">
              Previous
            </Link>
          )}

          {/* Current Page Indicator */}
          <span className="current-page">Page {currentPage}</span>

          {/* Next Button */}
          {currentPage < totalPages && (
            <Link href={`/?page=${currentPage + 1}`} className="pagination-link">
              Next
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
