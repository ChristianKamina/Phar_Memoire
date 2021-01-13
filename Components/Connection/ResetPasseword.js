import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import R from '../../ressources/style.json';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Inscription extends Component{
    render(){
        return(
            <View style={{flex:1}}> 
                <View style={{marginTop: 25, alignSelf:'center'}}>
                    <Text style={{fontSize: 23, fontWeight: "bold"}}>
                        Mot de passe oublié?
                    </Text>
                </View>

                <View  style={{marginLeft:55, marginRight:25, alignSelf:'center', marginTop: 20}}>
                    <Text >
                        Entrez votre e-mail enregistré 
                        pour recevoir les instructions de 
                        réinitialisation du mot de passe
                    </Text>
                </View>

                <ScrollView style={styles.container}>
                    <View style={{alignItems:"center"}}  >
                        <Icon name="key" size={70} color={R.color.primaryColor} /> 
                    </View>
                </ScrollView>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: R.color.background
    },
})