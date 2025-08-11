import React from "react";
import { Link } from "react-router-dom";

export default function AgreementBox() {
  return (
    <div className="mb-4 text-sm text-gray-700">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          required
          className="form-checkbox accent-blue-800"
        />
        <span>
          By continuing, you agree to Legafin's{" "}
           <Link to="/terms-of-use#terms" className="text-blue-800 underline mx-1">
            Terms & Conditions
          </Link>
          and
           <Link to="/terms-of-use#privacy" className="text-blue-800 underline mx-1">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
    </div>
  );
}