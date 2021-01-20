import React from 'react'
import { Link } from 'gatsby'

const Button = (props) => (
  <div>
    <Link className='button' to={props.link}>{props.linkName}</Link>
    <style jsx='true'>{`
        .button {
          text-decoration: none;
          padding: 8px 15px;
          border: 2px solid var(--main-color);
          color: #fff;
          background-color: var(--main-color);
          font-weight: 500;
          margin-top: 10px;
          display: inline-block;
          font-size: 14px;
          border-radius: 4px;
          transition: all 0.2s ease-in-out;
          min-width: 100px
        }
        .button:hover{
            background-color: #fff;
            color: var(--main-color);
            font-weight: 400;
            {/* transform: scale(1.1); */}
        }
            `}
    </style>
  </div>
)

export default Button
