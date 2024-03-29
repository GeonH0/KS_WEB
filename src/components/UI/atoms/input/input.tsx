import React, { useEffect, useState, useRef } from 'react';
// import styled, { css } from 'styled-components';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import {} from '@fortawesome/free-brands-svg-icons'; // 브랜드 아이콘
// import {} from '@fortawesome/free-solid-svg-icons'; // fill 타입 아이콘
// import {} from '@fortawesome/free-regular-svg-icons'; // outline 타입 아이콘
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // HOC

import StyledInput from './inputStyle';

const InputComponent: React.FC<any> = (props) => {
  return (
    <StyledInput onChange={props.onChange}   {...props}  />
     
  );
};

export default InputComponent;
