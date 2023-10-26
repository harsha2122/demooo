import React from 'react'
import './addo.css'

const page = () => {
  return (
    <>
        <div class="frame-6">
            <a href='/' class="group-17">
              <div class="overlap-group-3">
                <img class="vector-9" src="https://c.animaapp.com/Nprxwvsv/img/vector-1.svg" />
                <img class="vector-10" src="https://c.animaapp.com/Nprxwvsv/img/vector.svg" />
              </div>
            </a>
            <div class="text-wrapper-12">Go back</div>
          </div>
          <div class="frame-7">
            <div class="rectangle-3"></div>
            <div class="frame-8">
            <input type="text" placeholder="Type of Opportunity" required="" name="userName"  class="text-wrapper-13"/>
              
            </div>
          </div>
          <div class="frame-9">
            <div class="frame-10"><input type="file" placeholder="Upload business logo" required="" name="userName"  class="text-wrapper-13"/></div>
            <div class="frame-11">
              <img class="iconly-4" src="https://c.animaapp.com/Nprxwvsv/img/iconly-7.svg" />
              <div class="text-wrapper-14">Upload</div>
            </div>
          </div>
          
          <div class="frame-12">
            <div class="rectangle-3"></div>
            <div class="frame-13"><input type="text" placeholder="Location" required="" name="userName"  class="text-wrapper-13"/></div>
          </div>
          <div class="frame-14">
            <div class="rectangle-3"></div>
            <div class="frame-13"><input type="text" placeholder="No. of Employees" required="" name="userName"  class="text-wrapper-13"/></div>
          </div>
          <div class="frame-15">
            
            <div class="frame-13"><textarea rows="4" cols="33" type="text" placeholder="Product and services" required="" name="userName"  class="text-wrapper-13"/></div>
          </div>
          <div class="frame-16">
            <div class="frame-10"><input type="file" placeholder="Trade License" required="" name="tlis"  class="text-wrapper-13"/></div>
            <div class="frame-11">
              <label for="tlis"><img class="iconly-4" src="https://c.animaapp.com/Nprxwvsv/img/iconly-7.svg" /></label>
              <div class="text-wrapper-14">Upload</div>
            </div>
          </div>
          <div class="frame-17">
            <div class="frame-18"><input type="text" placeholder="Number of branch" required="" name="userName"  class="text-wrapper-13"/>
            {/* <img class="chevron-left" src="https://c.animaapp.com/Nprxwvsv/img/chevron-left-1.svg" /> */}
            </div>
          </div>
          <div class="frame-19">
            <div class="rectangle-3"></div>
            <div class="frame-13"><input type="text" placeholder="Sales Price AED" required="" name="userName"  class="text-wrapper-13"/></div>
          </div>
          <div class="frame-20">
            <div class="rectangle-3"></div>
            <div class="frame-13"><input type="text" placeholder="Yearly GMV" required="" name="userName"  class="text-wrapper-13"/></div>
          </div>
          <div class="frame-21"><textarea rows="4" cols="33" type="text" placeholder="About the Business" required="" name="userName"  class="text-wrapper-13"/></div>
          <div class="frame-22">
            <div class="rectangle-3"></div>
            <div class="frame-13"><input type="text" placeholder="How many years in business" required="" name="userName"  class="text-wrapper-13"/></div>
          </div>
          <div class="frame-23">
            <div class="rectangle-3"></div>
            <div class="frame-24">
              <input type="text" placeholder="Company type" required="" name="userName"  class="text-wrapper-13"/>
              {/* <img class="chevron-left" src="https://c.animaapp.com/Nprxwvsv/img/chevron-left-1.svg" /> */}
            </div>
          </div>
          <div class="frame-25">
            <div class="rectangle-3"></div>
            <div class="frame-13">
            <input type="text" placeholder="Industry" required="" name="userName"  class="text-wrapper-13"/>
              {/* <img class="chevron-left" src="https://c.animaapp.com/Nprxwvsv/img/chevron-left-1.svg" /> */}
            </div>
          </div>
          <div class="frame-26">
            <div class="rectangle-3"></div>
            <div class="frame-8"><input type="text" placeholder="Name of the Business" required="" name="userName"  class="text-wrapper-13"/></div>
          </div>
          <div class="frame-27">
          <input type="checkbox"/>
            <p class="p">
              I verify that I am an authorized representative of this organization and have the right to act on its
              behalf in the creation and management of this account. The organization and I agree to the additional
              terms of Peko. Terms and conditions
            </p>
          </div>
          <a href='/Pages/Oppusuc' class="frame-28"><div class="text-wrapper-15">Submit</div></a>
          <div class="text-wrapper-16">Add Opportunities</div>
    </>
  )
}

export default page