import client from './contentfulClient';
import Link from "next/link";
import SwiperSlider from "./components/SwiperSlider";
import './css/category.css';

export default async function Home({ searchParams }) {
  // Get current page from searchParams
  const params = await searchParams;
  const currentPage = parseInt(params?.page || '1', 10);

  const itemsPerPage = 30;
  const skip = (currentPage - 1) * itemsPerPage;

  const res = await client.getEntries({
    content_type: 'jossysports',
    limit: itemsPerPage,
    skip,
  });

  const data = res.items;
  const totalItems = res.total;

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <SwiperSlider />
      <h2 className="latest">Latest Post</h2>
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
        </div>

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
    </>
  );
}
