import React from "react";
import Mybutton2 from "./Mybutton2";

const Form = () => {
  return (
    <>
      <div className=" bg-transparent blur-0 p-6 rounded-xl shadow-outside-shadow">
        <form className="mx-auto max-w-md">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-md text-dark bg-transparent border-0 border-b-2 appearance-none  border-dark focus:border-accent focus:outline-none focus:ring-0  peer"
              placeholder=" "
              required
            />
            <label
              // for="floating_email"
              className="peer-focus:font-bold absolute font-medium text-md text-dark  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="grid smm:grid-cols-2 smm:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-md text-dark bg-transparent border-0 border-b-2 border-dark appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
                placeholder=" "
                required
              />
              <label
                //for="floating_name"
                className="peer-focus:font-bold absolute font-medium text-md text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_subject"
                id="floating_subject"
                className="block py-2.5 px-0 w-full text-md text-dark bg-transparent border-0 border-b-2 border-dark appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
                placeholder=" "
                required
              />
              <label
                //for="floating_subject"
                className="peer-focus:font-bold absolute font-medium text-md text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Subject
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_message"
              id="floating_message"
              className="block py-2.5 px-0 w-full text-md text-dark bg-transparent border-0 border-b-2 border-dark appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              required
            />
            <label
              //for="floating_message"
              className="peer-focus:font-bold font-medium absolute text-md text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <Mybutton2 title="Let's talk" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
