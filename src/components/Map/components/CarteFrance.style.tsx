import styled from 'styled-components';
import { Mode } from './CarteFrance';

type TooltipProps = {
  visible: boolean;
  x: number;
  y: number;
};

export const Tooltip = styled.div.attrs<TooltipProps>(({ visible, x, y }) => ({
  style: {
    transform: `translate3d(${x}px, ${y}px, 0px)`,
    visibility: visible ? 'visible' : 'hidden',
  },
}))<TooltipProps>`
  background-color: rgba(26, 33, 115, 0.9);
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.13);
  font-size: 13px;
  color: #ffffff;
  line-height: 18px;
  pointer-events: none;
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 12px;
`;

export const WrapperDiv = styled.div<{ mode: Mode }>`
  width: 100%;
  position: relative;
  pointer-events: none;

  g {
    pointer-events: fill;
  }

  path {
    stroke: #000000;
    stroke-width: 1px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: 0.25;
  }

  ${({ mode }) => {
    switch (mode) {
      case 'departemental':
        return `
        g path:hover {
          fill: #86eee0;
        }

        `;
      case 'regional':
        return `
        g:hover path {
          fill: #86cce0;
        }
        `;
      case 'national':
        return `
        // FIXME
      `;
    }
  }}
`;
