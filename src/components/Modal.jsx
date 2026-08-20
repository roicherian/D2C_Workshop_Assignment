import { useEffect } from 'react'
import { CloseIcon } from './icons'
import './modal.css'

// MISSING: no dialog/overlay component exists in @acko/*.
// See missing-components-term-insurance-quote-modal.md.
export function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return undefined
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export function ModalHeader({ title, onClose }) {
  return (
    <div className="modal__header">
      <h2 className="modal__title">{title}</h2>
      <button type="button" className="modal__close" aria-label="Close" onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
  )
}

export function ModalBody({ children }) {
  return <div className="modal__body">{children}</div>
}

export function ModalFooter({ children }) {
  return <div className="modal__footer">{children}</div>
}
