import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import lihatPW from './pw/lihatPW';
import pesanPW from './pw/pesanPW';
import lihatPesanan from './pw/lihatPesanan';

const paket = require('./img/paket.png');

const TabNav = TabNavigator({
  Paket_Wisata: {
    screen: lihatPW
  },
  Pemesanan: {
    screen: pesanPW
  },
  Data_Pesanan: {
    screen: lihatPesanan
  }
});

export default class paketWisata extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Paket Wisata',
    drawerIcon: () => (
    <Image
      source={paket}
      style={styles.icon}
    />
  ),
  };
  render() {
    return (
      <TabNav />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  }
});
