import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

export default class pesanPW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      hp: 0,
      tujuan: '',
      tamu: 0,
      durasi: 0,
      ci: 0,
      activityIndicatorLoading: false,
    };
  }

insertDataIntoMySQL = () => {
  this.setState({ activityIndicatorLoading: true }, () => {
    fetch('https://senapatiku.000webhostapp.com/insertPesanan.php',
        {
          method: 'POST',
          headers:
          {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              nama: this.state.nama,
              no_hp: this.state.hp,
              tujuan: this.state.tujuan,
              tamu: this.state.tamu,
              durasi: this.state.durasi,
              ci: this.state.ci
            }
          )
          }).then((response) => response.json()).then((responseJsonFromServer) => {
            alert(responseJsonFromServer);
            this.setState({ activityIndicatorLoading: false });
          }).catch((error) => {
            console.error(error);
            this.setState({ activityIndicatorLoading: false });
            });
  });
}

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pesan Paket Wisata</Text>
        </View>
        <View style={{ padding: 10, backgroundColor: 'white', width: 280 }}>
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukkan Nama"
              underlineColorAndroid="transparent"
              onChangeText={(namaInput) => this.setState({ nama: namaInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukkan No. Hp"
              underlineColorAndroid="transparent"
              onChangeText={(hpInput) => this.setState({ hp: hpInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukkan Tujuan"
              underlineColorAndroid="transparent"
              onChangeText={(tujuanInput) => this.setState({ tujuan: tujuanInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukkan Jumlah Tamu"
              underlineColorAndroid="transparent"
              onChangeText={(tamuInput) => this.setState({ tamu: tamuInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukkan Durasi Wisata"
              underlineColorAndroid="transparent"
              onChangeText={(durasiInput) => this.setState({ durasi: durasiInput })}
            />
            <TextInput
              style={styles.TextInputStyleClass}
              placeholder="Masukkan Tanggal Check-In"
              underlineColorAndroid="transparent"
              onChangeText={(ciInput) => this.setState({ ci: ciInput })}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={this.insertDataIntoMySQL}
            >
              <Text style={styles.TextStyle}>Pesan</Text>
            </TouchableOpacity>
            {
              this.state.activityIndicatorLoading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
            }
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 30,
  },
  TextInputStyleClass: {
    // textAlign: '',
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#009688',
    borderRadius: 7,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    },
  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#009688',
    marginBottom: 20,
    width: '100%',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
