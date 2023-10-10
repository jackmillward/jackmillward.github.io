"use client";

import Footer from "./Footer";
import Header from "./Header";
// import ScrollToTop from "@/components/ScrollToTop";
import "../index.css";

const RootLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
            {/*<ScrollToTop/>*/}
        </>
    );
}

export default RootLayout;