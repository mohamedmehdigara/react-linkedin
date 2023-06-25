import React from 'react';

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'ABC Inc.',
      location: 'New York, NY',
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'XYZ Corp.',
      location: 'San Francisco, CA',
    },
    // Add more sample jobs as needed
  ];

  return (
    <div className="jobs">
      <h2>Jobs</h2>
      {jobs.map((job) => (
        <div className="job" key={job.id}>
          <div className="job__title">{job.title}</div>
          <div className="job__company">{job.company}</div>
          <div className="job__location">{job.location}</div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;

