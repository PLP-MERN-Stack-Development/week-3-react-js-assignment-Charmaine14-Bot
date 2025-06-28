import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const Home = () => {
  const features = [
    {
      title: "Task Management",
      description:
        "Create, edit, and organize your tasks with ease. Mark them as complete and filter by status.",
      icon: "✅",
      link: "/tasks",
      linkText: "Manage Tasks",
    },
    {
      title: "Browse Posts",
      description:
        "Explore a collection of posts with search functionality and pagination for better navigation.",
      icon: "📝",
      link: "/posts",
      linkText: "View Posts",
    },
    {
      title: "Dark Mode",
      description:
        "Toggle between light and dark themes for a comfortable viewing experience at any time.",
      icon: "🌙",
      link: "#",
      linkText: "Toggle Theme",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-bounce-in">
          Welcome to TaskMaster
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          A modern, responsive React application demonstrating component
          architecture, state management, and API integration with a beautiful
          Tailwind CSS design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started with Tasks
            </Button>
          </Link>
          <Link to="/posts">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Explore Posts
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              hover
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {feature.description}
              </p>
              {feature.link !== "#" ? (
                <Link to={feature.link}>
                  <Button variant="ghost" size="sm">
                    {feature.linkText}
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const themeToggle = document.querySelector(
                      'nav button[class*="ghost"]'
                    );
                    if (themeToggle) themeToggle.click();
                  }}
                >
                  {feature.linkText}
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Built With Modern Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            "React",
            "Tailwind CSS",
            "React Router",
            "Custom Hooks",
            "Context API",
            "Local Storage",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          This application showcases modern React development practices
          including component composition, state management with hooks, API
          integration, responsive design, and accessibility features.
        </p>
      </div>
    </div>
  );
};

export default Home;
