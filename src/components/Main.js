import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="main__left">
        <div className="profile-info">
          <h2>Visit profile for Mohamed Mehdi Gara</h2>
        </div>
        <div className="post-box">
          <h2>Start a post</h2>
          <div className="post-options">
            <div className="post-option">
              <span role="img" aria-label="Photo">📷</span>
              <span>Photo</span>
            </div>
            <div className="post-option">
              <span role="img" aria-label="Video">🎥</span>
              <span>Video</span>
            </div>
            <div className="post-option">
              <span role="img" aria-label="Event">📅</span>
              <span>Event</span>
            </div>
            <div className="post-option">
              <span role="img" aria-label="Article">📝</span>
              <span>Write article</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main__middle">
        <h2>Sort by:</h2>
        <ul className="feed-filters">
          <li>Top</li>
          <li>feed updates</li>
        </ul>
        {/* Insert feed posts */}
        <div className="feed-post">
          <div className="post-content">
            <span className="post-text">
              Yousra Farhani
              <span className="post-label">Status is reachable</span>
            </span>
            <p>Computer science student@ESI Algiers | Data Science graduate @Samsung Innovation | Quantum Computing and Machine Learning Enthusiast | UX design instructor@GoMyCode Algeria | WTM Algiers Lead & GDG Algiers co-organiser</p>
            <p>1d • Edited • 1d • Edited •</p>
          </div>
          <div className="post-actions">
            <div className="post-likes">485</div>
            <div className="post-comments">32 comments</div>
            <div className="post-reposts">1 repost</div>
            <div className="post-buttons">
              <button>Like</button>
              <button>Comment</button>
              <button>Repost</button>
              <button>Send in a private message</button>
            </div>
          </div>
        </div>
        {/* Insert more feed posts */}
      </div>
      <div className="main__right">
        <h2>Jobs You May Be Interested In</h2>
        {/* Insert jobs content */}
      </div>
    </div>
  );
};

export default Main;
