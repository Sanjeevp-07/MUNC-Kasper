import React from 'react';
import '../styles/Description.css';

const Description = () => {
  return (
    <div className="description-container">
      <div className="form-section">
        <label htmlFor="product-description" className="label">Description</label>
        <textarea
          id="product-description"
          placeholder="Write Description about the product"
          className="description-textarea"
        />
      </div>

      <div className="image-upload-box">
        <div className="upload-content">
          <img
            src="/icons/image-upload-icon.png" // Replace with your image path or SVG
            alt="upload"
            className="upload-icon"
          />
          <p>
            <strong>Drag your image here</strong>, or <span className="browse-text">browse</span>
          </p>
          <p className="file-types">Supports JPEG, PNG, JPG</p>
        </div>
      </div>

      <div className="seo-section">
        <div className="seo-input">
          <label className="label">SEO Meta Title</label>
          <input type="text" placeholder="Add Title" />
        </div>
        <div className="seo-input">
          <label className="label">SEO Meta Description</label>
          <input type="text" placeholder="Write Description" />
        </div>
      </div>

      <div className="ai-keywords-section">
        <div className="keyword-label">
          <span className="star">★</span> AI Keywords
        </div>
        <p className="ai-suggestion">
          Based on your input data, we've identified <strong>5 keywords</strong> that may be a good fit for your product.
        </p>
        <div className="keyword-tags">
          <span className="tag">Fittings ✕</span>
          <span className="tag">Hinges ✕</span>
          <span className="tag">Construction hardware materials ✕</span>
          <span className="tag">Door and Windows ✕</span>
          <span className="tag">Building ✕</span>
        </div>
        <input type="text" className="keyword-input" placeholder="Type Keywords" />
      </div>
    </div>
  );
};

export default Description;
