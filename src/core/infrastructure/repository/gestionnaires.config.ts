export const gestionnairesPerCity: Record<
  string,
  { network?: string; gestionnaires: string[] }
> = {
  Amiens: { gestionnaires: ['ENGIE'] },
  Antony: { gestionnaires: ['ENGIE_Antony'] },
  Arcueil: { gestionnaires: ['SIPPEREC', 'ENGIE_IDF', 'ENGIE', 'ARGEO'] },
  Argenteuil: { gestionnaires: ['Dalkia', 'Dalkia_IDF'] },
  Aubervilliers: {
    gestionnaires: ['SMIREC', 'ENGIE', 'ENGIE_IDF', 'ENGIE_Aubervilliers'],
  },
  Bagneux: { gestionnaires: ['SIPPEREC', 'Dalkia', 'Dalkia_IDF', 'BAGEOPS'] },
  Bagnolet: { gestionnaires: ['ALEC_MVE', 'ENGIE_Bagnolet'] },
  Bobigny: { gestionnaires: ['SIPPEREC', 'ALEC_MVE'] },
  Bondy: { gestionnaires: ['ALEC_MVE'] },
  Bordeaux: { gestionnaires: ['BordeauxM'] },
  'Boulogne-Billancourt': { gestionnaires: ['IDEX', 'IDEX_IDF'] },
  'Bourgoin-Jallieu': { gestionnaires: ['Dalkia', 'Dalkia_Bourgoin-Jallieu'] },
  Brest: { gestionnaires: ['BrestM'] },
  Briey: { gestionnaires: ['Dalkia', 'Dalkia_Briey'] },
  'Brive-la-Gaillarde': {
    gestionnaires: ['Coriance_ Brive-la-Gaillarde', 'Coriance'],
  },
  Bron: { gestionnaires: ['LyonM'] },
  Bruges: { gestionnaires: ['BordeauxM'] },
  'Bry-sur-Marne': { gestionnaires: ['ALEC_MVE'] },
  'Bussy-Saint-Georges': { gestionnaires: ['IDEX', 'IDEX_IDF'] },
  Cachan: { gestionnaires: ['SOCACHAL', 'Dalkia', 'Dalkia_IDF'] },
  'Carrières sur Seine': { gestionnaires: ['ENGIE_Carrieres-sur-Seine'] },
  'Carrières-sous-Poissy': {
    gestionnaires: ['Dalkia', 'Dalkia_IDF', 'Dalkia_78'],
  },
  'Champigny-sur-Marne': { gestionnaires: ['EPCampinoisGeoth', 'ALEC_MVE'] },
  'Champs-sur-Marne': {
    gestionnaires: ['ENGIE_IDF', 'ENGIE', 'ENGIE_Champs-sur-Marne'],
  },
  'Charenton-le-Pont': { gestionnaires: ['ALEC_MVE'] },
  'Châtenay-Malabry': { gestionnaires: ['Dalkia', 'Dalkia_IDF'] },
  Châtillon: { gestionnaires: ['SIPPEREC', 'Dalkia', 'BAGEOPS', 'Dalkia_IDF'] },
  Chatou: { gestionnaires: ['ENGIE_Chatou'] },
  'Choisy-le-Roi': {
    gestionnaires: ['SICUCV', 'ENGIE_IDF', 'ENGIE', 'ENGIE_Choisy-le-Roi'],
  },
  Clichy: { gestionnaires: ['IDEX_IDF', 'IDEX', 'IDEX_Clichy-la-Garenne '] },
  'Clichy-sous-Bois': { gestionnaires: ['ALEC_MVE'] },
  Compiègne: { gestionnaires: ['ENGIE_Compiegne'] },
  Coubron: { gestionnaires: ['ALEC_MVE'] },
  Courbevoie: { gestionnaires: ['Dalkia', 'Dalkia_IDF'] },
  Créteil: { gestionnaires: ['Dalkia', 'Dalkia_IDF'] },
  'Dammarie-les-Lys': { gestionnaires: ['ENGIE_Dammarie-les-Lys'] },
  Dijon: { gestionnaires: ['DijonM'] },
  'Épinay-sous-Sénart': { gestionnaires: ['SEMGEP'] },
  Ermont: { gestionnaires: ['ENGIE_Ermont'] },
  'Fontenay-sous-Bois': { gestionnaires: ['ALEC_MVE'] },
  Franconville: { network: '9507C', gestionnaires: ['ENGIE_Franconville'] },
  Gagny: { gestionnaires: ['ALEC_MVE'] },
  Gennevilliers: {
    gestionnaires: ['ENGIE_IDF', 'ENGIE', 'ENGIE_Gennevilliers'],
  },
  Gentilly: {
    gestionnaires: ['SIPPEREC', 'ENGIE', 'ENGIE_IDF', 'ARGEO', 'ENGIE_ARGEO'],
  },
  'Gournay-sur-Marne': { gestionnaires: ['ALEC_MVE'] },
  Grenoble: { gestionnaires: ['GrenobleM'] },
  Grigny: { gestionnaires: ['ENGIE_Grigny'] },
  Houilles: { gestionnaires: ['ENGIE_Houilles'] },
  'Ivry-sur-Seine': { gestionnaires: ['ENGIE_Ivry-sur-Seine'] },
  'Joinville-le-Pont': { gestionnaires: ['ALEC_MVE'] },
  'L’île-Saint-Denis': { gestionnaires: ['ENGIE_LIle-Saint-Denis'] },
  'Le Chesnay-Rocquencourt': { gestionnaires: ['ENGIE_Le-Chesnay'] },
  'Le Perreux-sur-Marne': { gestionnaires: ['ALEC_MVE'] },
  'Le Pré-Saint-Gervais': { gestionnaires: ['ALEC_MVE'] },
  'Le Raincy': { gestionnaires: ['ALEC_MVE'] },
  'les Lilas': { gestionnaires: ['ALEC_MVE'] },
  'Les Pavillons-sous-Bois': { gestionnaires: ['ALEC_MVE'] },
  'Levallois-Perret': { gestionnaires: ['IDEX', 'IDEX_IDF'] },
  Liévin: { gestionnaires: ['Dalkia', 'Lievin'] },
  Lille: { gestionnaires: ['LilleM'] },
  'Limeil-Brévannes': { gestionnaires: ['ENGIE', 'ENGIE_IDF'] },
  Limoges: { gestionnaires: ['LimogesM'] },
  Lisieux: { gestionnaires: ['ENGIE'] },
  'Livry-Gargan': { gestionnaires: ['ALEC_MVE'] },
  Lyon: { gestionnaires: ['LyonM'] },
  Madeleine: { gestionnaires: ['Dalkia'] },
  'Maisons-Alfort': { gestionnaires: ['ALEC_MVE'] },
  'Mantes-la-Jolie': { gestionnaires: ['Dalkia', 'Dalkia_IDF', 'Dalkia_78'] },
  'Marne-la-Vallée': { gestionnaires: ['ENGIE_Marne-la-Vallee'] },
  Massy: { gestionnaires: ['ENGIE_Massy'] },
  Mérignac: { gestionnaires: ['BordeauxM'] },
  Metz: { gestionnaires: ['MetzM'] },
  Meudon: { gestionnaires: ['ENGIE_Meudon'] },
  'Mons-en-Barœul': { gestionnaires: ['LilleM'] },
  Montesson: { gestionnaires: ['ENGIE_Montesson'] },
  Montfermeil: { gestionnaires: ['ALEC_MVE'] },
  Montreuil: {
    gestionnaires: ['ENGIE', 'ENGIE_IDF', 'ALEC_MVE', 'ENGIE_Montreuil'],
  },
  Nancy: { gestionnaires: ['NancyM'] },
  Nantes: { gestionnaires: ['NantesM'] },
  Nemours: { gestionnaires: ['Dalkia_Nemours'] },
  'Neuilly-Plaisance': { gestionnaires: ['ALEC_MVE'] },
  'Neuilly-sur-Marne': { gestionnaires: ['ALEC_MVE'] },
  Nice: { gestionnaires: ['NiceM'] },
  Nîmes: { gestionnaires: ['Dalkia'] },
  Noisiel: { gestionnaires: ['ENGIE_Noisiel'] },
  'Noisy-le-Grand': { gestionnaires: ['ALEC_MVE'] },
  'Noisy-le-Sec': {
    gestionnaires: [
      'SIPPEREC',
      'YGEO',
      'ENGIE_IDF',
      'ENGIE',
      'ALEC_MVE',
      'ENGIE_Noisy-le-Sec',
    ],
  },
  Pantin: { gestionnaires: ['SIPPEREC', 'ALEC_MVE'] },
  Paris: { gestionnaires: ['CPCU', 'APC'] },
  Pau: { gestionnaires: ['PauM'] },
  'Pierrefitte-sur-Seine': {
    network: '9301C',
    gestionnaires: ['ENGIE_Pierrefitte-sur-Seine'],
  },
  Plaisir: {
    gestionnaires: ['Dalkia', 'Dalkia_IDF', 'Dalkia_78', 'Dalkia_Plaisir'],
  },
  Puteaux: { gestionnaires: ['Dalkia', 'Dalkia_IDF'] },
  Reims: { gestionnaires: ['ENGIE_Reims'] },
  Rennes: { gestionnaires: ['RennesM'] },
  Romainville: { gestionnaires: ['ALEC_MVE'] },
  'Rosny-sous-Bois': {
    gestionnaires: [
      'SIPPEREC',
      'ENGIE_IDF',
      'ENGIE',
      'YGEO',
      'ALEC_MVE',
      'ENGIE_Rosny-sous-Bois',
    ],
  },
  Roubaix: { gestionnaires: ['LilleM'] },
  Rouen: { gestionnaires: ['RouenM'] },
  'Rueil Malmaison': { gestionnaires: ['ENGIE_Rueil-Malmaison'] },
  'Saint-Denis': {
    gestionnaires: ['ENGIE', 'ENGIE_IDF', 'SMIREC', 'ENGIE_Saint-Denis'],
  },
  'Saint-Étienne': { gestionnaires: ['Saint-EtienneM'] },
  'Saint-Germain-en-Laye': {
    gestionnaires: ['Dalkia', 'Dalkia_IDF', 'Dalkia_78'],
  },
  'Saint-Mandé': { gestionnaires: ['ALEC_MVE'] },
  'Saint-Maur-des-Fossés': { gestionnaires: ['ALEC_MVE'] },
  'Saint-Maurice': { gestionnaires: ['ALEC_MVE'] },
  'Sainte-Savine': { gestionnaires: ['TroyesM'] },
  Sannois: { gestionnaires: ['ENGIE_Sannois'] },
  Sarcelles: { gestionnaires: ['Dalkia', 'Dalkia_IDF', 'Dalkia_Sarcelles'] },
  Sartrouville: { gestionnaires: ['ENGIE_Sartrouville'] },
  Schiltigheim: { gestionnaires: ['ENGIE'] },
  Stains: { gestionnaires: ['ENGIE_Stains'] },
  Strasbourg: { gestionnaires: ['StrasbourgM'] },
  'Sucy-en-Brie': { gestionnaires: ['ENGIE_Sucy-en-Brie'] },
  Suresnes: { gestionnaires: ['Dalkia', 'Dalkia_IDF'] },
  Thiais: { gestionnaires: ['ENGIE_Thiais'] },
  Toulouse: { gestionnaires: ['ToulouseM'] },
  Valenton: { gestionnaires: ['Dalkia', 'Dalkia_IDF', 'Dalkia_Valenton'] },
  Vaujours: { gestionnaires: ['ALEC_MVE'] },
  'Vaulx-en-Velin': { gestionnaires: ['LyonM'] },
  'Vaux-le-Pénil': { gestionnaires: ['Dalkia', 'Dalkia_IDF'] },
  'Vélizy-Villacoublay': { gestionnaires: ['ENGIE_Velizy'] },
  Versailles: { gestionnaires: ['ENGIE_Versailles'] },
  Villejuif: { gestionnaires: ['SEMHACH'] },
  Villemomble: { gestionnaires: ['ALEC_MVE'] },
  Villepinte: { gestionnaires: ['ENGIE_Villepinte'] },
  'Villiers-sur-Marne': { gestionnaires: ['ALEC_MVE'] },
  Vincennes: { gestionnaires: ['ALEC_MVE'] },
  'Vitry-sur-Seine': { gestionnaires: ['ENGIE_Vitry-sur-Seine'] },
  Voreppe: { gestionnaires: ['Dalkia', 'Dalkia_Voreppe'] },
};

// Generated by export NODE_PATH=./ && npx ts-node scripts/getGestionnairesPerNetwork.ts
export const gestionnairesPerNetwork: Record<string, string[]> = {
  '0101C': ['Dalkia_centre-est'],
  '0105C': ['Dalkia_centre-est'],
  '0106C': ['Dalkia_centre-est'],
  '0110C': ['ENGIE', 'ENGIE_Bourg-en-Bresse'],
  '0302C': ['Dalkia_centre-est'],
  '0307C': ['Dalkia_centre-est'],
  '0601C': ['NiceM', 'Dalkia_Nice', 'Dalkia'],
  '0702C': ['Dalkia_centre-est'],
  '0802C': ['CU_Charleville-Mezieres', 'Ardenne_Metropole', 'Dalkia'],
  '1207C': ['Pouzols'],
  '1317C': ['ENGIE', 'ENGIE_Aix-en-Provence'],
  '1319C': ['ToulonM'],
  '1402C': ['ENGIE'],
  '1408C': ['CaenM'],
  '1413C': ['CaenM', 'Dalkia'],
  '2102C': ['DijonM', 'Coriance', 'Coriance_Dijon'],
  '2106C': [
    'Dalkia_centre-est',
    'DijonM',
    'Dalkia',
    'Dalkia_Dijon',
    'Coriance',
    'Coriance_Dijon',
  ],
  '2604C': ['Dalkia_centre-est'],
  '2701C': ['Dalkia'],
  '2901C': ['BrestM', 'Dalkia', 'Dalkia_Brest'],
  '3001C': ['MonpellierM', 'Dalkia'],
  '3101C': ['ToulouseM', 'Coriance_Toulouse', 'Coriance'],
  '3106C': ['ToulouseM', 'Dalkia', 'Dalkia_Toulouse'],
  '3302C': ['BordeauxM', 'Engie_Bordeaux', 'ENGIE'],
  '3303C': ['BordeauxM'],
  '3304C': ['BordeauxM', 'Mixener', 'IDEX'],
  '3306C': ['Mixener', 'BordeauxM', 'IDEX'],
  '3315C': ['BordeauxM'],
  '3316C': ['BordeauxM'],
  '3317C': ['BordeauxM'],
  '3318C': ['BordeauxM', 'Mixener', 'IDEX'],
  '3319C': ['BordeauxM', 'Mixener', 'IDEX'],
  '3324C': ['BordeauxM', 'IDEX', 'Mixener'],
  '3410C': ['MonpellierM', 'SERM_Montpellier', 'MontpellierM'],
  '3506C': ['RennesM', 'RennesM_Rennes Sud', 'ENGIE', 'Engie_Rennes'],
  '3507C': ['RennesM', 'Engie_Rennes', 'ENGIE', 'EnRnov_Rennes'],
  '3702C': ['Dalkia', 'Dalkia_Tours'],
  '3712C': ['ENGIE', 'ENGIE_Tours'],
  '3802C': ['GrenobleM', 'CCIAG_Grenoble'],
  '3803C': ['Dalkia_centre-est', 'Dalkia', 'Dalkia_Bourgoin-Jallieu'],
  '3806C': ['Dalkia_centre-est', 'Dalkia'],
  '3813C': ['Dalkia_centre-est', 'Dalkia', 'Dalkia_Voreppe'],
  '3814C': ['Dalkia_centre-est'],
  '4101C': ['ENGIE', 'ENGIE_Blois'],
  '4202C': ['Dalkia_centre-est', 'Saint-EtienneM'],
  '4204C': [
    'Dalkia_centre-est',
    'Saint-EtienneM',
    'Dalkia',
    'Dalkia_Saint-Etienne',
  ],
  '4206C': ['Saint-EtienneM'],
  '4207C': ['Dalkia_centre-est'],
  '4210C': [
    'Dalkia_centre-est',
    'Saint-EtienneM',
    'Dalkia_Saint-Etienne-Montreynaud',
    'Dalkia',
  ],
  '4214C': ['Dalkia_centre-est', 'Saint-EtienneM'],
  '4247C': ['Saint-EtienneM'],
  '4405C': ['NantesM', 'Dalkia', 'Dalkia_Nantes'],
  '4503C': ['OrléansM', 'ENGIE_Orleans', 'ENGIE'],
  '4504C': ['Dalkia', 'Dalkia_Montargis'],
  '4901C': ['AngersM'],
  '4907C': ['AngersM', 'ALTER', 'Dalkia', 'Dalkia_Angers'],
  '4911C': ['AngersM', 'ALTER'],
  '5401C': ['NancyM', 'Dalkia', 'Dalkia_Nancy'],
  '5403C': ['NancyM', 'Dalkia', 'Dalkia_Nancy'],
  '5407C': ['Dalkia', 'Dalkia_Nancy', 'NancyM'],
  '5411C': ['NancyM', 'Dalkia_Nancy', 'Dalkia'],
  '5414C': ['MetzM', 'Briey', 'Dalkia', 'Dalkia_Briey'],
  '5502C': ['Dalkia', 'Dalkia_Nord_Lorraine'],
  '5701C': ['MetzM'],
  '5706C': ['ENGIE'],
  '5802C': ['Dalkia_centre-est'],
  '5803C': ['Dalkia_centre-est'],
  '5901C': ['LilleM', 'Dalkia', 'Dalkia_Roubaix', 'Dalkia_Lille'],
  '5905C': ['LilleM'],
  '5906C': ['LilleM'],
  '5907C': ['LilleM'],
  '5909C': ['LilleM'],
  '5910C': ['LilleM', 'Dalkia_Lille', 'Dalkia', 'Madeleine'],
  '5917C': ['LilleM'],
  '6109C': ['Dalkia_Alencon', 'Dalkia'],
  '6201C': ['Dalkia', 'Dalkia_Avion'],
  '6204C': ['Dalkia', 'Dalkia_Bethune'],
  '6206C': ['Dalkia', 'Dalkia_Lievin'],
  '6304C': ['Dalkia_centre-est'],
  '6306C': ['Dalkia_centre-est', 'Clermont-FerrandM', 'Dalkia'],
  '6307C': ['Dalkia_centre-est', 'Clermont-FerrandM'],
  '6701C': ['StrasbourgM', 'Strasbourg_centre_energie'],
  '6725C': ['StrasbourgM', 'Strasbourg_Wacken', 'R-CUA'],
  '6728C': ['StrasbourgM'],
  '6801C': ['SCCU_Colmar'],
  '6901C': ['Dalkia_centre-est', 'LyonM', 'Dalkia', 'Dalkia_ELM Lyon'],
  '6904C': ['Dalkia_centre-est'],
  '6905C': [
    'Dalkia_centre-est',
    'LyonM',
    'Dalkia',
    'Dalkia_ELM Lyon',
    'Venissieux',
  ],
  '6905F': ['LyonM', 'Dalkia', 'Dalkia_ELM Lyon'],
  '6906C': ['Dalkia_centre-est'],
  '6913C': ['Sytraival'],
  '6918C': ['Dalkia_centre-est'],
  '6930C': ['LyonM', 'Engie_Lyon', 'ENGIE'],
  '7104C': ['Dalkia_centre-est'],
  '7301C': ['ENGIE_Chambery', 'ENGIE'],
  '7318C': ['Dalkia_centre-est'],
  '7319C': ['Dalkia_centre-est'],
  '7402C': ['Dalkia_centre-est', 'Dalkia', 'Dalkia_Annecy'],
  '7407C': ['Dalkia_centre-est'],
  '7408C': ['Dalkia_centre-est'],
  '7410C': ['Dalkia_centre-est'],
  '7411C': ['Dalkia_centre-est'],
  '7412C': ['Dalkia_centre-est'],
  '7421C': ['IDEX', 'Idex_Annecy'],
  '7423C': ['Dalkia_centre-est'],
  '7501C': ['CPCU', 'APC', 'Paris'],
  '7601C': ['RouenM'],
  '7602C': ['LeHavreM'],
  '7603C': ['LeHavreM'],
  '7605C': ['RouenM', 'Coriance_Rouen', 'Coriance'],
  '7607C': ['RouenM'],
  '7612C': ['RouenM'],
  '7613C': ['LeHavreM'],
  '7614C': ['RouenM', 'Dalkia_Rouen-Grammont', 'Dalkia'],
  '7701C': ['Coriance', 'Coriance_IDF'],
  '7703C': ['Dalkia', 'Dalkia_IDF'],
  '7707C': ['Dalkia', 'Dalkia_IDF'],
  '7710C': ['Dalkia', 'Dalkia_IDF'],
  '7716C': ['Dalkia', 'Dalkia_IDF'],
  '7717C': ['Coriance', 'Coriance_IDF'],
  '7724C': ['IDEX', 'IDEX_IDF', 'IDEX_Bussy-Saint-Georges'],
  '7727C': ['ALEC_MVE'],
  '7802C': ['Dalkia_78', 'Dalkia'],
  '7803C': ['ENGIE_Versailles', 'ENGIE', 'ENGIE_IDF'],
  '7804C': ['ENGIE_IDF', 'ENGIE', 'ENGIE_Le-Chesnay'],
  '7805C': ['Dalkia', 'Dalkia_IDF', 'DDT78', 'Dalkia_78'],
  '7811C': [
    'ENGIE_Sartrouville',
    'ENGIE',
    'ENGIE_IDF',
    'ENGIE_78',
    'DDT78',
    'ENGIE_Chatou',
  ],
  '7812C': [
    'DDT78',
    'Dalkia',
    'Dalkia_IDF',
    'Dalkia_78',
    'Dalkia_Plaisir',
    'ALEC_SQY',
  ],
  '8701C': ['LimogesM'],
  '9101C': ['ENGIE', 'ENGIE_IDF', 'ENGIE_Massy'],
  '9103C': ['Dalkia', 'Dalkia_IDF', 'Dalkia_Grand-Paris-Sud'],
  '9104C': [
    'SIPPEREC',
    'SIPPEREC_SEER',
    'SEER',
    'ENGIE_Grigny',
    'ENGIE_IDF',
    'ENGIE',
  ],
  '9107C': ['IDEX', 'IDEX_IDF', 'IDEX_Dourdan'],
  '9109C': ['IDEX', 'IDEX_IDF', 'IDEX_Vigneux-sur-Seine'],
  '9114C': ['SEMGEP'],
  '9205C': ['ENGIE_IDF', 'ENGIE', 'ENGIE_Gennevilliers'],
  '9209C': ['ENGIE', 'ENGIE_Chaville', 'ENGIE_IDF'],
  '9211C': ['IDEX', 'IDEX_IDF', 'IDEX_Levallois-Perret'],
  '9219C': ['IDEX', 'IDEX_IDF', 'IDEX_Boulogne-Billancourt'],
  '9222C': ['Dalkia', 'Dalkia_IDF'],
  '9224C': ['Dalkia', 'Dalkia_IDF', 'Courbevoie'],
  '9225C': ['IDEX', 'IDEX_IDF', 'IDEX_La Défense'],
  '9230C': ['Dalkia', 'Dalkia_IDF'],
  '92324C': [
    'SIPPEREC',
    'ENGIE_IDF',
    'ENGIE',
    'YGEO',
    'ALEC_MVE',
    'ENGIE_Montreuil',
  ],
  '9235C': ['IDEX_IDF', 'IDEX', 'IDEX_Clichy-la-Garenne'],
  '9236C': ['SIPPEREC', 'Dalkia', 'Dalkia_IDF', 'BAGEOPS'],
  '9301C': [
    'ENGIE',
    'ENGIE_IDF',
    'SMIREC',
    'ENGIE_Saint-Denis',
    'ENGIE_Aubervilliers',
    'SIPPEREC',
    'ALEC_MVE',
    'ENGIE_Stains',
  ],
  '9302C': [
    'ALEC_MVE',
    'ENGIE_Bagnolet',
    'ENGIE',
    'ENGIE_IDF',
    'SDCB',
    'SIPPEREC',
    'ENGIE_Montreuil',
  ],
  '9303C': [
    'SIPPEREC',
    'GENYO',
    'ALEC_MVE',
    'YGEO',
    'ENGIE_IDF',
    'ENGIE',
    'ENGIE_Noisy-le-Sec',
  ],
  '9304C': ['ENGIE_Sevran', 'ENGIE', 'ENGIE_IDF'],
  '9305C': ['ALEC_MVE', 'IDEX_Neuilly-sur-Marne', 'IDEX_IDF', 'IDEX'],
  '9310C': ['Blanc-Mesnil'],
  '9311C': ['ALEC_MVE', 'Dalkia', 'Dalkia_IDF'],
  '9314C': ['IDEX', 'IDEX_IDF', 'IDEX_Tremblay-en-France'],
  '9316C': ['ALEC_MVE', 'Coriance', 'Coriance_IDF'],
  '9324C': [
    'ENGIE',
    'ENGIE_IDF',
    'ALEC_MVE',
    'ENGIE_Montreuil',
    'SIPPEREC',
    'YGEO',
    'ENGIE_Noisy-le-Sec',
    'ENGIE_Rosny-sous-Bois',
  ],
  '9401C': ['ENGIE', 'ENGIE_IDF', 'ENGIE_Limeil-Brevannes'],
  '9402C': ['Dalkia', 'Dalkia_IDF', 'Dalkia_Valenton'],
  '9403C': [
    'ENGIE_Vitry-sur-Seine',
    'SICUCV',
    'ENGIE',
    'ENGIE_IDF',
    'ENGIE_Choisy-le-Roi',
    'Dalkia',
    'Dalkia_IDF',
  ],
  '9404C': ['ALEC_MVE'],
  '9408C': ['AGESVAM'],
  '9409C': ['ENGIE_Sucy-en-Brie', 'ENGIE_IDF', 'ENGIE'],
  '9410C': ['SOCACHAL', 'Dalkia', 'Dalkia_IDF'],
  '9411C': ['ALEC_MVE', 'EPCampinoisGeoth'],
  '9412C': ['ALEC_MVE', 'SEMGEMA'],
  '9413C': ['ENGIE', 'ENGIE_IDF', 'ENGIE_Choisy-le-Roi', 'ENGIE_Thiais'],
  '9415C': ['ENGIE_Thiais', 'SEMHACH'],
  '9419C': ['Coriance', 'Coriance_IDF', 'ENGIE_Antony'],
  '9420C': ['AGESVAM'],
  '9422C': ['SIPPEREC', 'ENGIE', 'ENGIE_IDF', 'ARGEO', 'ENGIE_ARGEO'],
  '9423C': ['ENGIE_Ivry-sur-Seine', 'ENGIE', 'ENGIE_IDF'],
  '9424C': ['Dalkia', 'Dalkia_IDF', 'Dalkia_Valenton'],
  '9502C': ['Dalkia', 'Dalkia_IDF', 'Dalkia_Sarcelles'],
  '9503C': ['Coriance_IDF', 'Coriance'],
  '9505C': ['Coriance', 'Coriance_IDF'],
  '9507C': ['ENGIE', 'ENGIE_IDF', 'ENGIE_Franconville'],
  '9509C': ['Dalkia', 'Dalkia_IDF', 'Dalkia_Argenteuil', 'Dalkia_Bezons'],
  '9514C': ['Coriance', 'Coriance_IDF'],
  '9515C': ['Dalkia', 'Dalkia_IDF'],
};
