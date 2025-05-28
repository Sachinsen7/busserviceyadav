import React from "react";

const Privacy = () => (
  <div className="py-10 px-4  bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-primary-blue mb-8">
        Privacy Policy
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-extrabold text-primary-blue mb-4">
          Your Privacy Matters
        </h2>
        <p className="text-neutralDark text-base font-bold mb-4">
          At Yadav Bus Services, we value your privacy. This policy outlines how
          we collect, use, and protect your personal information.
        </p>
        <h3 className="text-lg font-extrabold text-primary-blue mb-2">
          Data Collection
        </h3>
        <p className="text-neutralDark text-base font-bold mb-4">
          We collect your name, email, and phone number when you book a trip to
          process your request.
        </p>
        <h3 className="text-lg font-extrabold text-primary-blue mb-2">
          Data Usage
        </h3>
        <p className="text-neutralDark text-base font-bold">
          Your data is used to confirm bookings, send updates, and improve our
          services. We do not share your information with third parties.
        </p>
      </div>
    </div>
  </div>
);

export default Privacy;
