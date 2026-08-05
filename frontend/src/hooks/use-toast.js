import { useState, useCallback } from 'react';

let toastCount = 0;

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ title, description, variant = "default", duration = 5000 }) => {
    const id = toastCount++;
    const newToast = {
      id,
      title,
      description,
      variant,
      duration,
    };

    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    }

    return {
      id,
      dismiss: () => setToasts((prev) => prev.filter((toast) => toast.id !== id)),
    };
  }, []);

  return {
    toast,
    toasts,
  };
}
