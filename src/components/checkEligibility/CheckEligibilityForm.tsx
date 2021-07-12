import AddressAutocomplete from '@components/addressAutocomplete/AddressAutocomplete';
import { Button } from '@components/shared/Button';
import { useLocalStorageState } from '@utils/useLocalStorage';
import { useRouter } from 'next/router';
import React from 'react';
import { Coords, Point } from 'src/types';
import AlertEligibility from './AlertEligibility';
import { useHeatNetworks } from './useHeatNetworks';

const CheckEligibilityForm = () => {
  const { status, checkEligibility, isEligible } = useHeatNetworks();
  const showAlert = status === 'success';
  const isButtonDisabled = status !== 'success';
  const { push } = useRouter();
  const [, saveInStorage] = useLocalStorageState('');

  const handleAddressSelected = async (
    address: string,
    coordinates: Point
  ): Promise<void> => {
    const coords = getCoords(coordinates);
    await checkEligibility(coords);
    saveInStorage({ coords: [coords.lat, coords.lon], label: address });
  };
  const getCoords = (point: number[]): Coords => ({
    lon: point[0],
    lat: point[1],
  });
  return (
    <div className="fr-col-12 fr-col-md-8">
      <h1>Tester votre éligibilité</h1>
      {showAlert && <AlertEligibility isEligible={isEligible} />}
      <p>
        Votre copropriété peut-elle être raccordée à un réseau de chauffage
        urbain en France ?Découvrez s’il existe un réseau de chaleur proche de
        votre copropriété.
      </p>
      <AddressAutocomplete onAddressSelected={handleAddressSelected} />

      <div className="fr-col-offset-4">
        <Button
          onClick={() =>
            push({
              pathname: '/demande-de-contact',
              query: { isEligible },
            })
          }
          disabled={isButtonDisabled}
        >
          Nous contacter
        </Button>
      </div>
    </div>
  );
};

export default CheckEligibilityForm;
