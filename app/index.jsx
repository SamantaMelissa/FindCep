import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from "react-native";
import { Input } from '../components/input/input';
import { Botao } from '../components/botao/botao';
import { Card } from '../components/card/card';
import { useState } from "react";

import axios from 'axios';

export default function Index() {

  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});

  const [aparecidinho, setAparecidinho ] = useState(false);

  async function consultarCep(e) {
    e.preventDefault();
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setJsonCep(resposta.data);
        // console.log(jsonCep.logradouro);
        setAparecidinho(true);
      } else {
        alert("O cep está incorreto. Digite com 8 números!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* 1. Logo + imagem de fundo */}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.containerImg}>
          <ImageBackground source={require('../assets/images/ImgFundo.png')}
            style={styles.imgFundo}>
            <Image source={require('../assets/images/LogoFindCEP.png')} style={styles.logo}></Image>
          </ImageBackground>
        </View>
        {/* 2. Campo de consulta */}
        <View style={styles.container}>
          {/* 2.1. Título */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>
          {/* 2.2. Input */}
          <Input
            valorCep={cep}
            onChangeValorCep={e => { setCep(e); console.log(e); }}
          />
          {/* 2.3. Botão */}
          <Botao
            tituloBotao='Consultar'
            onPress={consultarCep}
          />
          {/* 2.3. Card de informações */}
          {aparecidinho &&
            <Card
              cep={jsonCep.cep}
              logradouro={jsonCep.logradouro}
              bairro={jsonCep.bairro}
              uf={jsonCep.uf}
              estado={jsonCep.estado}
              regiao={jsonCep.regiao}
            />
          }
        </View>
      </ScrollView>

    </>
  );
}

//Estilos dos meus componentes:
const styles = StyleSheet.create({
  containerImg: {
    height: '30%'

  },
  imgFundo: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 100,
    height: 120
  },
  container: {
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: 'center',
    paddingTop: 30
  },
  containerScroll: {
    flex: 1.5,
    height: '100%',
    paddingBottom: 80,
  },
  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: '#000000'
  }
})
