export interface ButtonProps {
  buttonWidth?: string
  backgroundColor?: string
  border?: string
  isHidden?: boolean
  handleClick: () => void
}

export interface StyledButtonProps {
  buttonWidth: string
  backgroundColor?: string
  border?: string
  isHidden?: boolean
  theme: any
}
