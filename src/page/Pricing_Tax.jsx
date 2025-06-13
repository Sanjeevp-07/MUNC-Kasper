import React from 'react';
import '../styles/Pricing_Tax.css';

const Pricing_Tax = () => {
  return (
    <div className="pricing-tax-form">
      <div className="form-row">
        <div className="form-group">
          <label>Purchase Price</label>
          <input type="text" placeholder="Enter New Product Name" />
        </div>
        <div className="form-group">
          <label>Selling Price</label>
          <input type="text" placeholder="Enter SKU" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Wholesale Price / Bulk Price</label>
          <select>
            <option>Select Category</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Quantity</label>
          <input type="number" placeholder="In No." />
        </div>
        <div className="form-group">
          <label>Unit</label>
          <select>
            <option>Select Category</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>
            Discount Price <span className="tooltip">?</span>
          </label>
          <select>
            <option>Select Category</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Discount Period <span className="tooltip">?</span>
          </label>
          <div className="discount-period">
            <input type="date" />
            <input type="date" />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>
            Tax Rate <span className="tooltip">?</span>
          </label>
          <select>
            <option>Select Category</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>
            HSN / SAC <span className="tooltip">?</span>
          </label>
          <select>
            <option>HSN Code</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="toggle-container">
          <label>Price Include GST</label>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Pricing_Tax;
