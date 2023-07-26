import React from 'react';

const MyNetworkPage = () => {
  return (
    <div className="my-network-page">
      <h2>People you may know in Grand Tunis Metropolitan Area</h2>
      <p>See all</p>

      {/* Suggestions */}
      <div className="network-suggestions">
        {/* Replace the following with the actual data */}
        <div className="network-suggestion">
          <h3>Hadhemi Gara</h3>
          <p>Chargé de Recrutement</p>
          <button>Connect</button>
        </div>
        {/* Add more suggestions here */}
      </div>

      {/* People you may know from University of Tunis El Manar */}
      <h2>People you may know from University of Tunis El Manar</h2>
      <p>See all</p>

      {/* Suggestions */}
      <div className="university-suggestions">
        {/* Replace the following with the actual data */}
        <div className="university-suggestion">
          <h3>SLAHEDDINE MNASRIA</h3>
          <p>HR Specialist</p>
          <p>University of Tunis El Manar</p>
          <button>Connect</button>
        </div>
        {/* Add more suggestions here */}
      </div>

      {/* People who follow freeCodeCamp also follow */}
      <h2>People who follow freeCodeCamp also follow</h2>
      <p>See all</p>

      {/* Suggestions */}
      <div className="fcc-followers">
        {/* Replace the following with the actual data */}
        <div className="fcc-follower">
          <h3>Kevin Naughton</h3>
          <p>Software Engineer at Google</p>
          <p>Followed by Baha eddine, Saif and 3 others you know</p>
          <button>Follow</button>
        </div>
        {/* Add more suggestions here */}
      </div>
    </div>
  );
};

export default MyNetworkPage;


