import { LoadingContainer } from './loading.styles'
export default function Loading({ size }: { size?: number }): JSX.Element {
  return (
    <LoadingContainer className="loading-container">
      <svg
        className="load-image"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 0 1-7 7v3ZM2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z"
        />
      </svg>
    </LoadingContainer>
  )
}
