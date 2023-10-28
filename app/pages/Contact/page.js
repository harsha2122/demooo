import React from 'react'
import './contact.css'

const page = () => {
  return (
    <>
      <div class="frame45">
      <div class="div45">
        <div class="div-245">
          <div class="text-wrapper45">Contact Us</div>
          <p class="lorem-ipsum-is">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <img class="line" src="img/line-35.svg" />
        <div class="div-345">
          <div class="div-445">
            <div class="input-wrapper45">
              <div class="input45">
                <div class="icons-left45"></div>
                <div class="content45"><input class="div-5" placeholder="First Name" type="text" /></div>
              </div>
            </div>
            <div class="input-wrapper45">
              <div class="input45">
                <div class="icons-left45"></div>
                <div class="content45"><input class="div-5" placeholder="Last Name" type="text" /></div>
              </div>
            </div>
            <div class="input-wrapper45">
              <div class="input45">
                <div class="icons-left45"></div>
                <div class="content45"><input class="div-5" placeholder="Email" type="email" /></div>
              </div>
            </div>
            <div class="group45">
              <div class="frame-wrapper45">
                <div class="div-wrapper45">
                  <div class="input-245">
                    <div class="icons-left45"></div>
                    <div class="content-245">
                      <input class="div-545" placeholder="Upload Image (optional)" type="file" />
                    </div>
                    <img class="element45" src="/assets/up.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="input-345">
              <div class="icons-left45"></div>
              <div class="content45"><textarea rows="13" cols="109" placeholder='Message' class="text-wrapper-245"></textarea></div>
            </div>
          </div>
          <a href='#' class="div-wrapper-245"><div class="text-wrapper-345">Submit</div></a>
        </div>
      </div>

      <hr class="dist" />
      <div class="div-645">
        <div class="div-745">
          <img class="phone-call45" src="/assets/p.png" />
          <div class="div-845">
            <div class="text-wrapper-445">Call Us</div>
            <div class="text-wrapper-545">0122222222222<br />Mobile 213587458<br />Office 162987639876</div>
          </div>
        </div>
        <div class="div-945">
          <div class="div-745">
            <img class="location45" src="/assets/l.png" />
            <div class="div-845">
              <div class="text-wrapper-445">Where to find Us</div>
              <p class="text-wrapper-545">Abu Dhabi Chamber Building, Corniche Street. Abu Dhabi<br />P.O.Box: 662</p>
            </div>
          </div>
          <div class="div-1045">
            <img class="email45" src="/assets/e.png" />
            <div class="div-1145">
              <div class="text-wrapper-445">Write to us</div>
              <p class="text-wrapper-545">
                <span class="span45">You can reach Abu Dhabi Chamber at<br /></span>
                <a href="mailto:contact.us@adcci.gov.ae" target="_blank" rel="noopener noreferrer"
                  ><span class="span45">contact.us@adcci.gov.ae</span></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page