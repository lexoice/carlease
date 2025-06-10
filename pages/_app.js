// pages/_app.js

import '../public/style.css'
import Script from 'next/script'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { ModalProvider, ModalContext } from '../contexts/ModalContext'
import Modal from '../components/UI/Modal'
import ChatWidget from '../components/UI/ChatWidget'
import FixedQuoteButton from '../components/UI/FixedQuoteButton'


// Нужно получить список makes на сервере и передать его в Header.
// Для этого используем getInitialProps в _app.js.

function MyApp({ Component, pageProps, makes }) {
  return (
    <>
      {/* Подключаем reCAPTCHA */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      <ModalProvider>
        {/* Передаём makes в Header */}
        <Header makes={makes} />

        <Component {...pageProps} />

        <ModalContext.Consumer>
          {({ modalData, closeModal }) =>
            modalData && (
              <Modal
                isOpen={!!modalData}
                onClose={closeModal}
                data={modalData}
              />
            )
          }
        </ModalContext.Consumer>

        <FixedQuoteButton />

        <Footer />
        <ChatWidget />
      </ModalProvider>
    </>
  )
}

// getInitialProps выполнится на сервере при первом запросе,
// получит список makes и передаст их в компонент Header
MyApp.getInitialProps = async (appContext) => {
  const { AppTree, ctx } = appContext

  // Получаем обычные pageProps, если они есть
  let appProps = {}
  if (typeof AppTree.getInitialProps === 'function') {
    appProps = await AppTree.getInitialProps(ctx)
  }

  // Подгружаем список makes для Header
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/get-makes.php`
  )
  const makes = res.ok ? await res.json() : []

  return {
    ...appProps,
    makes,
  }
}

export default MyApp
