import { afterEach, describe, expect, test } from 'vitest';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import Home from '../pages';
import { RenderWithRedux } from './renderWithRedux';

describe('Home', () => {
  describe('Success', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
    afterEach(() => {
      component.unmount();
    });

    test('Home forms', async () => {
      const HomeWithRedux = RenderWithRedux(Home);
      component =render(<HomeWithRedux />);
      const input = screen.findByPlaceholderText("Insira o username desejado");
      const button = screen.findByRole("button");

      fireEvent.change(await input, "breno5g");
      fireEvent.click(await button);
  
      const repo1 = screen.findByText("52-Projects-or-more");
      const repo2 = screen.findByText("backend-script");
      const repo3 = screen.findByText("breno5g");
  
      expect(repo1).toBeDefined();
      expect(repo2).toBeDefined();
      expect(repo3).toBeDefined();
    });
  });
});