import React, {Component} from 'react'

type ClassComponentProps = {
  href: string
  text: string
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const {href, text} = this.props
    return (
      <ul>
        <li>
          <a href={href} rel="noopener">
            {text}
          </a>
        </li>
      </ul>
    )
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//함수형 컴포넌트로 변환1 -TS에서 많이 사용
/*
import React from 'react';

type ClassComponentProps = {
  href: string;
  text: string;
}

const ClassComponent: React.FC<ClassComponentProps> = ({ href, text }) => {
  return (
    <ul>
      <li>
        <a href={href} rel="noopener">
          {text}
        </a>
      </li>
    </ul>
  );
}

export default ClassComponent;
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//함수형 컴포넌트로 변환2 - JS에서 주로 사용
/*
import React from 'react';
import PropTypes from 'prop-types';

const ClassComponent = ({ href, text }) => {
  return (
    <ul>
      <li>
        <a href={href} rel="noopener">
          {text}
        </a>
      </li>
    </ul>
  );
}

ClassComponent.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ClassComponent;
*/
