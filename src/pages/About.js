function About() {
    return (
      <div className="container mx-auto p-6">
        
        {/* Intro Section */}
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-2 text-lg text-gray-600">
            I'm [Your Name], a passionate software engineer and consultant specializing in web development, automation, and cloud solutions.
          </p>
        </section>
  
        {/* Experience & Skills */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Professional Experience</h2>
          <div className="mt-4">
            <p><strong>Software Engineer</strong> - [Your Company] (Year-Present)</p>
            <p>Working on scalable full-stack applications using React, Node.js, and GraphQL.</p>
          </div>
          <div className="mt-4">
            <p><strong>Technical Consultant</strong> - [Freelance/Company] (Year-Present)</p>
            <p>Helping startups and businesses with software architecture and cloud deployment.</p>
          </div>
        </section>
  
        {/* Personal Interests */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Beyond Coding</h2>
          <p className="mt-2">When I'm not coding, you can find me:</p>
          <ul className="list-disc list-inside mt-2">
            <li>🏋️ Training for the **SPARTAN Race Trifecta**</li>
            <li>🌱 Growing **watermelons, strawberries, and peaches** in my garden</li>
            <li>📚 Exploring new **investment strategies** in crypto and precious metals</li>
            <li>✈️ Traveling to exciting places</li>
          </ul>
        </section>
  
        {/* Contact Info */}
        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold">Let's Connect</h2>
          <p className="mt-2">Interested in working together? Reach out via:</p>
          <ul className="mt-2">
            <li><strong>Email:</strong> your.email@example.com</li>
            <li><strong>GitHub:</strong> github.com/yourusername</li>
            <li><strong>LinkedIn:</strong> linkedin.com/in/yourprofile</li>
          </ul>
        </section>
  
      </div>
    );
  }
  
  export default About;
  