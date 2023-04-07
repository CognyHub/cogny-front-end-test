import React from "react";
import "./styles.css";

// components
import Header from "../../components/Header";
import Catalog from "../../components/Catalog";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home-screen">
                <Catalog />
            </div>
        </>
    )
}