import React, { useState } from 'react'

const ImageWithLoader = ({ src, alt, className, style, ...rest }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={`iwl-wrapper ${className || ''}`}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {!loaded && (
        <div className="iwl-spinner">
          <div className="iwl-bounce1" />
          <div className="iwl-bounce2" />
          <div className="iwl-bounce3" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        {...rest}
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
      />
      <style jsx>{`
        .iwl-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 12px;
          margin: -6px 0 0 -20px;
          text-align: center;
        }
        .iwl-bounce1, .iwl-bounce2, .iwl-bounce3 {
          width: 8px;
          height: 8px;
          background-color: #999;
          border-radius: 100%;
          display: inline-block;
          animation: iwl-bouncedelay 1.4s infinite ease-in-out both;
        }
        .iwl-bounce1 { animation-delay: -0.32s; }
        .iwl-bounce2 { animation-delay: -0.16s; }
        .iwl-bounce3 { animation-delay: 0; }

        @keyframes iwl-bouncedelay {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      `}</style>
    </div>
  )
}

export default ImageWithLoader
