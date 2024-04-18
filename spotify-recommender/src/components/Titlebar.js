import './Titlebar.css'

const Titlebar = () => {
    return (
      <nav className="navbar static-top navbar-expand-lg" style={{backgroundColor: '#1DB954'}}>
        <div className="container-fluid" style={{padding: 0}}>
          <a className="navbar-brand" style={{backgroundColor: '#1DB954', zIndex: 999, padding: 10, paddingLeft: 12}} href="http://localhost:3000/">
            Spotify Recommender
          </a>
          <div className="scroll-container">
            <div className="scroll-text">Helped over 4 developers find new songs!</div>
            <div className="scroll-text">Helped over 4 developers find new songs!</div>
            <div className="scroll-text">Helped over 4 developers find new songs!</div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Titlebar;
  