import { motion } from 'framer-motion'

interface EffectProps {
  width?: number
  height?: number
}

export function Effect({ width }: EffectProps) {
  //   const height = width ? width / 2.1755 : 188
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <svg
      width={width! * 2 || 409}
      height={188}
      viewBox={'0 0 ' + width + ' ' + 188}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="212"
        y="55"
        width="69"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="99"
        y="55"
        width="106"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="55"
        width="92"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="287"
        y="55"
        width="77"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="328"
        y="66"
        width="36"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="184"
        y="66"
        width="137"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="72"
        y="66"
        width="105"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="66"
        width="65"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        width="144"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="151"
        width="136"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        width="46"
        height="3"
        rx="1.5"
        transform="matrix(-1 0 0 1 340 0)"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="122"
        y="11"
        width="111"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="122"
        y="152"
        width="111"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="11"
        width="115"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="152"
        width="115"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="275"
        y="11"
        width="28"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="240"
        y="11"
        width="28"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="240"
        y="152"
        width="37"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="310"
        y="11"
        width="83"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="284"
        y="22"
        width="89"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="284"
        y="163"
        width="19"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="134"
        y="22"
        width="143"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="134"
        y="163"
        width="143"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="95"
        y="22"
        width="32"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="95"
        y="163"
        width="32"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="22"
        width="88"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="163"
        width="88"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="349"
        y="33"
        width="60"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="201"
        y="33"
        width="142"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="201"
        y="174"
        width="51"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="259"
        y="174"
        width="62"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="163"
        y="33"
        width="31"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="106"
        y="33"
        width="51"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="106"
        y="174"
        width="88"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="32"
        y="33"
        width="67"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="174"
        width="99"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="33"
        width="25"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="44"
        width="72"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        y="185"
        width="72"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="79"
        y="44"
        width="97"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.14"
      />
      <motion.rect
        animate={{ x: 200 }}
        transition={{
          duration: randomIntFromInterval(3, 4),
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        x="79"
        y="185"
        width="55"
        height="3"
        rx="1.5"
        fill="#1562AF"
        fillOpacity="0.34"
      />
    </svg>
  )
}
