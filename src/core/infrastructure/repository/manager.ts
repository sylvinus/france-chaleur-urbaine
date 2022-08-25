import db from 'src/db';
import base from 'src/db/airtable';
import { Demand } from 'src/types/Summary/Demand';

export const getGestionnaire = (addresse: string): string | null => {
  if (addresse && addresse.includes('Paris')) {
    return 'Paris';
  }

  return null;
};

export const getDemands = async (email: string): Promise<Demand[]> => {
  const user = await db('users')
    .select(['gestionnaire'])
    .where({ email })
    .first();

  if (!user) {
    return [];
  }

  const results = await base('FCU - Utilisateurs')
    .select({
      filterByFormula: `Gestionnaire="${user.gestionnaire}"`,
      sort: [{ field: 'Date demandes', direction: 'desc' }],
    })
    .all();

  return results.map((result) => result.fields as Demand);
};
