import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title="Contact Us">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="Contact Us"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h1 className="card-title text-center">CONTACT US</h1>
              </div>
              <div className="card-body">
                <p className="card-text">
                  If you have any questions or need information about our
                  products, please feel free to contact us. We are available
                  24/7 to assist you.
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="fas fa-envelope"></i>{" "}
                    <a href="mailto:help@lightecommerce.com">
                      help@lightecommerce.com
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-phone"></i> 0111-3456789
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-mobile-alt"></i> 0300-0000-0000
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
