import { Alert } from '@codegouvfr/react-dsfr/Alert';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { submitToAirtable } from '@helpers/airtable';
import { FormEvent, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { Airtable } from 'src/types/enum/Airtable';
import { Container, Email } from './Newsletter.styles';

const Newsletter = () => {
  const [sending, setSending] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const addToNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    submitToAirtable({ Email: email }, Airtable.NEWSLETTER).then(() =>
      setSent(true)
    );
  };

  return (
    <Container onSubmit={addToNewsletter}>
      {sent ? (
        <Alert
          severity="success"
          title="Vous recevrez désormais notre newsletter. Pensez à vérifier vos spams."
        />
      ) : (
        <>
          <Email
            type="email"
            placeholder="Paris@villedeparis.fr"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          {sending ? (
            <Oval height={40} width={40} />
          ) : (
            <Button secondary submit>
              S'inscrire
            </Button>
          )}
        </>
      )}
    </Container>
  );
};

export default Newsletter;
