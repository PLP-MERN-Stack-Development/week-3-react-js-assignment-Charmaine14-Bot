import Card from "../ui/Card";

const PostCard = ({ post }) => {
  return (
    <Card hover className="animate-fade-in">
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {post.title}
        </h3>
        <span className="text-sm text-blue-600 dark:text-blue-400">
          Post #{post.id}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
        {post.body}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          User ID: {post.userId}
        </span>
      </div>
    </Card>
  );
};

export default PostCard;
