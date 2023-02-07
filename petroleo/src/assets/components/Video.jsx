const Video = () => {
    return (
        <div className="video-container">
        <video autoPlay muted loop className="video-hero">
            <source src="/src/assets/img/video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        </div>
    );
  };
  
  export default Video;