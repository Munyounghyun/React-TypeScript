import React from 'react'
import * as D from '../../data'

type FooterProps = {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="p-4 footer footer-center bg-primary text-primary-content">
      <div>
        <p>Copyright &copy; 2023 - All right reserved by {D.randomCompanyName()}</p>
      </div>
    </footer>
  )
}

export default Footer
