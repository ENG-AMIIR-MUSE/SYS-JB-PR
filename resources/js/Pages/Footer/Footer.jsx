import React from "react";
import Dashboard from "../../Dashboard/SideBar";
import SideBar from "../../Dashboard/SideBar";
function Footer() {
    return <div className="bg-red-500">Footer</div>;
}

Footer.layout = (page) => <SideBar children={page} />;
export default Footer;

// mida aan doonaye dooqayga
