import React, { useState } from "react";
import "../styles/AddProduct.css";

import GeneralInformation from './GeneralInformation';
import PricingTax from './Pricing_Tax';
import Description from './Description';
import Variants from './Variants';

const steps = ["General Information", "Pricing & Tax", "Description & Media", "Variants"];

const AddProduct = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleAddMore = () => {
    setCurrentStep(0);
    setIsSubmitted(false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return <GeneralInformation />;
      case 1: return <PricingTax />;
      case 2: return <Description />;
      case 3: return <Variants />;
      default: return null;
    }
  };

  if (isSubmitted) {
    return (
      <div className="add-product-wrapper">
        <div className="add-product-card">
          <p className="message">The product has been successfully added.</p>
          <button className="add-more-btn" onClick={handleAddMore}>
            + Add More Product
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="add-product-wrapper">
      <h2 className="step-title">← Add New Products</h2>

        <div className="stepper-progress">
          {steps.map((label, index) => (
            <div key={index} className={`step-item ${index <= currentStep ? 'active' : ''}`}>
              <div className="step-icon">
                {index < currentStep ? (
                  <span className="checkmark">✔</span>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="step-text">
                <div className="step-main">{label}</div>
                {index === 0 && (
                  <div className="step-sub">
                    Basic Info + Category + Supplier + Inventory + Product Type
                  </div>
                )}
              </div>
              {index !== steps.length - 1 && <div className="step-line" />}
            </div>
          ))}
        </div>
      <div className="step-container">
        


        <div className="step-content">
          {renderStepContent()}
        </div>
      </div>

      {/* ✅ Sticky Footer Navigation */}
      <div className="form-footer sticky-footer">
        {currentStep > 0 && (
          <button onClick={goBack} className="step-nav-btn">
            ← Previous
          </button>
        )}
        <button className="step-nav-btn">Save as draft</button>
        <button className="step-nav-btn save-btn">
          {currentStep === steps.length - 1 ? "Submit" : "Save"}
        </button>
        <button onClick={goNext} className="step-nav-btn">
          {currentStep === steps.length - 1 ? "Finish" : "Next →"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
