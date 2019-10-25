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

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Full Name"
          />
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
          <SubmitButton onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Sign In</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
