"use client"

import React, { createContext, useContext } from "react"
import { useModernToast, ModernToastContainer } from "@/components/ui/modern-toast"

interface ModernToastContextType {
  success: (title: string, description?: string, options?: any) => void
  error: (title: string, description?: string, options?: any) => void
  warning: (title: string, description?: string, options?: any) => void
  info: (title: string, description?: string, options?: any) => void
}

const ModernToastContext = createContext<ModernToastContextType | undefined>(undefined)

export function ModernToastProvider({ children }: { children: React.ReactNode }) {
  const { toasts, success, error, warning, info, removeToast } = useModernToast()

  return (
    <ModernToastContext.Provider value={{ success, error, warning, info }}>
      {children}
      <ModernToastContainer toasts={toasts} onRemove={removeToast} />
    </ModernToastContext.Provider>
  )
}

export function useModernToastContext() {
  const context = useContext(ModernToastContext)
  if (context === undefined) {
    throw new Error("useModernToastContext must be used within a ModernToastProvider")
  }
  return context
}
