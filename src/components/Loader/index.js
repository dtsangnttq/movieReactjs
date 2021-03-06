import React from 'react';
import '../Loader/style.css';
import styled from 'styled-components';
const Loadding = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
`;
export default function Loader() {
  return <Loadding></Loadding>;
}
