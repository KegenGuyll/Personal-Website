'use client'

import React, { useEffect, useState } from "react"
import Button, { ButtonProps, ButtonVariant } from "./button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { twMerge } from "tailwind-merge"
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons"

interface CopyButtonProps extends ButtonProps {
  text?: string
  copyText: string
}

const CopyButton: React.FC<CopyButtonProps> = ({
  className, 
  text = 'Email', 
  copyText = "", 
  ...props
}: CopyButtonProps) => {
  const [successfullyCopied, setSuccessfullyCopied] = useState<boolean>()

  const copyTextFunc = async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setSuccessfullyCopied(true)
    } catch (error) {
      setSuccessfullyCopied(false)
    }
  }

  useEffect(() => {
    if(!successfullyCopied) return

    setTimeout(() => {
      setSuccessfullyCopied(undefined)
    }, 1000)
  }, [successfullyCopied])


  return (
    <Button 
      onClick={copyTextFunc} 
      className={twMerge('flex items-center space-x-2', className)}
      buttonVariant={ButtonVariant.secondary} 
      {...props}
    >
      <FontAwesomeIcon icon={successfullyCopied ? faCheck : faCopy} />
      <span>{`Copy ${text}`}</span>
    </Button>
  )
}

export default CopyButton