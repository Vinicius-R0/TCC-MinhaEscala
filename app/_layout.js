import { Stack } from "expo-router";

export default function Layout() {
  return(
    <Stack> 
      <Stack.Screen 
      name="index" 
      options={{ headerShown: false }} 
      />

      <Stack.Screen 
      name="email" 
      options={{ headerShown: false }} 
      />

      <Stack.Screen 
      name="telefone" 
      options={{ headerShown: false }} 
      />


      <Stack.Screen
      name='(app)'
      options={{headerShown: false}}/>


    </Stack>



    
  )
}