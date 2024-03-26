import { Checkbox as DSFRCheckbox } from '@codegouvfr/react-dsfr';
import styled from 'styled-components';

export const Checkbox = styled(DSFRCheckbox)`
  & .fr-label:before {
    margin-top: 0 !important;
  }
`;
