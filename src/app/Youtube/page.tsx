import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function YoutubePage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-teal-400 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-wide">
          MY YOUTUBE CONTENT!
        </h1>

        {/* Divider with icon */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="w-24 h-1 bg-white"></div>
          <div className="text-white text-3xl font-bold">&lt;/&gt;</div>
          <div className="w-24 h-1 bg-white"></div>
        </div>
      </section>

      {/* Content Section */}
      <section
  className="page-section text-white mb-0"
  id="youtube"
  style={{ backgroundColor: "#66CCCC" }}
>
  <div
    className="container"
    style={{ backgroundColor: "#66CCCC" }}
  >
    {/* About Section Heading */}
    

    {/* Icon Divider */}
    <div className="divider-custom divider-light">
      <div className="divider-custom-line"></div>

      <div className="divider-custom-icon">
        <i
          aria-hidden="true"
          className="fas fa-code"
        ></i>
      </div>

      <div className="divider-custom-line"></div>
    </div>
  </div>
</section>
<section
  className="page-section text-white mb-0"
  id="youtube"
  style={{ backgroundColor: "#66CCCC" }}
>
  <div className="container" style={{ backgroundColor: "#66CCCC" }}>
    {/* Section Heading */}

    {/* Icon Divider */}
    <div className="divider-custom divider-light">
      <div className="divider-custom-line" />
      <div className="divider-custom-icon">
        <i aria-hidden="true" className="fas fa-code" />
      </div>
      <div className="divider-custom-line" />
    </div>

    {/* Video Section 1 */}
    <div className="video-embed-div text-center">
      <div className="div-only-mobile">
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/g_P9J9HVbSg?si=MwvyYujqVjU1Hhdo"
            loading="lazy"
            allowFullScreen
            data-aos="zoom-in-down"
            title="YouTube Playlist 1"
          />
        </div>
      </div>
     {/*  */} <div className="div-no-mobile">
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/g_P9J9HVbSg?si=MwvyYujqVjU1Hhdo"
            loading="lazy"
            allowFullScreen
            data-aos="zoom-in-right"
            title="YouTube Playlist 2"
          />
        </div>
      </div>
    </div>

    {/* Video Section 2 */}
    <div className="video-embed-div text-center">
      <div className="div-no-mobile">
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/g_P9J9HVbSg?si=MwvyYujqVjU1Hhdo"
            loading="lazy"
            allowFullScreen
            data-aos="zoom-in-left"
            title="YouTube Playlist 3"
          />
        </div>
      </div>
      <div className="div-only-mobile">
        <div className="video-container">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/g_P9J9HVbSg?si=MwvyYujqVjU1Hhdo"
            loading="lazy"
            allowFullScreen
            data-aos="zoom-in-up"
            title="YouTube Playlist 4"
          />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}