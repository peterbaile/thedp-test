declare module '*.svg' {
  const content: React.FC<{
    style?: React.CSSProperties
    color?: string
    fill?: string
    className?: string
    onClick?: (event: React.MouseEvent<any, MouseEvent>) => void
  }>
  export default content
}