import type { SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
}

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
      <path d="M3 9h4" />
      <path d="M17 9h4" />
      <path d="M12 9v12" />
      <path d="M12 3v6" />
    </svg>
  ),
}
