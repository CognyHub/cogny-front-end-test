import { StyleSheet, View } from "react-native";
import HomeTemplete from "../../components/template/home";

export default function Home() {
  return (
    <View style={styles.container}>
        <HomeTemplete />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
});
