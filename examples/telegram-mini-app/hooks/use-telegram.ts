import { useEffect, useState } from "react";

export function useTelegram() {
  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
      const app = window.Telegram.WebApp;
      app.ready();
      setWebApp(app);
    }
  }, []);

  return webApp;
}