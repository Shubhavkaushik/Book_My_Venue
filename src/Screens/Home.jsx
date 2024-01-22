import React  from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
const Home = () => {
    const [activeVideo, setActiveVideo] = useState(1);

    const handleVideoClick = (videoNumber) => {
      setActiveVideo(videoNumber);
    }


  return (
    <div><>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BookmyVenue</title>
    <link
      rel="icon"
      href="data:image/jpeg;base64,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"
      type="image/x-icon"
    />
    
    <link rel="stylesheet" href="../css/index.css" /> 
    
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Roboto:ital,wght@0,300;1,700&display=swap');\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    font-family:\"Poppins\",sans-serif;\n}\nheader{\n    z-index: 999;\n    position: absolute;\n    top:0;\n    left:0;\n    width:100%;\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n    padding: 15px 200px;\n    transition:0.5s ease;\n}\nheader .brand{\n    color: white;\n    font-size:1.5em;\n    font-weight:700;\n    text-transform: uppercase;\n    text-decoration: none;\n}\nheader .navigation{\n    position: relative;\n}\nheader .navigation .navigation-items a{\n    position: relative;\n    color:white;\n    font-size:1em;\n    font-weight: 500;\n    text-decoration: none;\n    margin-left:30px;\n    transition:0.3s ease;\n}\nheader .navigation .navigation-items a:before{\n    content:'';\n    position: absolute;\n    background-color: white;\n    width:0;\n    height:3px;\n    bottom:0;\n    left:0;\n    transition: 0.3s ease;\n}\n\nheader .navigation .navigation-items a:hover:before{\n    width:100%;\n}\nsection{\n    padding:100px 200px;\n}\n.home{\n     position: relative;\n     width:100%;\n     min-height: 100vh;\n     display:flex;\n     justify-content: center;\n     flex-direction: column;\n     background: cyan;\n}\n.home:before{\n    z-index:777;\n    content: '';\n    position:absolute;\n    background: rgba(3, 96, 251, 0.3);\n    width:100%;\n    height:100%;\n    top:0;\n    left:0;\n\n}\n.home .content{\n    z-index:888;\n    color:white;\n    width:70%;\n    margin-top:50px;\n    display: none;\n}\n.home .content.active{\n    display:block;\n}\n.home .content h1{\n    font-size:4em;\n    font-weight: 900;\n    text-transform:uppercase;\n    letter-spacing:5px;\n    line-height:75px;\n    margin-bottom:40px;\n}\n.home .content h1 span{\n    font-size: 1.2em;\n    font-weight: 600;\n}\n.home .content p{\n    margin-bottom: 65px;\n}\n .home .content a{\n     background: white;\n     padding:15px 35px;\n     color:#1680AC;\n     font-size:1.1em;\n     font-weight: 500;\n     text-decoration: none;\n     border-radius:2px;\n }\n .home .media-icons{\n     z-index:888;\n     position: absolute;\n     right:30px;\n     display: flex;\n     flex-direction: column;\n     transition: 0.5s ease;\n }\n .home .media-icons a{\n     color:white;\n     font-size: 1.6em;\n     transition: 0.3s ease;\n }\n .home .media-icons a:not(:last-child){\n     margin-bottom:20px;\n }\n .home .media-icons a:hover{\n     transform: scale(1.3);\n }\n .home video{\n     z-index:000;\n     position:absolute;\n     top:0;\n     left:0;\n     width:100%;\n     height:100%;\n     object-fit:cover;\n }\n .slider-navigation{\n     z-index:888;\n     position: relative;\n     display:flex;\n     justify-content: center;\n     align-items: center;\n     transform: translateY(80px);\n     margin-bottom: 12px;\n }\n .slider-navigation .nav-btn{\n        width:12px;\n        height:12px;\n        background: #fff;\n        border-radius:50%;\n        cursor:pointer;\n        box-shadow: 0 0 2px rgba(255,255,255,0.5);\n        transition: 0.3s ease;\n }\n .slider-navigation .nav-btn.active{\n     background:#2696E9;\n }\n .slider-navigation .nav-btn:not(:last-child){\n     margin-right:20px;\n }\n .slider-navigation .nav-btn:hover{\n     transform:scale(1.2);\n }\n\n.video-slide{\n    position: absolute;\n    width:100%;\n    clip-path:circle(0% at 0 50%);\n}\n.video-slide.active{\n    clip-path:circle(150% at 0 50%);\n    transition: 2s ease;\n    transition-property: clip-path;\n}\n\n @media(max-width: 1040px){\n    header{\n        padding: 12px 20px;\n    }\n    section{\n        padding:100px 20px;\n    }\n    .home .media-icons{\n        right:15px;\n    }\n    header .navigation{\n        display: none;\n        /* width:100%;\n        height:100vh;\n        top:0;\n        left:0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(1, 1, 1, 0.5); */\n    }\n    header .navigation.active{\n        display: none;\n        width:100%;\n        height:100vh;\n        top:0;\n        left:0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: rgba(1, 1, 1, 0.5);\n    }\n    header .navigation .navigation-items a{\n        color:white;\n        font-size:1.2em;\n        margin:20px;\n    }\n    header .navigation .navigation-items a:before{\n        background: #222;\n        height:5px;\n    }\n    header .navigation.active .navigation-items {\n        background: rgb(30, 224, 224);\n        width:600px;\n        max-width: 600px;\n        margin:20px;\n        padding:40px;\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        border-radius: 5px;\n        box-shadow: 0 5px 25px rgb(1 1 1 / 20%);\n    }\n    .menu-btn{\n        background: url(menu.png);\n        background-size:30px;\n        background-position:center;\n        width: 30px;\n        height: 30px;\n        cursor:pointer;\n        transition: 0.3s ease; \n    }\n    .menu-btn.active{\n        z-index:999;\n        background: url(close.png) no-repeat;\n        background-size:25px ;\n        /* background-position: center; */\n        width:30px;\n        height:30px;\n        cursor:pointer;\n        transition: 0.3s ease;\n    }\n }\n"
      }}
    />
    <header>
      <a href="#" className="brand">
        Book_my_Venue
      </a>
      <div className="menu-btn" />
      <div className="navigation">
        <div className="navigation-items">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>
      </div>
    </header>
    <section className="home">
    <video
        className={`video-slide ${activeVideo === 1 ? 'active' : ''}`}
        src="/videos/5starvenue.mp4"
        autoPlay
        muted
        loop
      />
     <video
        className={`video-slide ${activeVideo === 2 ? 'active' : ''}`}
        src="/videos/Birthday.mp4"
        autoPlay
        muted
        loop
      />
     <video
        className={`video-slide ${activeVideo === 3 ? 'active' : ''}`}
        src="/videos/friendparty.mp4"
        autoPlay
        muted
        loop
      />
      <video
        className={`video-slide ${activeVideo === 4 ? 'active' : ''}`}
        src="/videos/holi.mp4"
        autoPlay
        muted
        loop
      />
      <video
        className={`video-slide ${activeVideo === 5 ? 'active' : ''}`}
        src="/videos/luxury.mp4"
        autoPlay
        muted
        loop
      />
      <video
        className={`video-slide ${activeVideo === 6 ? 'active' : ''}`}
        src="/videos/meeting.mp4"
        autoPlay
        muted
        loop
      />
     
      <div  className={`content ${activeVideo === 1 ? 'active' : ''}`}>
        {/* Content for the 1 active video */}
        <h1>
          5-Star
          <br />
          <span>Venue</span>
        </h1>
        <p style={{color: "white"}}>
          Are you looking for a spectacular venue to host your upcoming event?
          Look no further! We are thrilled to invite you to explore our website
          and discover the perfect venue that will bring your event to life.
        </p>
        <Link to="/knowmore">Read More</Link>
      </div>
      <div className={`content ${activeVideo === 2 ? 'active' : ''}`}>
        {/* Content for the 2 active video */}
        <h1>
          Birthday
          <br />
          <span>Venue</span>
        </h1>
        <p>
          Birthdays are meant to be extraordinary, and we have just the thing to
          make yours truly memorable! We are delighted to extend a special
          invitation to you to discover the perfect venue for your upcoming
          birthday celebration on our website.
        </p>
        <Link to="/knowmore">Read More</Link>
      </div>
      <div className={`content ${activeVideo === 3 ? 'active' : ''}`}>
        {/* Content for the 3 active video */}
        <h1>
          Friend's
          <br />
          <span>Party</span>
        </h1>
        <p>
          Are you excited to honor your dear friend with an unforgettable party?
          We are thrilled to extend a warm invitation to you to explore our
          website and discover the ideal venue for your friend's upcoming
          celebration.
        </p>
        <Link to="/knowmore">Read More</Link>
      </div>
      <div className={`content ${activeVideo === 4 ? 'active' : ''}`}>
        {/* Content for the 4 active video */}
        <h1>
          Festival
          <br />
          <span>Celebration</span>
        </h1>
        <p>
          Are you ready to immerse yourself in the magic and excitement of a
          remarkable festival celebration? We are thrilled to invite you to
          explore our website and discover the perfect venue to host your upcoming
          festival extravaganza
        </p>
        <Link to="/knowmore">Read More</Link>
      </div>
      <div className={`content ${activeVideo === 5 ? 'active' : ''}`}>
        {/* Content for the 5 active video */}
        <h1>
          Luxurious
          <br />
          <span>Venue</span>
        </h1>
        <p>
          Are you envisioning a luxurious celebration that exudes opulence,
          sophistication, and timeless beauty? We are delighted to extend an
          exclusive invitation to you to explore our website and discover the
          perfect venue for your luxurious venue celebration.
        </p>
        <Link to="/knowmore">Read More</Link>
      </div>
      
      <div className={`content ${activeVideo === 6 ? 'active' : ''}`}>
        {/* Content for the 6 active video */}
        <h1>
          Meeting
          <br />
          <span>Venue</span>
        </h1>
        <p>
          Are you in search of a professional and inspiring venue to host your
          upcoming meetings? Look no further! We are excited to invite you to
          explore our website and discover the ideal meeting venue that will take
          your business gatherings to the next level.
        </p>
        <Link to="/knowmore">Read More</Link>
      </div>
      

      <div className="slider-navigation">
      <div id='1' className={`nav-btn ${activeVideo === 1 ? 'active' : ''}`} onClick={() => handleVideoClick(1)} />
        <div id='2' className={`nav-btn ${activeVideo === 2 ? 'active' : ''}`} onClick={() => handleVideoClick(2)} />
        <div id='3' className={`nav-btn ${activeVideo === 3 ? 'active' : ''}`} onClick={() => handleVideoClick(3)} />
        <div id='4' className={`nav-btn ${activeVideo === 4 ? 'active' : ''}`} onClick={() => handleVideoClick(4)} />
        <div id='5' className={`nav-btn ${activeVideo === 5 ? 'active' : ''}`} onClick={() => handleVideoClick(5)} />
        <div id='6' className={`nav-btn ${activeVideo === 6 ? 'active' : ''}`} onClick={() => handleVideoClick(6)} />
      </div>
    </section>
  </>
  </div>
  )
}

export default Home