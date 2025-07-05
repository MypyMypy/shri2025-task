import { memo, useRef, useCallback, useState, useEffect, useMemo } from "react";

import { Event } from "./Event.jsx";
import { HeroEvents } from "./HeroEvents";
import { TabPanel } from "./TabPanel.jsx";
import { Footer } from "./Footer";

import { TABS, TABS_KEYS } from "./getTabs.js";

import "./styles/styles.css";

const Main = memo(function Main() {
  const initedRef = useRef(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (!initedRef.current) {
      initedRef.current = true;
      const urlTab = new URLSearchParams(location.search).get("tab");
      if (urlTab && TABS[urlTab]) {
        setActiveTab(urlTab);
      }
    }
    const mql768 = window.matchMedia("(max-width: 768px)");
    const mql1024 = window.matchMedia("(max-width: 1024px)");

    const loadCss = () => {
      if (mql768.matches) {
        import("./styles/styles768.css");
      }
      if (mql1024.matches) {
        import("./styles/styles1024.css");
      }
    };

    loadCss();

    mql768.addEventListener("change", loadCss);
    mql1024.addEventListener("change", loadCss);

    return () => {
      mql768.removeEventListener("change", loadCss);
      mql1024.removeEventListener("change", loadCss);
    };
  }, []);

  const onSelectInput = useCallback((event) => {
    setActiveTab(event.target.value);
  }, []);

  const scriptEvents = useMemo(
    () => [
      <Event
        key="script1"
        slim={true}
        icon="light2"
        iconLabel="Освещение"
        title="Выключить весь свет в доме и во дворе"
      />,
      <Event
        key="script2"
        slim={true}
        icon="schedule"
        iconLabel="Расписание"
        title="Я ухожу"
      />,
      <Event
        key="script3"
        slim={true}
        icon="light2"
        iconLabel="Освещение"
        title="Включить свет в коридоре"
      />,
      <Event
        key="script4"
        slim={true}
        icon="temp2"
        iconLabel="Температура"
        title="Набрать горячую ванну"
        subtitle="Начнётся в 18:00"
      />,
      <Event
        key="script5"
        slim={true}
        icon="temp2"
        iconLabel="Температура"
        title="Сделать пол тёплым во всей квартире"
      />,
    ],
    []
  );

  const wrapperRef = useRef(null);
  const [hasRightScroll, setHasRightScroll] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = wrapperRef.current;
    setHasRightScroll(el ? el.scrollWidth > el.clientWidth : false);
  }, []);

  const onArrowClick = useCallback(() => {
    const el = wrapperRef.current;
    if (el) {
      el.scrollTo({ left: el.scrollLeft + 400, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [activeTab, updateScrollState]);

  return (
    <>
      <main className="main">
        <section className="section main__general">
          <h2 className="section__title section__title-header section__main-title">
            Главное
          </h2>
          <div className="hero-dashboard">
            <div className="hero-dashboard__primary">
              <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
              <p className="hero-dashboard__subtitle">
                Двери и окна закрыты, сигнализация включена.
              </p>
              <ul className="hero-dashboard__info">
                <li className="hero-dashboard__item">
                  <div className="hero-dashboard__item-title">Дома</div>
                  <div className="hero-dashboard__item-details">
                    +23
                    <span className="a11y-hidden">°</span>
                  </div>
                </li>
                <li className="hero-dashboard__item">
                  <div className="hero-dashboard__item-title">За окном</div>
                  <div className="hero-dashboard__item-details">
                    +19
                    <span className="a11y-hidden">°</span>
                    <div
                      className="hero-dashboard__icon hero-dashboard__icon_rain"
                      role="img"
                      aria-label="Дождь"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            <HeroEvents />
          </div>
        </section>

        <section className="section main__scripts">
          <h2 className="section__title section__title-header">
            Избранные сценарии
          </h2>
          <ul className="event-grid">{scriptEvents}</ul>
        </section>

        <section className="section main__devices">
          <div className="section__title">
            <h2 className="section__title-header">Избранные устройства</h2>

            <select
              className="section__select"
              value={activeTab}
              onChange={onSelectInput}
            >
              {TABS_KEYS.map((key) => (
                <option key={key} value={key}>
                  {TABS[key].title}
                </option>
              ))}
            </select>

            <ul role="tablist" className="section__tabs">
              {TABS_KEYS.map((key) => (
                <li
                  key={key}
                  role="tab"
                  aria-selected={key === activeTab ? "true" : "false"}
                  tabIndex={key === activeTab ? "0" : undefined}
                  className={
                    "section__tab" +
                    (key === activeTab ? " section__tab_active" : "")
                  }
                  id={`tab_${key}`}
                  aria-controls={`panel_${key}`}
                  onClick={() => setActiveTab(key)}
                >
                  {TABS[key].title}
                </li>
              ))}
            </ul>
          </div>

          <div className="section__panel-wrapper">
            <TabPanel    
              ref={wrapperRef}
              key={activeTab}
              tabKey={activeTab}
              active={activeTab}
              items={TABS[activeTab].items}
              onResize={updateScrollState}
            />
            {hasRightScroll && (
              <div className="section__arrow" onClick={onArrowClick} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});

export default Main;
