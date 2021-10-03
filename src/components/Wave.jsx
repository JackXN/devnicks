import { useMemo } from 'react'

const Wave = ({ topColor, bottomColor, hashPreset }) => {
  const hash = useMemo(() => {
    switch (hashPreset) {
      case 1:
        return 'M0 47L37.5 40.5C75 34 150 21 225 15C300 9 375 10 450 19.2C525 28.3 600 45.7 675 48.3C750 51 825 39 862.5 33L900 27L900 101L862.5 101C825 101 750 101 675 101C600 101 525 101 450 101C375 101 300 101 225 101C150 101 75 101 37.5 101L0 101Z'
      case 2:
        return 'M0 35L37.5 43C75 51 150 67 225 69.2C300 71.3 375 59.7 450 48C525 36.3 600 24.7 675 27.8C750 31 825 49 862.5 58L900 67L900 101L862.5 101C825 101 750 101 675 101C600 101 525 101 450 101C375 101 300 101 225 101C150 101 75 101 37.5 101L0 101Z'
      case 3:
        return 'M0 87L37.5 82.7C75 78.3 150 69.7 225 60.8C300 52 375 43 450 44.8C525 46.7 600 59.3 675 64.8C750 70.3 825 68.7 862.5 67.8L900 67L900 101L862.5 101C825 101 750 101 675 101C600 101 525 101 450 101C375 101 300 101 225 101C150 101 75 101 37.5 101L0 101Z'
      default:
        return 'M0 47L37.5 40.5C75 34 150 21 225 15C300 9 375 10 450 19.2C525 28.3 600 45.7 675 48.3C750 51 825 39 862.5 33L900 27L900 101L862.5 101C825 101 750 101 675 101C600 101 525 101 450 101C375 101 300 101 225 101C150 101 75 101 37.5 101L0 101Z'
    }
  }, [hashPreset])

  return (
    <svg id="visual" viewBox="0 0 900 100">
      <rect x="0" y="0" width="900" height="200" fill={topColor} style={{transform: 'scaleX(10)'}}></rect>
      <path
        d={hash}
        fill={bottomColor}
        strokeLinecap="round"
        strokeLinejoin="miter"
      ></path>
    </svg>
  )
}
export default Wave