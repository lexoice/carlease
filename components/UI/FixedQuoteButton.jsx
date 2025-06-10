import React, { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const FixedQuoteButton = () => {
  const { openModal } = useContext(ModalContext);

  const defaultModalData = {
    title: "Car",
    price: " ",
    lease_term: "36 months",
    miles: "10,000",
    horse_power: "—",
    drive_type: "—",
    seating: "—",
    make: "Any Make",
    model: "Any Model",
  };

  return (
    <>
      <button
        className="sa-quote-btn fixed-quote-btn"
        onClick={() => openModal(defaultModalData)}
      >
        Leasing Quote
      </button>

      <style jsx>{`
        .fixed-quote-btn {
          position: fixed;
          z-index: 149;
          top: 47%;
          right: 0;
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          line-height: normal;
          border-radius: 5px 5px 5px 0;
          background: var(--gradient-color);
          backdrop-filter: blur(5px);
          padding: 20px 10px 20px;
          cursor: pointer;
        }

      `}</style>
    </>
  );
};

export default FixedQuoteButton;
