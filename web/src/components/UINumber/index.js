import React from "react";

import "./styles.css";

export default function UINumber({ format, currency, children }) {
    return <span className="price">{children.toLocaleString(format, {style: 'currency', currency: currency})}</span>
};