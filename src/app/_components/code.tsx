'use client'

import { CodeBlock, dracula } from "react-code-blocks"

interface CodeProps {
  code: string
  language?: string
}

const Code: React.FC<CodeProps> = ({code, language = 'javascript'}: CodeProps) => {
  return (
    <div>
      <CodeBlock
        language={language}
        text={code}
        theme={dracula}
      />
    </div>
  )
}

export default Code