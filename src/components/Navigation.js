import React from "react";
import "./Navigation.css";

function Navigation({ activeTab, handleActiveTab }) {
  return (
    <div className="nav">
      {activeTab.map((item) => {
        return (
          <div
            onClick={() => {
              if (!item.isActive) {
                handleActiveTab(item.id);
              }
            }}
            className={
              item.isActive ? "activeNavButton navButtons" : "navButtons"
            }
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
