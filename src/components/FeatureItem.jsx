import React from "react";

const FeatureItem = ({ icon, title, children }) => (
  <div className="feature-item">
    <img src={icon} alt={`${title} Icon`} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p className="feature-text">{children}</p>
  </div>
);

export default FeatureItem;
