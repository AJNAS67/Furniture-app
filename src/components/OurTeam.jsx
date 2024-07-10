import React from "react";
import { Person1,Person2,Person3 ,Person4} from "../assets/index.js";

const OurTeam = () => {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
          {/* <!-- Start Column 1 --> */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={Person1} className="img-fluid mb-5" />
            <h3 clas>
              <a href="#">
                <span className="">Lawson</span> Arnold
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
          {/* <!-- End Column 1 --> */}

          {/* <!-- Start Column 2 --> */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={Person2} className="img-fluid mb-5" />

            <h3 clas>
              <a href="#">
                <span className="">Jeremy</span> Walker
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
          {/* <!-- End Column 2 --> */}

          {/* <!-- Start Column 3 --> */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={Person3} className="img-fluid mb-5" />
            <h3 clas>
              <a href="#">
                <span className="">Patrik</span> White
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
          {/* <!-- End Column 3 --> */}

          {/* <!-- Start Column 4 --> */}
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
            <img src={Person4} className="img-fluid mb-5" />

            <h3 clas>
              <a href="#">
                <span className="">Kathryn</span> Ryan
              </a>
            </h3>
            <span className="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>
              Separated they live in. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="mb-0">
              <a href="#" className="more dark">
                Learn More <span className="icon-arrow_forward"></span>
              </a>
            </p>
          </div>
          {/* <!-- End Column 4 --> */}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
