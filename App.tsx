import { StatusBar } from 'react-native';
import { NativeBaseProvider, extendTheme } from "native-base";
import { THEME } from './src/theme';
import { Background } from './src/components/Background';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Home } from './src/pages/Home';
import { Loading } from './src/components/Loading';
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  });
  const theme = extendTheme({
    colors: {
      primariy: THEME.COLORS
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Background>
        <StatusBar
          barStyle={"light-content"}
          translucent
          backgroundColor="transparent"
        />
        {fontsLoaded ? <Home /> : <Loading />}
      </Background>
    </NativeBaseProvider>
  );
}

