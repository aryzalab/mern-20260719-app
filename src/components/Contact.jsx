import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Feel free to Contact Us!</h2>
        <div className="contact-items">
          <form action="#">
            <h3>Contact Form</h3>
            <div className="flexbox">
              <div>
                <label htmlFor="fullname">Your full name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Your email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="What's your message?"
                required
                defaultValue={""}
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.662121468001!2d87.28372377588325!3d26.818885076703346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef4175e4f26a95%3A0x9b8526c7c4c7bc1c!2sCode%20IT!5e0!3m2!1sen!2snp!4v1785425813795!5m2!1sen!2snp"
            width={600}
            height={400}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
