import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Input, Layout, Text, Button } from 'react-native-ui-kitten';

import Logo from '../components/Logo';

import Auth from '../services/auth';

export default class Register extends Component {

  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm = async () => {
    const auth = new Auth();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    try {
      const response = await auth.register(user);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    
  };

  render() {
    return (
      <Layout>
        <Logo />
        <Layout style={styles.container}>
          <Text category='h6'>Registrar Usuário</Text>
          <Input value={this.state.email} onChangeText={(email) => this.setState({email})} label='Email' placeholder='Ex: email@email.com'/>
          <Input secureTextEntry={true} value={this.state.password} onChangeText={(password) => this.setState({password})} label='Senha' />
          <Button style={styles.button} onPress={this.submitForm}>
            ENTRAR
          </Button>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 600,
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  button: {
    marginTop: '5%'
  }
});
