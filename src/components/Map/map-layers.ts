import {
  ExpressionInputType,
  FilterSpecification,
  LayerSpecification,
  SourceSpecification,
  StyleSetterOptions,
  Map,
  ExpressionSpecification,
  LineLayerSpecification,
  CircleLayerSpecification,
} from 'maplibre-gl';
import {
  themeDefBuildings,
  themeDefDemands,
  themeDefEnergy,
  themeDefHeatNetwork,
  themeDefTypeGas,
  themeDefZoneDP,
} from 'src/services/Map/businessRules';
import { arrColorFromDefBuildingsDpeEnergy } from 'src/services/Map/businessRules/buildings';
import {
  themeDefZonePotentielChaud,
  themeDefZonePotentielFortChaud,
} from 'src/services/Map/businessRules/zonePotentielChaud';

import { ENERGY_TYPE, ENERGY_USED } from 'src/types/enum/EnergyType';
import { MapConfiguration } from 'src/services/Map/map-configuration';

export const tileSourcesMaxZoom = 17;

export const tileLayersMinZoom = 0;
export const intermediateTileLayersMinZoom = 12;

// gas usage & energy
export const minIconSize = 12;
export const maxIconSize = 30;

export const consommationsGazLayerMaxOpacity = 0.55;
export const energyLayerMaxOpacity = 0.65;
export const batimentsRaccordesLayerMaxOpacity = 0.65;

export const LegendDeskData = {
  energy: {
    min: 10,
    max: 150,
  },
  gasUsage: {
    min: 50,
    max: 2000,
  },
};

// --------------------
// --- Heat Network ---
// --------------------

export const outlineCenterLayerStyle: Pick<
  CircleLayerSpecification,
  'type' | 'paint'
> = {
  type: 'circle',
  paint: {
    'circle-stroke-color': [
      'case',
      ['boolean', ['get', 'reseaux classes']],
      themeDefHeatNetwork.classed.color,
      themeDefHeatNetwork.outline.color,
    ],
    'circle-stroke-width': [
      'interpolate',
      ['linear'],
      ['zoom'],
      5,
      2,
      8,
      2,
      9,
      3,
      15,
      4,
    ],
    'circle-color': '#fff',
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['zoom'],
      5,
      0,
      8,
      0,
      9,
      4,
      15,
      10,
    ],
  },
};

export const outlineLayerStyle: Pick<
  LineLayerSpecification,
  'type' | 'layout' | 'paint'
> = {
  type: 'line',
  layout: {
    'line-join': 'round',
    'line-cap': 'round',
  },
  paint: {
    'line-color': [
      'case',
      ['boolean', ['get', 'reseaux classes']],
      themeDefHeatNetwork.classed.color,
      themeDefHeatNetwork.outline.color,
    ],
    'line-width': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      3,
      2,
    ],
    'line-opacity': ['interpolate', ['linear'], ['zoom'], 11, 0.75, 15, 1],
  },
};

// -----------------
// --- Gas Usage ---
// -----------------
const CONSO = 'conso_nb';
const TYPE_GAS = 'code_grand';
const arrColorFromDefTypeGas = [
  ...Object.entries(themeDefTypeGas).flatMap(
    ([TypeGasName, styleObject]: [string, any]) => [
      TypeGasName,
      styleObject.color,
    ]
  ),
] as [ExpressionInputType, ExpressionInputType, ...ExpressionInputType[]];

// --------------
// --- Energy ---
// --------------
const NB_LOT = 'nb_logements';
const TYPE_ENERGY = 'energie_utilisee';
export const typeEnergy = {
  [ENERGY_USED.Fioul]: ENERGY_TYPE.Fuel,
  [ENERGY_USED.FioulDomestique]: ENERGY_TYPE.Fuel,
  [ENERGY_USED.Gaz]: ENERGY_TYPE.Gas,
  [ENERGY_USED.GazNaturel]: ENERGY_TYPE.Gas,
  [ENERGY_USED.GazCollectif]: ENERGY_TYPE.Gas,
  [ENERGY_USED.GazPropaneButane]: ENERGY_TYPE.Gas,
  [ENERGY_USED.Charbon]: ENERGY_TYPE.Wood,
  [ENERGY_USED.BoisDeChauffage]: ENERGY_TYPE.Wood,
  [ENERGY_USED.Electricite]: ENERGY_TYPE.Electric,
  [ENERGY_USED.EnergieAutre]: ENERGY_TYPE.Unknown,
  [ENERGY_USED.SansObjet]: ENERGY_TYPE.Unknown,
  [ENERGY_USED.Default]: ENERGY_TYPE.Unknown,
};
export const objTypeEnergy = Object.entries(typeEnergy).reduce(
  (acc: any, [key, value]: [string, string]) => {
    return {
      ...acc,
      [value]: [...(acc[value] || []), key],
    };
  },
  {}
);
const arrColorFromDefEnergy = Object.entries(themeDefEnergy).flatMap(
  ([energyName, styleObject]: [string, any]) => [
    objTypeEnergy[energyName],
    styleObject.color,
  ]
) as [ExpressionInputType, ExpressionInputType, ...ExpressionInputType[]];

const iconSize = 31;
const maxDisplaySize = 29;
const iconRatio = 1 / (iconSize / maxDisplaySize);
const getSymbolRatio: (size: number) => number = (size) =>
  iconRatio * (size / maxDisplaySize);

export type MapSourceLayersSpecification = {
  sourceId: SourceId;
  source: SourceSpecification;
  layers: CustomLayerSpecification[];
};

type CustomLayerSpecification = LayerSpecification & {
  id: LayerId;
  source: SourceId;
};

// = id passé en URL de l'API
export type SourceId =
  | 'network' // réseaux de chaud
  | 'zoneDP' // zones de développement prioritaire
  | 'futurNetwork' // réseaux de chaleur en construction
  | 'coldNetwork' // réseaux de froid
  | 'demands' // demandes d'éligibilité
  | 'gas' // consommations de gaz
  | 'energy' // batiments collectifs chauffés au fioul / gas
  | 'raccordements' // bâtiments raccordés
  | 'zonesPotentielChaud'
  | 'zonesPotentielFortChaud'
  | 'buildings'; // caractéristiques des bâtiments

export type LayerId =
  | 'reseauxDeChaleur-avec-trace'
  | 'reseauxDeChaleur-sans-trace'
  | 'reseauxEnConstruction-zone'
  | 'reseauxEnConstruction-trace'
  | 'reseauxDeFroid-avec-trace'
  | 'reseauxDeFroid-sans-trace'
  | 'zonesDeDeveloppementPrioritaire'
  | 'demandesEligibilite'
  | 'energy'
  | 'consommationsGaz'
  | 'batimentsRaccordes'
  | 'zonesPotentielChaud'
  | 'zonesPotentielChaud-contour'
  | 'zonesPotentielFortChaud'
  | 'zonesPotentielFortChaud-contour'
  | 'caracteristiquesBatiments';

// besoin d'une fonction dynamique pour avoir location.origin disponible côté client et aussi
// pouvoir construire les layers selon les filtres
export function buildMapLayers(
  network: string, // from router.query
  filter?: ExpressionSpecification
): MapSourceLayersSpecification[] {
  return [
    // ---------------------------
    // --- zonesPotentielChaud ---
    // ---------------------------
    {
      sourceId: 'zonesPotentielChaud',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/zonesPotentielChaud/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
        promoteId: 'ID_ZONE',
        attribution:
          '<a href="https://reseaux-chaleur.cerema.fr/espace-documentaire/enrezo" target="_blank">Cerema</a>',
      },
      layers: [
        {
          id: 'zonesPotentielChaud',
          source: 'zonesPotentielChaud',
          'source-layer': 'layer',
          minzoom: tileLayersMinZoom,
          type: 'fill',
          paint: {
            'fill-color': themeDefZonePotentielChaud.fill.color,
            'fill-opacity': themeDefZonePotentielChaud.fill.opacity,
          },
        },
        {
          id: 'zonesPotentielChaud-contour',
          source: 'zonesPotentielChaud',
          'source-layer': 'layer',
          minzoom: tileLayersMinZoom,
          type: 'line',
          paint: {
            'line-color': themeDefZonePotentielChaud.fill.color,
            'line-width': 2,
          },
        },
      ],
    },

    // -------------------------------
    // --- zonesPotentielFortChaud ---
    // -------------------------------
    {
      sourceId: 'zonesPotentielFortChaud',
      source: {
        type: 'vector',
        tiles: [
          `${location.origin}/api/map/zonesPotentielFortChaud/{z}/{x}/{y}`,
        ],
        maxzoom: tileSourcesMaxZoom,
        promoteId: 'ID_ZONE',
        attribution:
          '<a href="https://reseaux-chaleur.cerema.fr/espace-documentaire/enrezo" target="_blank">Cerema</a>',
      },
      layers: [
        {
          id: 'zonesPotentielFortChaud',
          source: 'zonesPotentielFortChaud',
          'source-layer': 'layer',
          minzoom: tileLayersMinZoom,
          type: 'fill',
          paint: {
            'fill-color': themeDefZonePotentielFortChaud.fill.color,
            'fill-opacity': themeDefZonePotentielFortChaud.fill.opacity,
          },
        },
        {
          id: 'zonesPotentielFortChaud-contour',
          source: 'zonesPotentielFortChaud',
          'source-layer': 'layer',
          minzoom: tileLayersMinZoom,
          type: 'line',
          paint: {
            'line-color': themeDefZonePotentielFortChaud.fill.color,
            'line-width': 2,
          },
        },
      ],
    },

    // ------------------------------------------
    // --- Zones de développement prioritaire ---
    // ------------------------------------------
    {
      sourceId: 'zoneDP',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/zoneDP/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'zonesDeDeveloppementPrioritaire',
          source: 'zoneDP',
          'source-layer': 'zoneDP',
          minzoom: tileLayersMinZoom,
          type: 'fill',
          paint: {
            'fill-color': themeDefZoneDP.fill.color,
            'fill-opacity': themeDefZoneDP.fill.opacity,
          },
        },
      ],
    },

    // --------------------------------------------
    // --- Caractéristiques des bâtiments (DPE) ---
    // --------------------------------------------
    {
      sourceId: 'buildings',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/buildings/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'caracteristiquesBatiments',
          source: 'buildings',
          'source-layer': 'buildings',
          minzoom: intermediateTileLayersMinZoom,
          type: 'fill',
          paint: {
            'fill-color': [
              'match',
              ['downcase', ['coalesce', ['get', 'dpe_energie'], 'N']],
              ...arrColorFromDefBuildingsDpeEnergy,
              themeDefBuildings.colors.unknow.color,
            ],
            'fill-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              intermediateTileLayersMinZoom + 0.2,
              0,
              intermediateTileLayersMinZoom + 0.2 + 1,
              themeDefBuildings.opacity,
            ],
          },
        },
      ],
    },

    // --------------
    // --- Energy ---
    // --------------
    {
      sourceId: 'energy',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/energy/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'energy',
          source: 'energy',
          'source-layer': 'energy',
          minzoom: intermediateTileLayersMinZoom,
          type: 'symbol',
          layout: {
            'icon-image': 'energy-picto',
            'icon-overlap': 'always',
            'symbol-sort-key': ['-', ['coalesce', ['get', NB_LOT], 0]],
            'icon-size': [
              'case',
              ['<', ['get', NB_LOT], LegendDeskData.energy.min],
              getSymbolRatio(minIconSize),
              ['<', ['get', NB_LOT], LegendDeskData.energy.max],
              [
                'interpolate',
                ['linear'],
                ['get', NB_LOT],
                LegendDeskData.energy.min,
                getSymbolRatio(minIconSize),
                LegendDeskData.energy.max,
                getSymbolRatio(maxIconSize),
              ],
              getSymbolRatio(maxIconSize),
            ],
          },
          paint: {
            'icon-color': [
              'match',
              ['get', TYPE_ENERGY],
              ...arrColorFromDefEnergy,
              themeDefEnergy.unknow.color,
            ],
            'icon-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              intermediateTileLayersMinZoom + 0.2,
              0,
              intermediateTileLayersMinZoom + 0.5 + 1,
              energyLayerMaxOpacity,
            ],
          },
        },
      ],
    },

    // -----------------
    // --- Gas Usage ---
    // -----------------
    {
      sourceId: 'gas',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/gas/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'consommationsGaz',
          source: 'gas',
          'source-layer': 'gasUsage',
          minzoom: intermediateTileLayersMinZoom,
          type: 'circle',
          layout: {
            'circle-sort-key': ['-', ['coalesce', ['get', CONSO], 0]],
          },
          paint: {
            'circle-color': [
              'match',
              ['get', TYPE_GAS],
              ...arrColorFromDefTypeGas,
              themeDefTypeGas.unknow.color,
            ],
            'circle-radius': [
              'case',
              ['<', ['get', CONSO], LegendDeskData.gasUsage.min],
              minIconSize / 2,
              ['<', ['get', CONSO], LegendDeskData.gasUsage.max],
              [
                'interpolate',
                ['linear'],
                ['get', CONSO],
                LegendDeskData.gasUsage.min,
                minIconSize / 2,
                LegendDeskData.gasUsage.max,
                maxIconSize / 2,
              ],
              maxIconSize / 2,
            ],
            'circle-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              intermediateTileLayersMinZoom + 0.2,
              0,
              intermediateTileLayersMinZoom + 0.2 + 1,
              consommationsGazLayerMaxOpacity,
            ],
            'circle-stroke-opacity': 0,
          },
        },
      ],
    },

    // -----------------
    // --- Demands ---
    // -----------------
    {
      sourceId: 'demands',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/demands/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'demandesEligibilite',
          source: 'demands',
          'source-layer': 'demands',
          minzoom: tileLayersMinZoom,
          type: 'circle',
          paint: {
            'circle-color': themeDefDemands.fill.color,
            'circle-stroke-color': themeDefDemands.stroke.color,
            'circle-radius': themeDefDemands.fill.size,
            'circle-stroke-width': themeDefDemands.stroke.size,
          },
        },
      ],
    },

    // ---------------------
    // --- Raccordements ---
    // ---------------------
    {
      sourceId: 'raccordements',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/raccordements/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'batimentsRaccordes',
          source: 'raccordements',
          'source-layer': 'raccordements',
          minzoom: intermediateTileLayersMinZoom,
          type: 'symbol',
          layout: {
            'icon-image': 'energy-picto',
            'icon-overlap': 'always',
            'icon-size': 0.5,
          },
          paint: {
            'icon-color': themeDefHeatNetwork.classed.color,
            'icon-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              intermediateTileLayersMinZoom + 0.2,
              0,
              intermediateTileLayersMinZoom + 0.5 + 1,
              batimentsRaccordesLayerMaxOpacity,
            ],
          },
        },
      ],
    },

    // ---------------------------
    // --- Future Heat Network ---
    // ---------------------------
    {
      sourceId: 'futurNetwork',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/futurNetwork/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'reseauxEnConstruction-zone',
          source: 'futurNetwork',
          'source-layer': 'futurOutline',
          minzoom: tileLayersMinZoom,
          filter: getNetworkFilter(undefined, filter, [
            '==',
            ['get', 'is_zone'],
            true,
          ]),
          type: 'fill',
          paint: {
            'fill-color': themeDefHeatNetwork.futur.color,
            'fill-opacity': themeDefHeatNetwork.futur.opacity,
          },
        },
        {
          id: 'reseauxEnConstruction-trace',
          source: 'futurNetwork',
          'source-layer': 'futurOutline',
          minzoom: tileLayersMinZoom,
          filter: getNetworkFilter(undefined, filter, [
            '==',
            ['get', 'is_zone'],
            false,
          ]),
          ...outlineLayerStyle,
          paint: {
            ...outlineLayerStyle.paint,
            'line-color': themeDefHeatNetwork.futur.color,
          },
        },
      ],
    },

    // --------------------
    // --- Heat Network ---
    // --------------------
    {
      sourceId: 'network',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/network/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'reseauxDeChaleur-avec-trace',
          source: 'network',
          'source-layer': 'outline',
          minzoom: tileLayersMinZoom,
          ...outlineLayerStyle,
          filter: getNetworkFilter(network, filter, [
            '==',
            ['get', 'has_trace'],
            true,
          ]),
        },
        {
          id: 'reseauxDeChaleur-sans-trace',
          source: 'network',
          'source-layer': 'outline',
          minzoom: tileLayersMinZoom,
          ...outlineCenterLayerStyle,
          filter: getNetworkFilter(network, filter, [
            '==',
            ['get', 'has_trace'],
            false,
          ]),
        },
      ],
    },

    // --------------------
    // --- Cold Network ---
    // --------------------
    {
      sourceId: 'coldNetwork',
      source: {
        type: 'vector',
        tiles: [`${location.origin}/api/map/coldNetwork/{z}/{x}/{y}`],
        maxzoom: tileSourcesMaxZoom,
      },
      layers: [
        {
          id: 'reseauxDeFroid-avec-trace',
          source: 'coldNetwork',
          'source-layer': 'coldOutline',
          minzoom: tileLayersMinZoom,
          ...outlineLayerStyle,
          paint: {
            ...outlineLayerStyle.paint,
            'line-color': themeDefHeatNetwork.cold.color,
          },
          filter: getNetworkFilter(network, filter, [
            '==',
            ['get', 'has_trace'],
            true,
          ]),
        },
        {
          id: 'reseauxDeFroid-sans-trace',
          source: 'coldNetwork',
          'source-layer': 'coldOutline',
          minzoom: tileLayersMinZoom,
          ...outlineCenterLayerStyle,
          paint: {
            ...outlineCenterLayerStyle.paint,
            'circle-stroke-color': themeDefHeatNetwork.cold.color,
          },
          filter: getNetworkFilter(network, filter, [
            '==',
            ['get', 'has_trace'],
            false,
          ]),
        },
      ],
    },
  ];
}

const getNetworkFilter = (
  network?: string,
  filter?: ExpressionSpecification,
  initialFilter?: ExpressionSpecification
): FilterSpecification => {
  const networkFilter: ExpressionSpecification = network
    ? ['==', ['get', 'Identifiant reseau'], network]
    : ['literal', true];
  return [
    'all',
    filter || ['literal', true],
    initialFilter || ['literal', true],
    networkFilter,
  ];
};

// extends the Map type to get fully typed layer and source ids
interface FCUMap extends Map {
  getLayer(id: LayerId): ReturnType<Map['getLayer']>;
  setLayoutProperty(
    layerId: LayerId,
    name: string,
    value: any,
    options?: StyleSetterOptions
  ): this;

  setFilter(
    layerId: LayerId,
    filter?: FilterSpecification | null,
    options?: StyleSetterOptions
  ): this;
}

/**
 * Apply the map configuration to the map layers.
 */
export function applyMapConfigurationToLayers(
  map: FCUMap,
  config: MapConfiguration
) {
  function setLayerVisibility(layerId: LayerId, visible: boolean) {
    if (!map.getLayer(layerId)) {
      console.warn(`Layer '${layerId}' is not set on map`);
      return;
    }
    map.setLayoutProperty(layerId, 'visibility', visible ? 'visible' : 'none');
  }

  setLayerVisibility(
    'caracteristiquesBatiments',
    config.proMode && config.caracteristiquesBatiments
  );
  setLayerVisibility('reseauxDeFroid-avec-trace', config.reseauxDeFroid);
  setLayerVisibility('reseauxDeFroid-sans-trace', config.reseauxDeFroid);
  setLayerVisibility(
    'demandesEligibilite',
    config.proMode && config.demandesEligibilite
  );
  setLayerVisibility(
    'energy',
    config.proMode &&
      (config.batimentsFioulCollectif.show || config.batimentsGazCollectif.show)
  );
  setLayerVisibility(
    'reseauxEnConstruction-trace',
    config.reseauxEnConstruction
  );
  setLayerVisibility(
    'reseauxEnConstruction-zone',
    config.reseauxEnConstruction
  );
  setLayerVisibility(
    'consommationsGaz',
    config.proMode && config.consommationsGaz.show
  );
  setLayerVisibility('reseauxDeChaleur-avec-trace', config.reseauxDeChaleur);
  setLayerVisibility('reseauxDeChaleur-sans-trace', config.reseauxDeChaleur);
  setLayerVisibility(
    'batimentsRaccordes',
    config.proMode && config.batimentsRaccordes
  );
  setLayerVisibility(
    'zonesDeDeveloppementPrioritaire',
    config.zonesDeDeveloppementPrioritaire
  );
  setLayerVisibility(
    'zonesPotentielChaud',
    config.proMode &&
      config.zonesOpportunite.show &&
      config.zonesOpportunite.zonesPotentielChaud
  );
  setLayerVisibility(
    'zonesPotentielChaud-contour',
    config.proMode &&
      config.zonesOpportunite.show &&
      config.zonesOpportunite.zonesPotentielChaud
  );
  setLayerVisibility(
    'zonesPotentielFortChaud',
    config.proMode &&
      config.zonesOpportunite.show &&
      config.zonesOpportunite.zonesPotentielFortChaud
  );
  setLayerVisibility(
    'zonesPotentielFortChaud-contour',
    config.proMode &&
      config.zonesOpportunite.show &&
      config.zonesOpportunite.zonesPotentielFortChaud
  );

  // custom filters for energy and consommationsGaz

  const TYPE_ENERGY = 'energie_utilisee';
  map.setFilter('energy', [
    'any',
    config.batimentsFioulCollectif.show
      ? [
          'all',
          ['==', ['get', TYPE_ENERGY], 'fioul'],
          [
            'all',
            ['>=', ['get', NB_LOT], config.batimentsFioulCollectif.interval[0]],
            ['<=', ['get', NB_LOT], config.batimentsFioulCollectif.interval[1]],
          ],
        ]
      : ['literal', false],
    config.batimentsGazCollectif.show
      ? [
          'all',
          ['==', ['get', TYPE_ENERGY], 'gaz'],
          [
            'all',
            ['>=', ['get', NB_LOT], config.batimentsGazCollectif.interval[0]],
            ['<=', ['get', NB_LOT], config.batimentsGazCollectif.interval[1]],
          ],
        ]
      : ['literal', false],
  ]);

  map.setFilter(
    'consommationsGaz',
    config.consommationsGaz.show && [
      'all',
      config.consommationsGaz.interval
        ? [
            'all',
            ['>=', ['get', CONSO], config.consommationsGaz.interval[0]],
            ['<=', ['get', CONSO], config.consommationsGaz.interval[1]],
          ]
        : true,
      [
        'any',
        config.consommationsGaz.logements && ['==', ['get', TYPE_GAS], 'R'],
        config.consommationsGaz.tertiaire && ['==', ['get', TYPE_GAS], 'T'],
        config.consommationsGaz.industrie && ['==', ['get', TYPE_GAS], 'I'],
      ],
    ]
  );
}