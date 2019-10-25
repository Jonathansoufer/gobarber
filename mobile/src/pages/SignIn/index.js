import React from 'react';
import { Image } from 'react-native';
import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Container>
      <Background>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="E-mail address"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Secret Password"
          />
          <SubmitButton onPress={() => {}}>Sign In</SubmitButton>
        </Form>
        <SignLink onPress={() => {}}>
          <SignLinkText>Sign Up</SignLinkText>
        </SignLink>
      </Background>
    </Container>
  );
}
