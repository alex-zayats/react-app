import React from 'react';
import './MovieDetailsHeader.scss';

import { Header } from 'src/components/Common/Header';

export function MovieDetailsHeader({children}) {
  return (
    <Header className="details-header">
      {children}
    </Header>
  );
}
