import AddressAutocomplete from '@components/addressAutocomplete';
import { useServices } from 'src/services';
import { HandleAddressSelect } from 'src/types/HeatNetworksResponse';
import { SuggestionItem } from 'src/types/Suggestions';
import { MapSearchFormGlobalStyle } from './MapSearchForm.style';

const MapSearchForm = ({
  onAddressSelect,
}: {
  onAddressSelect: HandleAddressSelect;
}) => {
  const { heatNetworkService } = useServices();

  const handleAddressSelected = async (
    address: string,
    geoAddress: SuggestionItem
  ): Promise<void> => {
    const [lon, lat] = geoAddress.geometry.coordinates;

    const network = await heatNetworkService.findByCoords(
      { lat, lon },
      geoAddress.properties.city
    );
    const addressDetail = {
      network,
      geoAddress,
    };

    if (onAddressSelect) {
      onAddressSelect(address, geoAddress.geometry.coordinates, addressDetail);
    }
  };

  return (
    <>
      <MapSearchFormGlobalStyle />
      <AddressAutocomplete
        placeholder="Rechercher une adresse"
        onAddressSelected={handleAddressSelected}
        className="map-search-form"
        popoverClassName={'popover-map-search-form'}
      />
    </>
  );
};
export default MapSearchForm;
