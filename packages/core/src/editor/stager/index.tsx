import React from 'react';
import { Element } from '@craftjs/core';
import { Container } from '@/container';

export const Stager: React.FC = () => (
  <div
    style={{
      padding: '20px',
      height: '100%',
      boxSizing: 'border-box',
    }}>
    <Element is={Container} id={'STAGER_CONTAINER'} canvas={true} />
  </div>
);
