import { Stack } from "expo-router";

export default function RootLayout() {
  // return <Stack />;
  {/* Desativando aquele meu padrão */}
  //Primeira opção:
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '', headerTransparent: true, headerShown: false }} />
    </Stack>
  )
//Segunda opção:
  // return <Stack screenOptions={{ headerShown: false }} />;
}