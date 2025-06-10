// contexts/ModalContext.js
import React, { createContext, useState } from 'react'

export const ModalContext = createContext({
  modalData: null,
  openModal: () => {},
  closeModal: () => {},
})

export function ModalProvider({ children }) {
  const [modalData, setModalData] = useState(null)

  const openModal = data => setModalData(data)
  const closeModal = () => setModalData(null)

  return (
    <ModalContext.Provider value={{ modalData, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
