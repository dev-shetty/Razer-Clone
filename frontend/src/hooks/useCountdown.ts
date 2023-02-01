import { useEffect, useMemo, useState } from "react"

function useCountdown(endDate: number) {
  const countDownDate = new Date(endDate).getTime()
  const [countdown, setCountdown] = useState(
    countDownDate - new Date().getTime()
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countDownDate - new Date().getTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return getReturnValues(countdown)
}

function getReturnValues(countdown: number) {
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000)

  return days + hours + minutes + seconds >= 0
    ? [
        prefixZero(days),
        prefixZero(hours),
        prefixZero(minutes),
        prefixZero(seconds),
      ]
    : ["00", "00", "00", "00"]
}

function prefixZero(num: number) {
  if (num <= 9 && num >= 0) return "0" + num
  return num
}

export default useCountdown
