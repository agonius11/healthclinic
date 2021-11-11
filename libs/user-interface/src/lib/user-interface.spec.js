import { render } from '@testing-library/react';
import UserInterface from './user-interface';
describe('UserInterface', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserInterface />);
    expect(baseElement).toBeTruthy();
  });
});
