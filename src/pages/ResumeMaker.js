import React from 'react';

const ResumeMaker = () => {
  return (
    <div className='bg-[#F9F7F7] min-h-screen'>
      <div class = "flex justify-left items-center  gap-6 px-5">
      <a href="/" className="text-sm font-semibold leading-6 text-blue-gray">Home</a>
          <a href="./ResumeViewer" className="text-sm font-semibold leading-6 text-blue-gray">Resume Viewer</a>
          </div>
    <div className="resume-container grid grid-cols-1 md:grid-cols-2 gap-4  p-4">
      <div className="resume-edit bg-white rounded shadow-md p-4">
        <h1 className="edit-title">Fill out the field of your resume</h1>
        <form className="edit-form">
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="form-control w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="form-control w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>          
          <div className="form-group mb-4">
            <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
              LinkedIn
            </label>
            <input
              type="linkedin"
              id="linkedin"
              placeholder="https://www.linkedin.com/in/your-name/"
              className="form-control w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>          
          <div className="form-group mb-4">
            <label htmlFor="GitHub" className="block text-sm font-medium mb-1">
              GitHub
            </label>
            <input
              type="GitHub"
              id="GitHub"
              placeholder="https://github.com/your-name/"
              className="form-control w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
                    {/* Summary */}
                    <div className="form-group mb-4">
            <label htmlFor="summary" className="block text-sm font-medium mb-1">
              Summary
            </label>
            <textarea
              id="summary"
              placeholder="Your Summary"
              className="form-control w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
                    {/* Experience */}
                    <div className="form-group mb-4">
            <label htmlFor="experience" className="block text-sm font-medium mb-1">
              Experience
            </label>
            <textarea
              id="experience"
              placeholder="Your Experience"
              className="form-control w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
          {/* Education */}
          <div className="form-group mb-4">
            <label htmlFor="education" className="block text-sm font-medium mb-1">
              Education
            </label>
            <input
              type="text"
              id="education"
              placeholder="Your Education"
              className="form-control w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Skills */}
          <div className="form-group mb-4">
            <label htmlFor="skills" className="block text-sm font-medium mb-1">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              placeholder="Your Skills (comma separated)"
              className="form-control w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          {/* Add more fields as necessary */}
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="generate-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Generate Resume
            </button>
          </div>
        </form>
      </div>
      <div className="resume-preview bg-white rounded shadow-md p-4">
        <h1 className="preview-title">Preview</h1>
        <div className="preview-content">
          {/* Preview content will be dynamically generated */}
        </div>
      </div>
    </div>
    </div>

  );
};

export default ResumeMaker;
