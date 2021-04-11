import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, ToastAndroid, Text } from "react-native";

const UselessTextInput = () => {
  const [totalKeuntungan, onSetTotalKeuntungan] = React.useState(null)
  const [biayaProduksi, onSetBiayaProduksi] = React.useState(null)
  const [profit, onSetProfit] = React.useState(0)

  const hitungProfit = () => {
    if(totalKeuntungan == null && biayaProduksi) {
      ToastAndroid.showWithGravity(
        "Isi form di atas!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );

      return
    }
    const profit = totalKeuntungan - biayaProduksi

    onSetProfit(profit)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textLabel}>
        Total Keuntungan
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onSetTotalKeuntungan}
        placeholder = "Input total keuntungan"
        keyboardType = "numeric"
      />
      <Text style={styles.textLabel}>
        Total Biaya Produksi
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onSetBiayaProduksi}
        placeholder="Input total biaya produksi"
        keyboardType="numeric"
      />

      <Button
        onPress={hitungProfit}
        title="Hitung Profit"
        color="#f99924"
        accessibilityLabel="Learn more about this purple button"
      />

      <Text style={{marginTop:100, textAlign:'center'}}>
        profit: Rp. {profit}-,
      </Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textLabel: {    
    fontSize: 10,    
  },
  container: {
    flexDirection: 'column',
    padding: 8    
  }
})

export default UselessTextInput;