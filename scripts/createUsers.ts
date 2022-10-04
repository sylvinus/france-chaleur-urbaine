import bcrypt from 'bcryptjs';
import db from '../src/db';
import base from '../src/db/airtable';

const createUsers = async () => {
  try {
    const gestionnaires = await base('FCU - Tags gestionnaires').select().all();
    const users = await db('users').select('email');
    const existingEmails = new Set(users.map((user) => user.email));
    const salt = await bcrypt.genSalt(10);

    for (let i = 0; i < gestionnaires.length; i++) {
      const gestionnaire = gestionnaires[i];
      const tag = gestionnaire.get('Nom tag');
      for (let j = 1; j < 10; j++) {
        const email = gestionnaire.get(`Email ${j}`);
        if (email) {
          if (!existingEmails.has(email)) {
            console.log(`Create account for ${email} on ${tag}.`);
            await db('users').insert({
              email,
              password: bcrypt.hashSync(
                Math.random().toString(36).slice(2, 10),
                salt
              ),
              gestionnaire: tag,
            });
          } else {
            console.log(`Email ${email} already exists.`);
          }
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
  process.exit(0);
};

createUsers();