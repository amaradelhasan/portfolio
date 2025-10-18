import { Tooltip as ChakraTooltip, Portal } from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement | null>
  content: React.ReactNode
  disabled?: boolean
  children: React.ReactNode
  [key: string]: any
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      portalRef,
      ...rest
    } = props

    if (disabled) return children

    return (
      <ChakraTooltip label={content} openDelay={500} closeDelay={0} {...rest}>
        {children}
      </ChakraTooltip>
    )
  },
)
