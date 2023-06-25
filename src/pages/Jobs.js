import React from 'react';

const Jobs = () => {
  const jobList = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'ABC Technologies',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      title: 'UX Designer',
      company: 'XYZ Design Studio',
      location: 'New York, NY',
    },
    // Add more sample jobs as needed
  ];

  return (
    <div className="jobs">
      <h2>Jobs</h2>
      {jobList.map((job) => (
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


