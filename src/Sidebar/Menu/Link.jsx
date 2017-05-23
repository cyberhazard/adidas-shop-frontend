import React from 'react';
import { Link } from './styled';

export default ({ to, children }) =>
  <Link to={to} activeClassName="is-active">{children}</Link>;
