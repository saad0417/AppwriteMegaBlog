import React from 'react'

function Logo({ width = '180px' }) {
  return (
    <svg width={width} viewBox="0 0 260 70" xmlns="http://www.w3.org/2000/svg">

      {/* Dark background */}
      <rect x="0" y="0" width="260" height="70" rx="10" fill="#1b1b1b"/>

      {/* Mega text */}
      <text
        x="20" y="45"
        fontFamily="Georgia, serif"
        fontSize="36"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="-1"
      >Mega</text>

      {/* Slash divider */}
      <text
        x="136" y="45"
        fontFamily="Georgia, serif"
        fontSize="36"
        fontWeight="300"
        fill="#ffffff"
        opacity="0.3"
      >/</text>

      {/* Blog text */}
      <text
        x="154" y="45"
        fontFamily="Georgia, serif"
        fontSize="36"
        fontWeight="700"
        fill="#ffffff"
        opacity="0.5"
      >Blog</text>

    </svg>
  )
}

export default Logo
