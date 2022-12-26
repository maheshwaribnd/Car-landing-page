import React from "react";

function Form() {
  return (
    <div className="bg-white">
      <div className="flex justify-around bg-black mx-10 my-12 px-5 py-8">
        <div className="text-white my-8 mx-14">
          <h1 className="text-2xl font-bold">
            Personalized deals according to your profile
          </h1>
          <p className="text-sm">Sign up for regular car hire deals</p>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded px-1 py-1.5"
            />
            <button className="bg-[#8cecff] font-bold px-4 py-2 mx-4 my-6 rounded">
              Subscribe
            </button>
          </div>
          <div className="text-white">
            <p className="text-xs w-72">
              We keep your personal information secure.{" "}
              <a href="/" className="text-[#8cecff]">
                Read our privacy policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
