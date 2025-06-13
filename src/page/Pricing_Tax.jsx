import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import  { useState } from 'react';

import '../styles/Pricing_Tax.css';

const Pricing_Tax = () => {

  const [includeGST, setIncludeGST] = useState(false);

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
        <div className="discount-period-wrapper">
          <label className="discount-label">
            Discount Period <BsInfoCircle className="info-icon" />
          </label>
          <div className="discount-period">
            <div className="date-input-wrapper">
              <FaRegCalendarAlt className="calendar-icon" />
              <input type="text" placeholder="From" />
            </div>
            <div className="date-input-wrapper">
              <FaRegCalendarAlt className="calendar-icon" />
              <input type="text" placeholder="To" />
            </div>
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

      <div className="form-little">
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
            <input type="checkbox" checked={includeGST} onChange={(e) => setIncludeGST(e.target.checked)} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      {includeGST && (
        <div className="form-little2 ">
          <div className="form-group">
            <label>
              GST Rate <span className="tooltip">?</span>
            </label>
            <select>
              <option value="0">0%</option>
              <option value="5">5%</option>
              <option value="12">12%</option>
              <option value="18">18%</option>
              <option value="28">28%</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing_Tax;
