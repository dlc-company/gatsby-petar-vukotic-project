import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledHero = ({img,className,children,home}) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home} >
            {children}
        </BackgroundImage>
    )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh + 65px)" : "60vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  object-fit: fill;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
