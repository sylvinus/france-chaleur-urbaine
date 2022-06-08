import styled, { createGlobalStyle } from 'styled-components';

export const LegendGroupLabelStyle = createGlobalStyle`
.legend-label-description {
  font-size: 15px;
  font-size: 0.95em;

  em {
    display: block;
    line-height: 1.2;
    font-size: 11px;
    font-size: 0.7em;
    color: #8D93A1
  }
}
`;

export const GroupeLabelWrapper = styled.div`
  padding-bottom: 0.15em;

  &:last-child {
    padding-bottom: 0;
  }

  header {
    font-weight: bold;
    margin-bottom: 0.2em;
    font-size: 1.15em;
  }

  .groupe-label-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    align-items: stretch;
    padding: 0 0 0.4rem 0;

    &.subGroup {
      margin-left: 1.5em;
    }

    .label-item {
      flex: 1;
      min-width: 30%;
      max-width: 100%;
      display: flex;
      text-align: left;
      justify-content: flex-start;

      label {
        display: inline;
        white-space: nowrap;

        &::before {
          width: 0.7em;
        }
      }
    }
  }
`;
