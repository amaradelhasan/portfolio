"use client"

import { useState, useEffect } from "react";
import { Portal, Box, Text, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface Toast {
  id: string;
  title?: string;
  description?: string;
  type?: "info" | "success" | "warning" | "error" | "loading";
  duration?: number;
}

// Simple toast store
const toastStore = {
  listeners: [] as Function[],
  toasts: [] as Toast[],
  add(toast: Toast) {
    this.toasts = [...this.toasts, toast];
    this.notify();
  },
  remove(id: string) {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.notify();
  },
  notify() {
    this.listeners.forEach(listener => listener());
  },
  subscribe(listener: Function) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },
  getToasts() {
    return this.toasts;
  }
};

// Define toast colors based on type
const getToastColor = (type: string = "info") => {
  const colors: Record<string, string> = {
    success: "green",
    error: "red",
    warning: "yellow",
    info: "blue",
    loading: "gray"
  };
  return colors[type] || "gray";
};

export const toaster = {
  success: (message: string, title?: string) => {
    toastStore.add({
      id: Math.random().toString(36).substr(2, 9),
      title: title || "Success",
      description: message,
      type: "success",
      duration: 5000
    });
  },
  error: (message: string, title?: string) => {
    toastStore.add({
      id: Math.random().toString(36).substr(2, 9),
      title: title || "Error",
      description: message,
      type: "error",
      duration: 5000
    });
  },
  info: (message: string, title?: string) => {
    toastStore.add({
      id: Math.random().toString(36).substr(2, 9),
      title: title || "Info",
      description: message,
      type: "info",
      duration: 5000
    });
  },
  warning: (message: string, title?: string) => {
    toastStore.add({
      id: Math.random().toString(36).substr(2, 9),
      title: title || "Warning",
      description: message,
      type: "warning",
      duration: 5000
    });
  },
  loading: (message: string, title?: string) => {
    toastStore.add({
      id: Math.random().toString(36).substr(2, 9),
      title: title || "Loading",
      description: message,
      type: "loading",
      duration: Infinity
    });
  },
  dismiss: (id: string) => {
    toastStore.remove(id);
  }
};

export const Toaster = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  useEffect(() => {
    const unsubscribe = toastStore.subscribe(() => {
      setToasts([...toastStore.getToasts()]);
    });
    
    return unsubscribe;
  }, []);

  // Auto dismiss toasts
  useEffect(() => {
    if (toasts.length > 0) {
      toasts.forEach(toast => {
        if (toast.duration && toast.duration > 0) {
          const timer = setTimeout(() => {
            toastStore.remove(toast.id);
          }, toast.duration);
          return () => clearTimeout(timer);
        }
      });
    }
  }, [toasts]);

  return (
    <Portal>
      <Box position="fixed" bottom="4" right="4" zIndex="toast" p="2">
        {toasts.map((toast) => {
          const color = getToastColor(toast.type);
          return (
            <Box
              key={toast.id}
              mb="2"
              bg={`${color}.500`}
              color="white"
              borderRadius="md"
              boxShadow="md"
              maxWidth="sm"
              p="3"
              animation="slideIn 0.3s ease-out"
            >
              <Flex justifyContent="space-between" alignItems="flex-start">
                <Box flex="1">
                  {toast.title && <Text fontWeight="bold">{toast.title}</Text>}
                  {toast.description && <Text fontSize="sm">{toast.description}</Text>}
                </Box>
                <IconButton
                  aria-label="Close toast"
                  icon={<CloseIcon boxSize="3" />}
                  size="sm"
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  onClick={() => toastStore.remove(toast.id)}
                />
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Portal>
  );
};
