import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid mt-3 pt-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">Admin Information</h4>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <strong>Admin Name:</strong> {auth?.user?.name}
                </div>
                <div className="mb-3">
                  <strong>Admin Email:</strong> {auth?.user?.email}
                </div>
                <div>
                  <strong>Admin Contact:</strong> {auth?.user?.phone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
