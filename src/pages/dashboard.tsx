import React, { useState } from "react";
import { ImSpinner9 } from "react-icons/im";

// Custom Imports
import Layout from "@/components/layout";

const Dashboard = () => {

    const [ loading, setLoading ] = useState(false);

    if(loading) {
        return (
            <Layout>
                <div className="h-[80vh] w-full flex items-center justify-center">
                    <ImSpinner9 className="h-10 w-10 animate-spin"/>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            {/* this is protected page, only for the users who have done the payment */}
        </Layout>
    )
}

export default Dashboard;