import React from 'react'
import styled from 'styled-components'
const Title = ({title, subtitle, className}) => {
    return (
        <div className={className}>
        <h4>
            <span className="title">{title}</span>
            <span >{subtitle}</span>
        </h4>
        </div>
    )
}

export default styled(Title)`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
    /* color: #4CAF50; */
    font-family: "Roboto", sans-serif;
  }
  .title {
    color: var(--mainBlack);   
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`

