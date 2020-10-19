import React from "react";

function MainVideo() {
  return (
    <div className="mainVideo">
      <h3>mainVideo component</h3>
      <iframe
       title="html"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UB1O30fR-EE"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>HTML Crash Course For Absolute Beginners</h3>
      <p>
        In this crash course I will cram as much about HTML that I can. This is
        meant for absolute beginners. If you are interested in learning HTML but
        know nothing, then you are in the right place. We will be creating a
        cheat sheet with all of the common HTML5 tags, attributes, semantic
        markup, etc. We will not be focusing on CSS in this video. The CSS crash
        course will be released shortly after
      </p>
    </div>
  );
}

export default MainVideo;
