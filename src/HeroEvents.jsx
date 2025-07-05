import { memo } from "react";
import { Event } from "./Event";

export const HeroEvents = memo(function HeroEvents() {
  return (
    <ul className="hero-dashboard__schedule">
      <Event
        key="temp"
        icon="temp"
        iconLabel="Температура"
        title="Philips Cooler"
        subtitle="Начнет охлаждать в 16:30"
      />
      <Event
        key="light1"
        icon="light"
        iconLabel="Освещение"
        title="Xiaomi Yeelight LED Smart Bulb"
        subtitle="Включится в 17:00"
      />
      <Event
        key="light2"
        icon="light"
        iconLabel="Освещение"
        title="Xiaomi Yeelight LED Smart Bulb"
        subtitle="Включится в 17:00"
      />
    </ul>
  );
});
