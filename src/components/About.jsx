import React from "react";

const AboutPage = () => {
  window.scrollTo(0, 0);

  return (
    <div className="m-8 max-w-4xl mx-auto px-8 mt-4">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        Welcome to HeisenBlogz, your go-to source for informative and engaging
        content on finance, health, technology, and more. We are dedicated to
        providing our readers with valuable insights, tips, and updates on the
        latest trends in these fields.
      </p>

      <p className="mb-4">
        Our mission is to empower our readers with knowledge and information
        that can help them make informed decisions in their everyday lives. We
        aim to simplify complex topics and make them accessible to everyone.
      </p>

      <p className="mb-4">
        Our team of writers and editors are passionate about delivering
        high-quality content that is both informative and engaging. With
        backgrounds in finance, technology, and health, our team is dedicated to
        bringing you the most relevant and up-to-date information.
      </p>

      <p className="mb-4">
        Have a question or suggestion? We'd love to hear from you! Feel free to
        contact us at heisenblogz@gmail.com and we'll get back to you as soon as
        possible.
      </p>

      <p>
        Thank you for visiting HeisenBlogz. We hope you enjoy reading our
        content as much as we enjoy creating it!
      </p>
    </div>
  );
};

export default AboutPage;
