import React from "react";
import "./styles.css";

// components
import Header from "../../components/Header";
import Catalog from "../../components/Catalog";

export default function Home() {
    return (
        <div className="home-screen">
            <Header />
            <Catalog />
        </div>
    )
}