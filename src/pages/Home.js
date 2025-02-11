import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto p-6">
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold">Hi, I'm [Your Name] 👋</h1>
        <p className="mt-2 text-lg">Software Engineer | Consultant | Tech Enthusiast</p>
        <Link to="/contact" className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg">Work With Me</Link>
      </section>

      {/* Services/Expertise */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Software Engineering</h3>
            <p>Building scalable web apps and APIs using React, GraphQL, and more.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Tech Consulting</h3>
            <p>Helping businesses optimize and modernize their tech stacks.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Personal Projects</h3>
            <p>Exploring IoT, fitness tracking, and budgeting tools.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Weather App (GraphQL)</h3>
            <p>Live weather forecasts with real-time data.</p>
            <Link to="/projects" className="text-blue-500">See More →</Link>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Expense Manager (Android)</h3>
            <p>Track and categorize spending on the go.</p>
            <Link to="/projects" className="text-blue-500">See More →</Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-center">Latest Blog Posts</h2>
        <p className="text-center mt-2">Sharing insights on software development, finance, and fitness.</p>
        <div className="text-center mt-4">
          <Link to="/blog" className="px-6 py-2 bg-blue-500 text-white rounded-lg">Read My Blog</Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
