import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";

import type { AlertOptions, AlertStyle, Alert } from "@/types";

const defaultOptions: Required<AlertOptions> = {
  html: false,
  closable: true,
  timeout: false,
  style: "info",
};

export const useAlerts = defineStore("alerts", {
  state: () => ({
    items: [] as Alert[],
  }),

  actions: {
    notify(message: string, style: AlertStyle, options?: AlertOptions) {
      options = { ...defaultOptions, style, ...options };

      const id = uuid();
      this.items.push({
        id,
        ...options,
        message,
      });

      if (options.timeout !== false) {
        setTimeout(() => {
          this.remove(id);
        }, options.timeout);
      }
    },
    success(message: string, options?: AlertOptions) {
      this.notify(message, "success", options);
    },

    error(message: string, options?: AlertOptions) {
      this.notify(message, "error", options);
    },

    warning(message: string, options?: AlertOptions) {
      this.notify(message, "warning", options);
    },

    info(message: string, options?: AlertOptions) {
      this.notify(message, "info", options);
    },

    remove(id: string) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
  },
});
