import React from 'react';
import '../styles/GeneralInformation.css';
import { FaBarcode } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';

const GeneralInformation = () => {
  return (
    <div className="general-info-form">
      <div className="form-group radio-group">
        <label>Item Type <BsInfoCircle className="info-icon" /></label>
        <div className="radio-options">
          <label><input type="radio" name="itemType" defaultChecked /> Goods</label>
          <label><input type="radio" name="itemType" /> Services</label>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" placeholder="Enter New Product Name" />
        </div>
        <div className="form-group">
          <label>SKU</label>
          <input type="text" placeholder="Enter SKU" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group barcode-group">
          <label>Barcode</label>
          <div className="input-icon-wrapper">
            <input type="text" placeholder="Enter 12 Digit Code" />
            <label>UPC</label>
            <FaBarcode className="barcode-icon" />
          </div>
        </div>
        <div className="form-group barcode-group">
          <label><span className="generate">Generate Barcode</span></label>
          <div className="input-icon-wrapper">
            <input type="text" placeholder="Enter 12 Digit Code" />
            <label>EAN</label>
            <FaBarcode className="barcode-icon" />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Category</label>
          <select><option>Select Category</option></select>
        </div>
        <div className="form-group">
          <label>Sub-Category</label>
          <select><option>Select Category</option></select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Brand/Manufacturer</label>
          <select><option>Select Category</option></select>
        </div>
      </div>

      <div className="form-group radio-group">
        <label>Product Type <BsInfoCircle className="info-icon" /></label>
        <div className="radio-options">
          <label><input type="radio" name="productType" defaultChecked /> Simple</label>
          <label><input type="radio" name="productType" /> Variant</label>
          <label><input type="radio" name="productType" /> Bundle</label>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Select Supplier</label>
          <select><option>Select Category</option></select>
        </div>
        <div className="form-group">
          <label>Supplier SKU</label>
          <select><option>Select Category</option></select>
        </div>
      </div>

      <div className="form-group">
        <label>Warehouse/Location</label>
        <select><option>Select Category</option></select>
      </div>

      <div className="form-group switch-toggle">
        <label>Advance</label>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default GeneralInformation;
