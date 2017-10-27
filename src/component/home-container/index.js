import React from 'react';

class HomeContainer extends React.Component {

  render() {
    return (
      <div className="home-container">
      <div id="blue-box">
        <h1 id="big">Cloud Life</h1>
      </div>

      <div className="center">
        <p className="smallbox">Cloud Life is your life, in the cloud! We are a secure document storage solution for anyone who wants to keep their documents online.</p>
        <p className="smallbox">Keep your documents organized in groups, which you can share with your friends!</p>
        <p className="smallbox">Our storage uses professional tools like Amazon S3 storage to keep your documents safe</p>
      </div>

      </div>
    );
  }
}

export default HomeContainer;
