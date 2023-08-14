import React from "react"
import ContentLoader from "react-content-loader"

const CardSkeleton = (props) => (
  <ContentLoader 
  speed={1}
  width={300}
  height={443}
  viewBox="0 0 300 443"
  backgroundColor="#c7c7c7"
  foregroundColor="#ffffff"
  {...props}
>
  <circle cx="121" cy="155" r="102" /> 
  <rect x="3" y="264" rx="5" ry="5" width="245" height="90" /> 
  <rect x="4" y="362" rx="2" ry="2" width="243" height="19" /> 
  <rect x="41" y="390" rx="5" ry="5" width="160" height="42" />
  </ContentLoader>
)

export default CardSkeleton