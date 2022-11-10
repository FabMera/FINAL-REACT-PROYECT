import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white "
        style={{ backgroundColor: "#db7069" }}
      >
        <div className="container ">
          <hr className="my-5" />

          <section className="mb-2">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </div>
            </div>
          </section>
          <section className="text-center mb-5">
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github" />
            </a>
          </section>
        </div>

        <div
          className=" text-center p-3  "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright: Market Place in React.
        </div>
      </footer>
    </>
  );
};

export default Footer;
