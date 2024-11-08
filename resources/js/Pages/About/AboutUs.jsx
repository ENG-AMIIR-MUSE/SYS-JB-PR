import React from "react";
import Dashboard from "../../Dashboard/SideBar";
import SideBar from "../../Dashboard/SideBar";

function AboutUs(props) {
    return (
        <div className="text-black">
            <h1>welcomss,s,ssdalsdflasdjfkle</h1>
            <h1>{props.data}</h1>
        </div>
    );
}

AboutUs.layout = (page) => <SideBar children={page} />;
export default AboutUs;
