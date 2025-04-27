import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-white shadow-inner">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} FeedbackHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
