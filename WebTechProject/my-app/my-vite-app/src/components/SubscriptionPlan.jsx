import React from "react";


const SubscriptionPlan = () => {
  return (
    <div className="subscription-plan">
      <h2 className="subscription-title">Subscription Plans</h2>
      <div className="plans">
        {/* Basic Plan */}
        <div className="plan-card basic-plan">
          <h3>Basic</h3>
          <p>720p</p>
          <p className="price">€8.99/month</p>
          <p>Video and sound quality: Good</p>
          <p>Resolution: 720p (HD)</p>
          <p>Supported devices: TV, computer, mobile phone, tablet</p>
          <p>1 device at the same time</p>
        </div>
        {/* Standard Plan */}
        <div className="plan-card standard-plan">
          <h3>Standard</h3>
          <p>1080p</p>
          <p className="price">€13.99/month</p>
          <p>Video and sound quality: Great</p>
          <p>Resolution: 1080p (Full HD)</p>
          <p>Supported devices: TV, computer, mobile phone, tablet</p>
          <p>2 devices at the same time</p>
        </div>
        {/* Premium Plan */}
        <div className="plan-card premium-plan">
          <h3 className="most-popular">Premium</h3>
          <p>4K + HDR</p>
          <p className="price">€18.99/month</p>
          <p>Video and sound quality: Best</p>
          <p>Resolution: 4K (Ultra HD) + HDR</p>
          <p>Spatial audio included</p>
          <p>Supported devices: TV, computer, mobile phone, tablet</p>
          <p>4 devices at the same time</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
