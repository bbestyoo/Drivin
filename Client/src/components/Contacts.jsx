import React from "react";
import { Banner } from "./Header";
import Footer from "./Footer";

export const Contacts = () => {
  return (
    <div>
      <Banner topic={"Contact Us"} />
      <div className="flex flex-col md:flex-row px-5 md:px-20 gap-10 h-fit mb-40">
        <div className="">
          <iframe
            className="h-[50vh] md:h-full w-full md:w-[45vw]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0624048969!2d-74.30933573340538!3d40.69701926351075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1706449393193!5m2!1sen!2snp"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-yellow-400 uppercase text-l font-bold">
            CONTACT US
          </h3>
          <h1 className="font-bold text-4xl">
            If You Have Any Query, Please Contact Us
          </h1>
          <p className="text-md my-3 text-gray-500">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.{" "}
            <span className="text-yellow-400 hover:cursor-pointer hover:text-yellow-600">
              Download Now.
            </span>
          </p>

          <form className=" mt-4  w-[100%]" action="">
            <div className="flex gap-5 ">
              <input
                className="px-5 placeholder:text-gray-500 py-4 w-full bg-gray-100"
                placeholder="Your name"
                type="text"
              />
              <input
                className="px-5 placeholder:text-gray-500 py-4 w-full bg-gray-100"
                placeholder="Your email"
                type="text"
              />
            </div>
            <div className="flex  gap-5 mt-7">
              <input
                className="px-5 placeholder:text-gray-500 py-4 w-full bg-gray-100"
                placeholder="Subject"
                type="text"
              />
            </div>
            <input
              className="mt-7 placeholder:text-gray-500 w-full h-24 px-5 bg-gray-100"
              placeholder="messages"
              type="text"
            />
            <button className="px-5 mt-7 md:w-1/3 bg-yellow-400 text-white font-semibold py-4">
              Send messages
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
