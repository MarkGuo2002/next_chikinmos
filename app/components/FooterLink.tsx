import Link from 'next/link';
import React from 'react'

interface FooterLinkProps {
    link: string;
    text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({link, text}) => {
  return (
    <div>
        <Link href={link}>
            <p>{text}</p>
        </Link>
      
    </div>
  )
}

export default FooterLink
