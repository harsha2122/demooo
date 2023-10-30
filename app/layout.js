"use client"
import './globals.css';
import { Inter } from 'next/font/google';
import '../style.css';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div class="sign-up">
      <div class="overlap-wrapper">
        <div class="overlap">
          <div class="component">
            <div class="overlap">
              <div class="rectangle"></div>
              <ul class="group">
                  <li class="div hh">
                    <img class="img" src="https://c.animaapp.com/DC1Sd5sj/img/vuesax-outline-category-2.svg" />
                    <a href="/Pages/Dashboard" class="text-wrapper">Dashboard</a>
                  </li>
                  <li class="group-2 dropdown hh">
                      <ul class="frame-wrapper">
                          <div class="frame-4">
                              <img class="img-2" src="https://c.animaapp.com/DC1Sd5sj/img/iconly-6.svg" />
                              <a href='/Pages/Cafe' class="text-wrapper-2">Businesses</a>
                              <img class="vuesax-outline-arrow" src="https://c.animaapp.com/DC1Sd5sj/img/vuesax-outline-arrow-down-3.svg" />
                          </div>
                      </ul>
                      <ul class="frame-2 dropdown-content3">
                          <li><a href="/Pages/Cafe" class="cafe-restaurant">Cafe &amp; Restaurant</a></li>
                          <li><a href='#' class="text-wrapper-3">Shopping</a></li>
                          <li><a href="#" class="building">Building &amp; Construction</a></li>
                          <li><a href="#" class="text-wrapper-3">Resourses</a></li>
                      </ul>
                  </li>
                  <li class="div-wrapper dropdown hh">
                    <li class="frame-3">
                      <img class="vector" src="https://c.animaapp.com/DC1Sd5sj/img/vector-9-2.svg" />
                      <div class="group-wrapper">
                        <div class="group-3">
                          <div class="frame-4">
                            <img class="img-2" src="https://c.animaapp.com/DC1Sd5sj/img/iconly-7.svg" />
                            <div class="text-wrapper-5">Events</div>
                            <img class="vuesax-outline-arrow1" src="https://c.animaapp.com/DC1Sd5sj/img/vuesax-outline-arrow-down-3.svg" />
                          </div>
                        </div>
                      </div>
                    </li><ul class="frame-2 dropdown-content4">
                          <li><a href='/Pages/Uevent' class="cafe-restaurant">Upcoming Events</a></li>
                          <li><a href='/Pages/Booked' class="text-wrapper-3">Events Booked</a></li>
                      </ul>
                </li>
                <img class="vector-2" src="https://c.animaapp.com/DC1Sd5sj/img/vector-10-1.svg" />
                <img class="vector-3" src="https://c.animaapp.com/DC1Sd5sj/img/vector-10-1.svg" />
                <li class="group-4 hh">
                  <div class="group-5">
                    <div class="frame-4">
                      <img class="iconly" src="https://c.animaapp.com/DC1Sd5sj/img/iconly-8.svg" />
                      <a href="/Pages/News" class="text-wrapper-5">News</a>
                    </div>
                  </div>
                </li>
                <img class="vector-4" src="https://c.animaapp.com/DC1Sd5sj/img/vector-12-1.svg" />
                <li class="group-6 hh">
                  <div class="group-7">
                    <div class="frame-4">
                      <img class="iconly-2" src="https://c.animaapp.com/DC1Sd5sj/img/iconly-9.svg" />
                      <a href="/Pages/Resources" class="text-wrapper-5">Resources</a>
                    </div>
                  </div>
                </li>
                <img class="vector-5" src="https://c.animaapp.com/DC1Sd5sj/img/vector-13-1.svg" />
                <li class="group-8 hh">
                  <div class="group-9">
                    <div class="frame-4">
                      <img class="img-2" src="https://c.animaapp.com/DC1Sd5sj/img/iconly-10.svg" />
                      <a href="/Pages/Oppurtunities" class="text-wrapper-5">Opportunities</a>
                    </div>
                  </div>
                </li>
                <img class="vector-6" src="https://c.animaapp.com/DC1Sd5sj/img/vector-11-1.svg" />
                <li class="group-10 hh">
                  <div class="frame-5">
                    <img class="iconly-3" src="https://c.animaapp.com/DC1Sd5sj/img/iconly-11.svg" />
                    <a href="/Pages/Rewwardss" class="text-wrapper-6">Rewards</a>
                  </div>
                </li>

              </ul>

              <div class="rectangle-2"></div>
              <div class="group-12">
                <div class="group-13">
                <input type="text" placeholder="Search anything..." required="" name="userName"  class="text-wrapper-9"/>
                  <img class="img" src="https://c.animaapp.com/DC1Sd5sj/img/vuesax-twotone-search-normal-2.svg" />
                </div>
              </div>
              <div class="group-14">
                <div class="overlap-group-wrapper">
                  <div class="overlap-group">
                    <div class="notifications-none dropdown1">
                      <button class="overlap-group-2 dropbtn1">
                        <img
                          class="vuesax-linear"
                          src="https://c.animaapp.com/DC1Sd5sj/img/vuesax-linear-notification-2.svg"
                        />
                        <div class="ellipse"></div>
                        <div class="text-wrapper-10">12</div>
                      </button>
                      <div class="dropdown-content1">
                        <h1 class="notih">Notification</h1>
                        <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</a>
                        <a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</a>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div class="overlap-2 dropdown">
                  <button class="group-15 dropbtn">
                    <img
                      class="vuesax-outline-arrow-2"
                      src="https://c.animaapp.com/DC1Sd5sj/img/vuesax-outline-arrow-down-4.svg"
                    />
                    <div class="group-16"><div class="text-wrapper-11">Ahmed</div></div>
                  </button>
                  <img class="ellipse-3" src="https://c.animaapp.com/DC1Sd5sj/img/ellipse-1@2x.png" />
                  <div class="dropdown-content">
                  <a href="/Pages/Account">My Profile</a>
                  <a href="#">Change Language</a>
                  <a href="https://adcciportal.com/pages/contact">Contact us</a>
                  <a href="#">FAQ</a>
                  <a href="#">Settings</a>
                  <a href='../index.html' class="lg-out"><img src='https://imgs.search.brave.com/CVkPv8ns5hlK9lc8NxDTkjIG4JmU20qmPnZvhkJq04U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/ZXMucHJvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA2L2lj/b25lLWRlY29ubmV4/aW9uLWRlY29ubmV4/aW9uLXJvdWdlLnBu/Zw' width="16px" height="16px" class="lgout-img" />Logout</a>
                  </div>
                </div>
                <a href='/Pages/Messages'><img class="vuesax-linear-2" src="https://c.animaapp.com/DC1Sd5sj/img/vuesax-linear-messages-3-2.svg" /></a>
              </div>
              <a href='/Pages/Dashboard'><img class="ADCCI-LL" src="https://c.animaapp.com/DC1Sd5sj/img/adcci-ll-2-2-1@2x.png" /></a>
            </div>
            
          </div>
          
          <div>{children}</div>
          <footer>
            <div class="container">
              <p>&copy; 2023 Abu Dhabi Government. All rights reserved.</p>
            </div>
          </footer>
          </div>
          
          </div>
          
          </div>

      </body>
    </html>
  )
}
