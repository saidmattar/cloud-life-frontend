import React from 'react';

class HomeContainer extends React.Component {

  render() {
    return (
      <div className="home-container">
      <div id="blue-box">
        <h1 id="big">Cloud Life</h1>
      </div>

      <div className="center">
        <p className="smallbox" id="box1">Cloud Life is your life, in the cloud! We are a secure document storage solution for anyone who wants to keep their documents online.</p>
        <p className="smallbox" id="box2">Keep your documents organized in groups, which you can share with your friends!</p>
        <p className="smallbox" id="box3">Our storage uses professional tools like Amazon S3 storage to keep your documents safe</p>
      </div>

      </div>
    );
  }
}

export default HomeContainer;
