import React from "react";

const Resume = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-white border-2 border-[#FCB97D] p-64 mb-64">
        <h1 className="text-2xl font-bold mb-4">Resume</h1>
        <hr />

        <div className="mt-5">
          <h2 className="top-title">click here to download</h2>
          <a
            href="/Resume 2023.pdf"
            className="link inline-block bg-[#FCB97D] text-white px-4 py-2 rounded-full hover:bg-orange-500"
            download
          >
            Download Resume
          </a>
        </div>

        <div className="justify-content-center mt-5">
          <div>
            <h2 className="top-title">Proficiencies</h2>
            <ul>
              <li>
                HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js,
                IndexedDB, Node.js, Express.js, SQL, Sequelize, MongoDB,
                Mongoose, NoSQL, APIs, Templating, GraphQL.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;