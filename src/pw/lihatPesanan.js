import React from 'react';
import { View, Text, ListView, StyleSheet, Platform, ActivityIndicator } from 'react-native';

export default class lihatPesanan extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
         return fetch('https://senapatiku.000webhostapp.com/selectPesanan.php')
           .then((response) => response.json())
           .then((responseJson) => {
             let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
             this.setState({
               isLoading: false,
               dataSource: ds.cloneWithRows(responseJson),
             }, function () {
               // In this block you can do something with new state.
             });
           })
           .catch((error) => {
             console.error(error);
           });
       }
       GetStudentIDFunction=(id_pesananpw,nama,no_hp,tujuan,tamu,durasi,ci) => {
            this.props.navigation.navigate('Third', {
              ID: id_pesananpw,
              NAME: nama,
              CLASS: no_hp,
              PHONE_NUMBER: tujuan,
              EMAIL: tamu,
              DURASI: durasi,
              CI: ci
            });
       }
       ListViewItemSeparator = () => {
         return (
           <View
             style={{
               height: 0.5,
               width: '100%',
               backgroundColor: '#000',
             }}
           />
         );
       }

       render() {
        if (this.state.isLoading) {
          return (
            <View style={{ flex: 1 }}>
            {
              this.state.isLoading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
            }
            </View>
          );
        }

        return (
          <View style={styles.MainContainer_For_Show_StudentList_Activity}>
            <ListView
              dataSource={this.state.dataSource}
              renderSeparator={this.ListViewItemSeparator}
              renderRow={(rowData) => <Text
                style={styles.rowViewContainer}
                onPress={this.GetStudentIDFunction.bind(
                          this, rowData.id_pesananpw,
                           rowData.nama,
                           rowData.no_hp,
                           rowData.tujuan,
                           rowData.tamu,
                           rowData.durasi,
                           rowData.ci
                           )}
              >
                        {rowData.nama}
                        </Text>}
            />
          </View>
        );
      }
  }

  const styles = StyleSheet.create({

    MainContainer: {
      alignItems: 'center',
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#fff'
    },

    MainContainer_For_Show_StudentList_Activity: {
      flex: 1,
      paddingTop: (Platform.OS === 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      },

    TouchableOpacityStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 7,
      width: '90%',
      backgroundColor: '#00BCD4'

    },

    TextStyle: {
      color: '#fff',
      textAlign: 'center',
    },

    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
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
