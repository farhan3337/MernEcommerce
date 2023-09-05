import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title="Dashboard - Ecommerce App">
      <div className="container-fluid mt-3 pt-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">User Information</h4>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <strong>Name:</strong> {auth?.user?.name}
                </div>
                <div className="mb-3">
                  <strong>Email:</strong> {auth?.user?.email}
                </div>
                <div>
                  <strong>Address:</strong> {auth?.user?.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
