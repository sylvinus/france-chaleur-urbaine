import { Button, TextInput } from '@dataesr/react-dsfr';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { Container, Password } from './Form.styles';

export interface LoginFormProps {
  callbackUrl: string;
}
export const LoginForm = ({ callbackUrl }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const connect = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('credentials', {
      callbackUrl,
      email,
      password,
    });
  };

  return (
    <Container onSubmit={connect}>
      <TextInput
        label="Email"
        placeholder="Saisir votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        label="Mot de passe"
        placeholder="Saisir votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Password>
        <Link href="/reset-password">Mot de passe oublié ?</Link>
      </Password>
      <Button submit>Me connecter</Button>
    </Container>
  );
};