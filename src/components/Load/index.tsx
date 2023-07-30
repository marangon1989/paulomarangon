import React from 'react';
import { Container, LoadIndicator } from './styles';

export function Load() {
  return (
    <Container>
      <LoadIndicator size="large" style={{ flex: 1 }} />
    </Container>
  );
}
