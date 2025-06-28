import { useState, useMemo } from "react";
import { useApi } from "../../hooks/useApi";
import PostCard from "./PostCard";
import SearchBar from "./SearchBar";
import LoadingSpinner from "../ui/LoadingSpinner";
import Button from "../ui/Button";
import { API_ENDPOINTS } from "../../utils/constants";

const PostList = () => {
  const { data: posts, loading, error, refetch } = useApi(API_ENDPOINTS.POSTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const filteredPosts = useMemo(() => {
    if (!posts) return [];

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [posts, searchQuery]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner size="lg" />
        <span className="ml-3 text-gray-600 dark:text-gray-400">
          Loading posts...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 dark:text-red-400 mb-4">
          Error loading posts: {error}
        </div>
        <Button onClick={refetch}>Try Again</Button>
      </div>
    );
  }

  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        placeholder="Search posts by title or content..."
      />

      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Showing {paginatedPosts.length} of {filteredPosts.length} posts
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {filteredPosts.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 mb-4">
            No posts found for "{searchQuery}"
          </div>
          <Button onClick={() => handleSearch("")}>Clear Search</Button>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <Button
            variant="secondary"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => {
                return (
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 2
                );
              })
              .map((page, index, array) => (
                <div key={page} className="flex items-center">
                  {index > 0 && array[index - 1] !== page - 1 && (
                    <span className="px-2 text-gray-400">...</span>
                  )}
                  <Button
                    variant={currentPage === page ? "primary" : "secondary"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="min-w-[2.5rem]"
                  >
                    {page}
                  </Button>
                </div>
              ))}
          </div>

          <Button
            variant="secondary"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostList;