import React from "react";
import "./dock.scss";

const Dock = () => {
  return (
    
    <footer className="dock">
      <div className="icon github">
        {/* <img src="/doc-icon/github-svgrepo-com.svg" alt="" /> */}
      </div>
      <div className="icon note">
        {/* <img src="/doc-icon/note-svgrepo-com.svg" alt="" /> */}
      </div>
      <div className="icon pdf">
        {/* <img src="/doc-icon/pdf-svgrepo-com.svg" alt="" /> */}
      </div>
      <div className="icon calendar">
        {/* <img src="/doc-icon/calendar-svgrepo-com.svg" alt="" /> */}
      </div>
      <div className="icon spotify">
        {/* <img src="/doc-icon/spotify-svgrepo-com.svg" alt="" /> */}
      </div>
      <div className="icon link">
        {/* <img src="/doc-icon/link-svgrepo-com.svg" alt="" /> */}
      </div>
      <div className="icon cli">
        {/* <img src="/doc-icon/cli-svgrepo-com.svg" alt="" /> */}
      </div>
    </footer>
  );
};

export default Dock;
