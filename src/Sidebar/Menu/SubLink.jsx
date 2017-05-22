import React from 'react';
import { SubLink } from './styled';

export default ({ to, children }) =>
  <SubLink to={to} activeClassName="is-active">{children}</SubLink>;
