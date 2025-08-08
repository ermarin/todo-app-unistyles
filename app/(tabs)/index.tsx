import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native-unistyles";

export default function Index() {

  return (
    <ThemedView style={styles.container}>
      <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create(theme => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));
