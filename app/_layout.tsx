import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <React.Fragment>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ title: "Home"}} />
      </Stack>
    </React.Fragment>
  )
}
