import React from 'react'
import './detev.css'

const page = () => {
  return (
    <>
      <div class="untitled-page main">
      <section class="section1">
      <div class="flex_col">
          <a href='/Pages/Eventsingle' class="wrapper">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.75" stroke="#B0B0B0" stroke-width="0.5"/>
            <path d="M20.2969 15.1704H9.35938" stroke="#004C59" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.8281 20.6392L9.35938 15.1704L14.8281 9.70166" stroke="#004C59" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

              <h3 class="subtitle">Go back</h3>
          </a>
          <div class="wrapper1">
            <img class="bg-img" src='/assets/ff.png'/>
            <div class="box"><h4 class="highlight">Upcoming</h4></div>
          </div>
          <div class="wrapper2">
            <div class="flex_row">
              <div class="wrapper3">
                <h2 class="medium_title">Future Urbanism Smart City Summit and Expo</h2>
                <div class="wrapper4">
                <img
                      class="map-pin"
                      alt="Map pin"
                      src="https://c.animaapp.com/uCiIVWHM/img/map-pin-5.svg"
                    />
                  <h5 class="highlight1">World Trade Centre, Dubai</h5>
                </div>
              </div>
              <a href='/Pages/Payment' class="box1"><div class="text">Book Ticket</div></a>
            </div>
          </div>
          <div class="wrapper5">
            <div class="wrapper51">
              <div class="wrapper6">
                <h3 class="subtitle1">Starts on</h3>
                <h3 class="subtitle2">16 Oct 2023</h3>
              </div>
              <div class="wrapper61">
                <h3 class="subtitle1">Start Time</h3>
                <h3 class="subtitle21">7:30 pm</h3>
              </div>
              <div class="wrapper6">
                <h3 class="subtitle1">Ends On</h3>
                <h3 class="subtitle2">16 Oct 2023</h3>
              </div>
              <div class="wrapper62">
                <h3 class="subtitle11">Duration</h3>
                <h3 class="subtitle22">Full Day  </h3>
              </div>
            </div>
          </div>
          <h3 class="subtitle3_box">
            <span class="subtitle3"
              ><span class="subtitle3_span0">About Event<br /></span>
              <span class="subtitle3_span1"
                >Future Urbanism Expo is proud to co-locate with industry defining events that together make up the
                world’s largest tech ecosystem; GITEX GLOBAL, GITEX Impact, Ai Everything, Global DevSlam, XVERSE, and
                Future Electric Expo. One attendee ticket for all shows to let you discover the world’s most influential
                ecosystems advancing technology, showcasing innovation, pioneering change to enable digital
                transformation in Smart City Innovations, Infrastructure and Buildings, Sustainability Tech, ESG
                Strategies, Ai, robotics, HealthTech, DeepTech, EdTech, FinTech, Metaverse, Web 3.0, coding, future
                mobility and </span>
              <span class="subtitle3_span2">many more.</span></span>
          </h3>
          <h3 class="subtitle3_box">
            <span class="subtitle3"
              ><span class="subtitle3_span0">Website<br /></span>
              <span class="subtitle3_span1">https://www.futureurbanism.ae/</span></span>
          </h3>
          <div class="wrapper7">
            <h3 class="subtitle31">How to get there</h3>
            <div class="wrapper8"><img src='/assets/map.png'/></div>
          </div>
        </div>
      </section>

    </div>

    </>
  )
}

export default page