import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white flex justify-center text-left mx-9 my-6 px-7 py-9 leading-7">
      <div className="w-96 px-5">
        <h1 className="text-[#8cecff] text-xl font-semibold leading-9">TAILWIND REACT CARS</h1>
        <p className="text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisie Excepturi odio
          dignissimos, dolore amet suscipit.
        </p>
        <div className="flex justify-center">
          <img src="https://img.icons8.com/fluency/48/null/instagram-new.png" className="py-6 px-1" />
          <img src="https://img.icons8.com/fluency/48/null/twitter.png" className="py-6 px-1" />
          <img src="https://img.icons8.com/fluency/48/null/facebook.png" className="py-6 px-1" />
          <img src="https://img.icons8.com/fluency/48/null/pinterest.png" className="py-6 px-1" />
        </div>
      </div>
      <div className="px-5 text-sm leading-7">
        <h3 className="text-slate-500 leading-7 font-semibold text-sm">
          More information
        </h3>
        <p>Contact us</p>
        <p>Mobile app</p>
        <p>Find a rental location</p>
        <p>Green policy</p>
      </div>
      <div className="px-5 text-sm leading-7">
        <h3 className="text-slate-500 leading-7 font-semibold text-sm">
          Business Center information
        </h3>
        <p>Corporate account</p>
        <p>Business solution</p>
        <p>Tour operators</p>
        <p>Travel agents</p>
      </div>
      <div className="px-5 text-sm leading-7">
        <h3 className="text-slate-500 leading-7 font-semibold text-sm">
          Company
        </h3>
        <p>About</p>
        <p>Careers</p>
        <p>Gold status</p>
        <p>Blog</p>
        <p>Press</p>
      </div>
      <div className="px-5 text-sm leading-7">
        <h3 className="text-slate-500 leading-7 font-semibold text-sm">
          Legal
        </h3>
        <p>Damage Management</p>
        <p>Deposit</p>
        <p>Security and privacy policy</p>
        <p>Terms and conditions</p>
        <p>Important information</p>
      </div>
    </div>
  );
}

export default Footer;
