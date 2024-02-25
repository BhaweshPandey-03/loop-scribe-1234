// import { useState } from "react";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSendMessage = () => {
  //   // Add your contact form logic here
  //   console.log("Name:", name);
  //   console.log("Email:", email);
  //   console.log("Subject", subject);
  //   console.log("Message:", message);
  // };

  return (
    <div
      className="min-h-screen flex items-center justify-center light-blue-transparent-bg"
      style={{
        width: "100%",
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingRight: "90px",
        paddingLeft: "100px",
      }}
    >
      <div className="flex w-full max-w-screen-xl">
        {/* Map */}
        <div className="bg-white w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490810613!2d77.30125608918739!3d12.954459541829658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705772736831!5m2!1sen!2sin"
            style={{ width: "100%", height: "100%" }}
            title="Google Map"
          ></iframe>
        </div>

        {/* Form */}
        <div className="bg-white p-8 w-full lg:w-1/2 mr-4">
          <h2 className="text-2xl font-semibold mb-6 teal-text">Contact Us</h2>
          <p style={{ color: "grey" }}>We are open for any Feedback </p>
          {/* Contact Information */}
          <div className="flex mt-6" style={{ marginbottom: "50px" }}>
            {/* Address */}
            <div className="flex-1 mr-4">
              <h3 className="text-sm font-semibold  mb-2">
                Address:{" "}
                <p className="text-sm   mb-2" style={{ color: "grey" }}>
                  114 Spring Road, Bengaluru, Karnataka-800146
                </p>
              </h3>
            </div>

            {/* Email */}
            <div className="flex-1 mr-4">
              <h3 className="text-sm font-semibold ">
                Email:{" "}
                <p className="text-sm   mb-2">learningworld@lworld.com</p>
              </h3>
            </div>

            {/* Phone */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold ">Phone:  <p className="text-sm   mb-2">+91-9911223344</p></h3>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
