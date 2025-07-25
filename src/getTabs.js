function getTabs() {
  const TABS = {
    all: {
      title: "Все",
      items: [
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Yeelight LED Smart Bulb",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "D-Link Omna 180 Cam",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "temp",
          iconLabel: "Температура",
          title: "Elgato Eve Degree Connected",
          subtitle: "Выключено до 17:00",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "LIFX Mini Day & Dusk A60 E27",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Включено",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
      ],
    },
    kitchen: {
      title: "Кухня",
      items: [
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Yeelight LED Smart Bulb",
          subtitle: "Включено",
        },
        {
          icon: "temp",
          iconLabel: "Температура",
          title: "Elgato Eve Degree Connected",
          subtitle: "Выключено до 17:00",
        },
      ],
    },
    hall: {
      title: "Зал",
      items: [
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Выключено",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Выключено",
        },
      ],
    },
    lights: {
      title: "Лампочки",
      items: [
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "D-Link Omna 180 Cam",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "LIFX Mini Day & Dusk A60 E27",
          subtitle: "Включится в 17:00",
        },
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
        {
          icon: "light",
          iconLabel: "Освещение",
          title: "Philips Zhirui",
          subtitle: "Включено",
        },
      ],
    },
    cameras: {
      title: "Камеры",
      items: [
        {
          icon: "light2",
          iconLabel: "Освещение",
          title: "Xiaomi Mi Air Purifier 2S",
          subtitle: "Включено",
        },
      ],
    },
  };
  
  const base = TABS.all.items;
  const copies = 2 ** 6;
  const result = new Array(base.length * copies);
  for (let i = 0; i < result.length; i++) {
    result[i] = base[i % base.length];
  }
  TABS.all.items = result;

  const TABS_KEYS = Object.keys(TABS);

  return { TABS, TABS_KEYS };
}

export const { TABS, TABS_KEYS } = getTabs();
