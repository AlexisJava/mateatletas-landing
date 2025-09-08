"use client"
import { useState, useEffect } from "react"

type Props = {
  prefix: string
  phrases: string[]
  className?: string
  highlightClassName?: string
}

export default function RotatingTitle({ prefix, phrases, className = "", highlightClassName = "text-primary" }: Props) {
  const [display, setDisplay] = useState("")
  const [i, setI] = useState(0)
  const [j, setJ] = useState(0)

  useEffect(() => {
    const current = phrases[i]
    let timeout: NodeJS.Timeout

    if (j < current.length) {
      timeout = setTimeout(() => setJ(j + 1), 80)
    } else {
      // Finished typing, wait then move to next phrase
      timeout = setTimeout(() => {
        setJ(0)
        setI((i + 1) % phrases.length)
      }, 2500)
    }

    setDisplay(current.substring(0, j))
    return () => clearTimeout(timeout)
  }, [j, i, phrases])

  return (
    <div className="min-h-[4.5rem] md:min-h-[5.5rem] lg:min-h-[6.5rem] flex items-start">
      <h1
        className={[
          "font-bold leading-tight tracking-tight",
          "text-[clamp(2rem,6vw,3rem)] md:text-[clamp(2.5rem,5vw,3.5rem)] lg:text-[clamp(3rem,4vw,4rem)]",
          className,
        ].join(" ")}
      >
        {prefix}{" "}
        <span
          className={`${highlightClassName} text-primary bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text`}
        >
          {display}
        </span>
        <span className="animate-pulse text-primary">|</span>
      </h1>
    </div>
  )
}
