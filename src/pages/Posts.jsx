import PostList from "../components/features/PostList";

const Posts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Explore Posts
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Browse through a collection of posts fetched from a live API. Search,
          filter, and navigate through paginated results.
        </p>
      </div>

      <PostList />

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            API Integration Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Real-time Search
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Search through posts by title or content with instant results.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Smart Pagination
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Navigate through large datasets with intelligent page controls.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Loading States
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Smooth loading indicators and error handling for better UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
