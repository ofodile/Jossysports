import Link from 'next/link';
import '../css/category.css';
import client from '../contentfulClient';

export default async function SearchResults({ searchParams }) {
  // Extract search query and current page
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1', 10);
  const { query } = params;

  const itemsPerPage = 30;
  const skip = (currentPage - 1) * itemsPerPage;

  // Fetch search results
  const res = await client.getEntries({
    content_type: 'jossysports',
    'fields.title[match]': query,
    limit: itemsPerPage,
    skip,
  });

  const data = res.items;
  const totalItems = res.total;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <h2 className="search-latest">{`Search results for "${query}"`}</h2>
      <hr className="search-hr" />

      <div className="container">
        {data.length > 0 ? (
          data.map((item) => (
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
          ))
        ) : (
          <p className="no-results">No results found for "{query}"</p>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination">
            {currentPage > 1 && (
              <Link href={`/search?query=${query}&page=${currentPage - 1}`} className="pagination-link">
                Previous
              </Link>
            )}
            <span className="current-page">Page {currentPage}</span>
            {currentPage < totalPages && (
              <Link href={`/search?query=${query}&page=${currentPage + 1}`} className="pagination-link">
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
