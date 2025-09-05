"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, AlertCircle, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ModernToastProps {
  id: string
  title?: string
  description?: string
  type?: "success" | "error" | "warning" | "info"
  duration?: number
  onClose?: () => void
  action?: React.ReactNode
}

const toastVariants = {
  success: {
    icon: CheckCircle,
    className: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    iconClassName: "text-emerald-500",
  },
  error: {
    icon: XCircle,
    className: "bg-red-500/10 border-red-500/20 text-red-400",
    iconClassName: "text-red-500",
  },
  warning: {
    icon: AlertCircle,
    className: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    iconClassName: "text-yellow-500",
  },
  info: {
    icon: Info,
    className: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    iconClassName: "text-blue-500",
  },
}

export function ModernToast({
  id,
  title,
  description,
  type = "info",
  duration = 5000,
  onClose,
  action,
}: ModernToastProps) {
  const [isVisible, setIsVisible] = React.useState(true)
  const Icon = toastVariants[type].icon

  React.useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose?.(), 300) // Wait for animation to complete
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => onClose?.(), 300)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className={cn(
            "relative flex w-full max-w-sm items-start gap-3 rounded-lg border p-4 shadow-lg backdrop-blur-sm",
            toastVariants[type].className
          )}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
            className={cn("flex-shrink-0", toastVariants[type].iconClassName)}
          >
            <Icon className="h-5 w-5" />
          </motion.div>

          <div className="flex-1 space-y-1">
            {title && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-semibold"
              >
                {title}
              </motion.p>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm opacity-90"
              >
                {description}
              </motion.p>
            )}
            {action && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                {action}
              </motion.div>
            )}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={handleClose}
            className="flex-shrink-0 rounded-md p-1 opacity-70 hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </motion.button>

          {/* Progress bar */}
          {duration > 0 && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-current opacity-30 rounded-b-lg"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export interface ModernToastContainerProps {
  toasts: ModernToastProps[]
  onRemove: (id: string) => void
}

export function ModernToastContainer({ toasts, onRemove }: ModernToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-[100] space-y-2">
      {toasts.map((toast) => (
        <ModernToast
          key={toast.id}
          {...toast}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  )
}

// Hook for managing modern toasts
export function useModernToast() {
  const [toasts, setToasts] = React.useState<ModernToastProps[]>([])

  const addToast = React.useCallback((toast: Omit<ModernToastProps, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const success = React.useCallback(
    (title: string, description?: string, options?: Partial<ModernToastProps>) => {
      addToast({ title, description, type: "success", ...options })
    },
    [addToast]
  )

  const error = React.useCallback(
    (title: string, description?: string, options?: Partial<ModernToastProps>) => {
      addToast({ title, description, type: "error", ...options })
    },
    [addToast]
  )

  const warning = React.useCallback(
    (title: string, description?: string, options?: Partial<ModernToastProps>) => {
      addToast({ title, description, type: "warning", ...options })
    },
    [addToast]
  )

  const info = React.useCallback(
    (title: string, description?: string, options?: Partial<ModernToastProps>) => {
      addToast({ title, description, type: "info", ...options })
    },
    [addToast]
  )

  return {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
  }
}
