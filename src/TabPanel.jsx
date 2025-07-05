import { forwardRef, memo } from "react";
import { Event } from "./Event";

export const TabPanel = memo(
  forwardRef(function TabPanel({ tabKey, active, items }, ref) {
    return (
      <div
        ref={ref}
        role="tabpanel"
        className={"section__panel" + (active ? "" : " section__panel_hidden")}
        aria-hidden={!active}
        id={`panel_${tabKey}`}
        aria-labelledby={`tab_${tabKey}`}
        style={{ overflowX: "auto" }}
      >
        <ul className="section__panel-list">
          {items.map((item, idx) => (
            <Event key={`${tabKey}-${idx}`} {...item} />
          ))}
        </ul>
      </div>
    );
  })
);
