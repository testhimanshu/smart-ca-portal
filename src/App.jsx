// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingContactIcons from "./components/FloatingContactIcons";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdvertisementLine from "./components/AdvertisementLine";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "sonner";

// General Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Services from "./pages/Services";

// Service Detail Pages
import BusinessRegistration from "./pages/Businessregistration";
import Licenses from "./pages/licenses";
import IntellectualPropertyRights from "./pages/intellectualpropertyrights";
import CompanySecretarialServices from "./pages/companysecretarialservices";
import AccountingAndAudit from "./pages/accountingandaudit";
import Financing from "./pages/financing";
import TaxAndGSTCompliance from "./pages/taxandgstcompliance";
import FEMAAndRBICompliances from "./pages/femaandrbicompliances";
import SEBICompliances from "./pages/sebicompliances";
import RDNCLTNCLATMatters from "./pages/RDNCLTNCLATMatters";
import SecretarialAuditAndDueDiligence from "./pages/secretarialauditandduediligence";
import LabourLawCompliance from "./pages/LabourLawCompliance";
import CorporateGovernanceAdvice from "./pages/CorporateGovernanceAdvice";
import ManagementConsultation from "./pages/managementconsultation";
import GeneralAdministration from "./pages/generaladministration";
import VentureFunding from "./pages/venturefunding";
import Merger from "./pages/Merger";
import Liaisoning from "./pages/Liaisoning";
import InsolvencyAndBankruptcy from "./pages/insolvencyandbankruptcy";
//import Legal from "./pages/legal";
import StartYourBusiness from "./pages/Startyourbusiness"; // ✅ corrected

// Documentation Page
import TermsOfUse from "./pages/TermsAndConditions";


const App = () => {
  return (
    <Router>
      <div className="font-lato flex flex-col min-h-screen">
        {/* ✅ Advertisement Line (Visible on every page) */}
        {/* <AdvertisementLine /> */}

        {/* Navbar on top */}
        <Navbar />
        <ScrollToTop />

        {/* Main Page Content */}
        <main className="flex flex-col min-h-screen">
          <Routes>
            {/* General Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/services" element={<Services />} />

            {/* Service Detail Pages */}
            <Route path="/Startyourbusiness" element={<StartYourBusiness />} />
            <Route
              path="/Businessregistration"
              element={<BusinessRegistration />}
            />
            <Route path="/licenses" element={<Licenses />} />
            <Route
              path="/intellectualpropertyrights"
              element={<IntellectualPropertyRights />}
            />
            <Route
              path="/companysecretarialservices"
              element={<CompanySecretarialServices />}
            />
            <Route
              path="/accountingandaudit"
              element={<AccountingAndAudit />}
            />
            <Route path="/financing" element={<Financing />} />
            <Route
              path="/taxandgstcompliance"
              element={<TaxAndGSTCompliance />}
            />
            <Route
              path="/femaandrbicompliances"
              element={<FEMAAndRBICompliances />}
            />
            <Route path="/sebicompliances" element={<SEBICompliances />} />
            <Route
              path="/RDNCLTNCLATMatters"
              element={<RDNCLTNCLATMatters />}
            />
            <Route
              path="/secretarialauditandduediligence"
              element={<SecretarialAuditAndDueDiligence />}
            />
            <Route
              path="/LabourLawCompliance"
              element={<LabourLawCompliance />}
            />
            <Route
              path="/CorporateGovernanceAdvice"
              element={<CorporateGovernanceAdvice />}
            />
            <Route
              path="/managementconsultation"
              element={<ManagementConsultation />}
            />
            <Route
              path="/generaladministration"
              element={<GeneralAdministration />}
            />
            <Route path="/venturefunding" element={<VentureFunding />} />
            <Route path="/Merger" element={<Merger />} />
            <Route path="/Liaisoning" element={<Liaisoning />} />
            <Route
              path="/insolvencyandbankruptcy"
              element={<InsolvencyAndBankruptcy />}
            />
            {/* <Route path="/legal" element={<Legal />} /> */}

            <Route path="/terms-of-use" element={<TermsOfUse />} />
            
          </Routes>

          {/* Toast Notification Container */}
          <Toaster
            position="top-center"
            theme="light"
            toastOptions={{
              className: "custom-toast",
              style: {
                fontFamily: "Times New Roman, serif",
                fontSize: "18px",
                padding: "16px 24px",
                borderRadius: "8px",
                backgroundColor: "#3a6efdff",
                color: "white",
                border: "none",
              },
            }}
          />
        </main>

        {/* Common Bottom Elements */}
        <Footer />
        <FloatingContactIcons />
      </div>
    </Router>
  );
};

export default App;
