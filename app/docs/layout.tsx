import React from 'react'
import Nav from '../../components/Nav'

const Docslayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
  return (
    <div>
        <body>
        {children}
        </body>
    </div>
  )
}

export default Docslayout