import React from 'react'
import type {LinkProps as RRLinkProps} from 'react-router-dom'
import {Link as RR, useMatch, useResolvedPath} from 'react-router-dom'

type LinkProps = RRLinkProps & {}

const Link: React.FC<LinkProps> = ({className: _className, to, ...props}) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({path: resolved.pathname, end: true})
  const className = [match && _className, match ? 'btn-active' : ' '].join(' ')

  return <RR {...props} to={to} className={className} />
}

export default Link
