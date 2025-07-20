// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Auth screens */}
      <Stack.Screen name="index" />        {/* optional welcome screen */}
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />

      {/* Home tab layout */}
      <Stack.Screen name="(home)/profile.tsx" />
    </Stack>
  );
}
