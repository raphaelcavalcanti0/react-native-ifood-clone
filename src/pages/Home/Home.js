import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView, View, Image, ButtonContainer } from './styles'
import { Button } from '../../components/Button/Button'
import banner from '../../assets/img/banner.png'

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner} />
          <Text>Permitir localização</Text>
          <Text>Para descobrir restaurantes que entregam em sua região.</Text>
        </View>
        <ButtonContainer>
          <Button
            text='PULAR'
            theme=""
            onPress={() => navigation.navigate("Main")} />
          <Button
            text='ENTRAR'
            theme="primary"
            onPress={() => navigation.navigate("Main")} />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
