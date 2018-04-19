import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const dps = require('./img/dps.jpg');
const bdg = require('./img/bdg.jpg');
const bgl = require('./img/bgl.jpg');
const blg = require('./img/blg.jpg');
const gyr = require('./img/gyr.jpg');
const jbn = require('./img/jbn.jpg');
const klk = require('./img/klk.jpg');
const krg = require('./img/krg.jpg');
const tbn = require('./img/tbn.jpg');

export default class Main extends React.Component {
  static navigationOptions = {
    title: 'Tempat Wisata'
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.containerMain}>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={dps} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kota Denpasar</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dDps')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={bdg} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kabupaten Badung</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dBdg')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={gyr} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kabupaten Gianyar</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dGyr')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={klk} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kabupaten Klungkung</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dKlk')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={krg} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kabupaten Karangasem</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dKrg')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={bgl} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kabupaten Bangli</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dBgl')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={tbn} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kabupaten Tabanan</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dTbn')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={blg} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kabupaten Buleleng</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dBlg')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxParent}>
            <View>
              <View style={styles.box1}>
                <Image source={jbn} style={styles.icon} />
              </View>
              <View style={styles.box2}>
                <Text style={styles.textCap}>Kabupaten Jembrana</Text>
              </View>
            </View>
            <View>
            <TouchableOpacity
            style={styles.button}
              onPress={() => this.props.navigation.navigate('dJbn')}
            >
              <Text style={styles.textButton}>Detail</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    // backgroundColor: '#E0E0E0',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 5,
    alignItems: 'center',
  },
  boxParent: {
    backgroundColor: '#E0E0E0',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  boxPar: {
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    height: 80,
    width: '100%',
    backgroundColor: '#9E9E9E',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0.5
  },
  box2: {
    height: 20,
    width: 220,
    backgroundColor: '#80DEEA',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0097A7',
    height: 100,
    width: 80
  },
  icon: {
    height: 80,
    width: 130,
    marginBottom: 0
  },
  textCap: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
