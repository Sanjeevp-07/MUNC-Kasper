import React, { useState } from 'react';
import '../styles/Variants.css';

const tabs = [
  "Color", "Size", "Expiry", "Material", "Model", "Weight", 
  "Skin type", "Packaging type", "Flavour", "Gender"
];

const Variants = () => {
  const [activeTab, setActiveTab] = useState("Color");

  return (
    <div className="variant-container">
      <div className="variant-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`variant-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <button className="variant-tab add-more">+ Add More</button>
      </div>

      <div className="variant-form">
        <label className="variant-label">Select {activeTab}</label>
        <div className="variant-select-wrapper">
          <select className="variant-select">
            <option value="">Select Category</option>
            {/* Add dynamic or hardcoded options here if needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Variants;
