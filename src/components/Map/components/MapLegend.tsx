import { Button } from '@dataesr/react-dsfr';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TypeGroupLegend } from 'src/types/TypeGroupLegend';
import { TypeLayerDisplay } from '../../../services/Map/param';
import { LegendSeparator } from '../Map.style';
import { Title } from './DPELegend.style';
import LegendEntry, { TypeLegendEntry } from './LegendEntry';
import { LabelLegendHead } from './LegendEntry.styled';
import LegendGroupLabel from './LegendGroupLabel';
import {
  LegendButton,
  LegendGlobalStyle,
  PotentielsRaccordementButton,
  Sources,
} from './MapLegend.style';
import { ButtonLink } from '@components/MarkdownWrapper/MarkdownWrapper.style';
import { useEffect, useState } from 'react';
import ModalCarteFrance from './ModalCarteFrance';
import Image from 'next/image';
import { trackEvent } from 'src/services/analytics';

function MapLegend({
  data,
  layerDisplay,
  legendTitle,
  onToggleFeature,
  onToggleInGroup,
  onValuesChange,
}: {
  data: (string | TypeGroupLegend)[];
  hasResults?: boolean;
  layerDisplay: TypeLayerDisplay;
  legendTitle?: string;
  onToggleFeature: (idEntry: any) => void;
  onToggleInGroup: (groupeName: string, idEntry: string) => void;
  onValuesChange?: (
    groupeName: string,
    idEntry: string,
    values: [number, number]
  ) => void;
}) {
  const router = useRouter();
  const [showStatsModal, setShowStatsModal] = useState(false);

  useEffect(() => {
    if (router.query['potentiels-de-raccordement'] !== undefined) {
      setShowStatsModal(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <LegendGlobalStyle />
      <LabelLegendHead fullWidth>
        {legendTitle || 'Réseaux de chaleur et de froid'}
      </LabelLegendHead>
      <Title className="fr-mb-1w">
        Cliquez sur un réseau pour connaître ses caractéristiques
      </Title>
      {data.map((group, i) => {
        if (group === 'separator') {
          return <LegendSeparator key={`separator-${i}`} />;
        }

        if (group === 'contributeButton') {
          return (
            <div key="contribute-button">
              <LegendButton>
                <Button
                  icon="ri-upload-2-line"
                  onClick={() => router.push('/contribution')}
                  size="sm"
                >
                  Contribuer
                </Button>
              </LegendButton>
              <LegendButton>
                <ButtonLink
                  href="./160224_Opendata_FCU.zip"
                  eventKey="Téléchargement|Tracés|carte"
                  download
                  className="fr-btn--sm"
                >
                  Télécharger les tracés
                </ButtonLink>
              </LegendButton>
            </div>
          );
        }

        if (group === 'statsByArea') {
          return (
            <PotentielsRaccordementButton
              secondary
              key="statsByArea"
              onClick={() => {
                trackEvent('Carto|ouverture popup potentiels de raccordement');
                setShowStatsModal(true);
              }}
              size="sm"
            >
              <Image src="/img/icon-france.png" alt="" width="19" height="19" />
              Voir les potentiels de raccordement
            </PotentielsRaccordementButton>
          );
        }

        if (group === 'sources') {
          return (
            <Sources key={'sources'}>
              <Link
                href="/documentation/carto_sources.pdf"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => {
                  trackEvent('Téléchargement|Carto sources');
                }}
              >
                Sources
              </Link>
            </Sources>
          );
        }

        if (group == 'proModeLegend') {
          return (
            <Title key={'proModeLegend'}>
              Pour voir plus de données, contribuer à la carte ou télécharger
              les tracés, activez le "Mode professionnel" en haut de la carte.
            </Title>
          );
        }

        if (typeof group === 'object') {
          const {
            id,
            subGroup,
            entries,
            subLegend,
            linkto,
            type = 'list',
          } = group;
          if (type === 'group') {
            return (
              <LegendGroupLabel
                layerDisplay={layerDisplay}
                key={`group-${id}-${subLegend}`}
                id={id}
                subLegend={subLegend}
                subGroup={subGroup}
                entries={entries}
                linkto={linkto}
                onChangeEntry={onToggleInGroup}
                onValuesChange={onValuesChange}
              />
            );
          }

          if (type === 'list') {
            return entries.map((entry: TypeLegendEntry) => (
              <div className="fr-mt-1w" key={entry.id}>
                <LegendEntry
                  checked={!!layerDisplay[entry.id]}
                  onChange={onToggleFeature}
                  subLegend={subLegend}
                  {...entry}
                />
              </div>
            ));
          }
        }
        return null;
      })}
      <ModalCarteFrance
        isOpen={showStatsModal}
        onClose={() => setShowStatsModal(false)}
      />
    </>
  );
}

export default MapLegend;
