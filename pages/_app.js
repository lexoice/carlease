import '../public/style.css'
import Script from 'next/script'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { ModalProvider, ModalContext } from '../contexts/ModalContext'
import Modal from '../components/UI/Modal'
import ChatWidget from '../components/UI/ChatWidget'
import FixedQuoteButton from '../components/UI/FixedQuoteButton'
import { Analytics } from "@vercel/analytics/next"


function MyApp({ Component, pageProps, makes }) {
  return (
    <>
      <Analytics />
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="lazyOnload"
        onLoad={() => {
          setTimeout(() => {

          }, 2000)
        }}
      />

      <ModalProvider>
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


MyApp.getInitialProps = async (appContext) => {
  const { AppTree, ctx } = appContext

  let appProps = {}
  if (typeof AppTree.getInitialProps === 'function') {
    appProps = await AppTree.getInitialProps(ctx)
  }

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
