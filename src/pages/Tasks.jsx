import TaskManager from "../components/features/TaskManager";

const Tasks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Task Management
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay organized and productive with our intuitive task management
          system. Add, edit, complete, and filter your tasks with ease.
        </p>
      </div>

      <TaskManager />

      <div className="mt-12 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✨ Smart Persistence
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Your tasks are automatically saved to local storage and persist
                between sessions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                🔍 Advanced Filtering
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Filter tasks by status (All, Active, Completed) with real-time
                counters.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✏️ Inline Editing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Click on any task to edit it inline with keyboard shortcuts
                support.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                🧹 Bulk Actions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Clear all completed tasks at once to keep your list clean and
                organized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
