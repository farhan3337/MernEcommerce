import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <div>
              <h1 className="mb-4">Privacy Policy for Light Ecommerce</h1>
              <p>
                At Light Ecommerce, accessible from www.lightecommerce.com, one
                of our main priorities is the privacy of our visitors. This
                Privacy Policy document contains types of information that is
                collected and recorded by Light Ecommerce and how we use it.
              </p>

              <h2 className="mt-4">Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to{" "}
                <a href="mailto:contact@example.com">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
