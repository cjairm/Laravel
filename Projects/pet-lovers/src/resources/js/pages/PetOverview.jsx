import React from "react";

import Layout from "../components/Layout";

const PetOverview = () => {
    document.title = "PetOverview";

    return (
        <Layout tabTitle="Search">
            <div className="container shadow p-3 my-5 bg-white rounded">
                <div className="text-center">
                    <img
                        alt="Pet Name"
                        className="rounded"
                        src="/img/logo.png"
                        loading="lazy"
                        width="100"
                        height="100"
                    />
                </div>

                <p className="font-weight-normal my-2">
                    <span className="font-weight-bold mr-3">Cla: </span>Hello
                </p>
            </div>
        </Layout>
    );
};

export default PetOverview;
