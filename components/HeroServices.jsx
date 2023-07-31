import React from "react";

// flex-wrap text-center mr-auto w-[100%]
const HeroServices = () => {
  return (
    <div className="w-fit mx-auto md:block m-auto z-10 h-[60vh] lg:mt-28">
      <div>
        <div className="hidden lg:block m-auto z-10">
          <div className="pt-16 bg-blend-darken pl-6">
            <div className="lg-css-typing text-6xl text-center">
              <p
                id="consult"
                className="text-slate-200 border-spacing-0  mx-auto"
              >
                <span className="text-slate-200 border-spacing-0">
                  CONSULT.
                </span>
                <span className="text-theme_peach-900 border-spacing-0">
                  DESIGN.
                </span>
                <span className="text-theme_green-900 border-spacing-0">
                  DEVELOP.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*========= MOBILE VERSION =======*/}
      <div className="lg:hidden">
        <div className="m-auto z-10 relative">
          <div className="hero-text pt-16 bg-blend-darken pl-6">
            <div className="css-typing text-6xl text-center">
              <p
                id="consult"
                className="text-slate-200 border-spacing-0  mx-auto"
              >
                CONSULT.
              </p>
              <p id="design" className="text-theme_peach-900 mx-auto">
                DESIGN.
              </p>

              <p
                id="develop"
                className="text-theme_green-900 border-spacing-0  mx-auto"
              >
                DEVELOP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
