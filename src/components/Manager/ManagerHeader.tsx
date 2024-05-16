import { Input } from '@codegouvfr/react-dsfr/Input';
import { Select } from '@codegouvfr/react-dsfr/SelectNext';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useServices } from 'src/services';
import { Demand } from 'src/types/Summary/Demand';
import { DEMANDE_STATUS } from 'src/types/enum/DemandSatus';
import { ExportButton, Filter, Filters } from './ManagerHeader.styles';

const typeDeChauffageOptions = [
  {
    label: 'Tous',
    value: '',
  },
  {
    label: 'Collectif',
    value: 'collectif',
  },
  {
    label: 'Individuel',
    value: 'individuel',
  },
];

const modeDeChauffageOptions = [
  {
    label: 'Tous',
    value: '',
  },
  {
    label: 'Gaz',
    value: 'gaz',
  },
  {
    label: 'Fioul',
    value: 'fioul',
  },
  {
    label: 'Électricité',
    value: 'électricité',
  },
];

const statusOptions = [{ label: 'Tous', value: '' }].concat(
  Object.values(DEMANDE_STATUS).map((status: string) => ({
    label: status,
    value: status,
  }))
);

const searchKeys: (keyof Demand)[] = ['Nom', 'Prénom', 'Mail'];

const cleanValue = (value: string | undefined): string => {
  return value
    ? value
        .toString()
        .toLowerCase()
        .replace(/é/g, 'e')
        .replace(/è/g, 'e')
        .replace(/à/g, 'a')
        .replace(/ô/g, 'o')
        .toLowerCase()
    : '';
};

const matchFilter = (filter: string, value: string | undefined) => {
  return cleanValue(value).includes(cleanValue(filter));
};

const ManagerHeader = ({
  demands,
  setFilteredDemands,
  setPage,
}: {
  demands: Demand[];
  setFilteredDemands: (demands: Demand[]) => void;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const { demandsService } = useServices();

  const [exporting, setExporting] = useState(false);

  const [gestionnaireOptions, setGestionnaireOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const [nameFilter, setNameFilter] = useState('');
  const [addressFilter, setAddressFilter] = useState('');
  const [filterModeChauffage, setFilterModeChauffage] = useState('');
  const [filterTypeChauffage, setFilterTypeChauffage] = useState('');
  const [statusFilter, setStatusFiler] = useState('');
  const [gestionnaireFilter, setGestionnaireFilter] = useState('');

  useEffect(() => {
    setGestionnaireOptions(
      demands
        .map((demand) => demand['Affecté à'])
        .filter(
          (gestionnaire, index, gestionnaires) =>
            gestionnaire && gestionnaires.indexOf(gestionnaire) === index
        )
        .sort((a, b) => a.localeCompare(b))
        .map((gestionnaire) => ({
          label: gestionnaire,
          value: gestionnaire,
        }))
    );
  }, [demands]);

  useEffect(() => {
    let filteredDemands = demands;
    if (nameFilter) {
      filteredDemands = filteredDemands.filter((demand) =>
        searchKeys.some((key) => matchFilter(nameFilter, demand[key] as string))
      );
    }

    if (addressFilter) {
      filteredDemands = filteredDemands.filter((demand) =>
        matchFilter(addressFilter, demand.Adresse)
      );
    }
    if (statusFilter === 'En attente de prise en charge') {
      filteredDemands = filteredDemands.filter(
        (demand) => !demand.Status || demand.Status === statusFilter
      );
    } else if (statusFilter) {
      filteredDemands = filteredDemands.filter(
        (demand) => demand.Status === statusFilter
      );
    }

    if (filterModeChauffage) {
      filteredDemands = filteredDemands.filter(
        (demand) =>
          demand['Mode de chauffage']?.toLowerCase() === filterModeChauffage
      );
    }

    if (filterTypeChauffage) {
      filteredDemands = filteredDemands.filter(
        (demand) =>
          demand['Type de chauffage']?.toLowerCase() === filterTypeChauffage
      );
    }

    if (gestionnaireFilter) {
      filteredDemands = filteredDemands.filter(
        (demand) => demand['Affecté à'] === gestionnaireFilter
      );
    }

    setFilteredDemands(filteredDemands);
  }, [
    addressFilter,
    nameFilter,
    statusFilter,
    filterModeChauffage,
    filterTypeChauffage,
    gestionnaireFilter,
    demands,
    setFilteredDemands,
  ]);

  useEffect(() => {
    setPage(1);
  }, [
    addressFilter,
    nameFilter,
    statusFilter,
    filterModeChauffage,
    filterTypeChauffage,
    setPage,
  ]);

  return (
    <Filters>
      <Filter>
        <Input
          label="Rechercher par nom ou par mail:"
          nativeInputProps={{
            type: 'email',
            required: true,
            value: nameFilter,
            onChange: (e) => setNameFilter(e.target.value),
          }}
        />
      </Filter>
      <Filter>
        <Input
          label="Rechercher par adresse:"
          nativeInputProps={{
            type: 'email',
            required: true,
            value: addressFilter,
            onChange: (e) => setAddressFilter(e.target.value),
          }}
        />
      </Filter>
      <Filter>
        <Select
          label="Statut:"
          options={statusOptions}
          nativeSelectProps={{
            onChange: (e) => setStatusFiler(e.target.value),
            value: statusFilter,
          }}
        />
      </Filter>
      <Filter>
        <Select
          label="Mode de chauffage:"
          options={modeDeChauffageOptions}
          nativeSelectProps={{
            onChange: (e) => setFilterModeChauffage(e.target.value),
            value: filterModeChauffage,
          }}
        />
      </Filter>
      <Filter>
        <Select
          label="Type de chauffage:"
          options={typeDeChauffageOptions}
          nativeSelectProps={{
            onChange: (e) => setFilterTypeChauffage(e.target.value),
            value: filterTypeChauffage,
          }}
        />
      </Filter>
      {gestionnaireOptions.length > 1 && (
        <Filter>
          <Select // TODO: le select est normalement searchable
            label="Gestionnaire:"
            options={gestionnaireOptions}
            nativeSelectProps={{
              onChange: (e) => setGestionnaireFilter(e.target.value),
              value: gestionnaireFilter,
            }}
          />
        </Filter>
      )}
      <ExportButton>
        {exporting ? (
          <Oval height={40} width={40} />
        ) : (
          <Button
            onClick={() => {
              setExporting(true);
              demandsService.export().finally(() => {
                setExporting(false);
              });
            }}
          >
            Exporter
          </Button>
        )}
      </ExportButton>
    </Filters>
  );
};

export default ManagerHeader;
