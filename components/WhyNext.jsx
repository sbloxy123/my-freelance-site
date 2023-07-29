"use client";
import "../css/whyNext.css";
import { useState } from "react";
import { initialTabs as tabs } from "./nextBenefits";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyNext() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="m-auto">
      <div className="next-summary-container">
        <ul className="next-info-titles">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`item === selectedTab ? "selected" : "" single-next-info-title`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-text-area">
        <AnimatePresence mode="wait" layout="position">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.text : "😋"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
