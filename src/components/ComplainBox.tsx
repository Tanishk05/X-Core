import React, { useState } from 'react';

const ComplaintBox = () => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const [college, setCollege] = useState('');
  const [section, setSection] = useState('');
  const [issue, setIssue] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit =(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission logic here
    console.log({ name, branch, enrollmentNumber, college, section, issue, description });
    // Reset form fields if needed
    setName('');
    setBranch('');
    setEnrollmentNumber('');
    setCollege('');
    setSection('');
    setIssue('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-[#1C1C1D] rounded-lg shadow-md">
      <h2 className="text-white text-2xl font-semibold mb-4">Complaint Box</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="name">Name of Student</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 bg-gray-800 text-white rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="branch">Branch of Student</label>
          <input
            type="text"
            id="branch"
            className="w-full p-2 bg-gray-800 text-white rounded"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="enrollmentNumber">Enrollment Number</label>
          <input
            type="text"
            id="enrollmentNumber"
            className="w-full p-2 bg-gray-800 text-white rounded"
            value={enrollmentNumber}
            onChange={(e) => setEnrollmentNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            className="w-full p-2 bg-gray-800 text-white rounded"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="section">Section</label>
          <input
            type="text"
            id="section"
            className="w-full p-2 bg-gray-800 text-white rounded"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="issue">Select Issue</label>
          <select
            id="issue"
            className="w-full p-2 bg-gray-800 text-white rounded"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="Notes are not uploaded">Notes are not uploaded</option>
            <option value="Site is not working">Site is not working</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="description">Description</label>
          <textarea
            id="description"
            className="w-full p-2 bg-gray-800 text-white rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#6556CD] text-white py-2 rounded hover:bg-purple-700 transition duration-200"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintBox;
