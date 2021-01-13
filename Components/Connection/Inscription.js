import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import R from '../../ressources/style.json';
import { ImageBackground } from 'react-native';


export default class Inscription extends Component{
    render(){
        return(
                <ScrollView style={{flex:1}}>
                    <View style={{flex:1,height:250,justifyContent:'center'}}>
                        <ImageBackground style={{flex:1}} blurRadius={1} source={require('../../Images/fond.jpg')}>
                        </ImageBackground>
                    </View>
                    <View style={{flex:1,paddingBottom:20,backgroundColor:R.color.background, paddingTop:15}}>
                        <View style={styles.inputView}>
                            <TextInput 
                                placeholder="Noms" 
                                style={styles.textiputstyle}
                                onChangeText={(name) =>this._Lastnameinput(name)}/>

                            <TextInput style={styles.textiputstyle} 
                                    placeholder="Adresse mail"
                                    keyboardType="email-address"
                                    onChangeText={(text) => this._EmailInput(text)}
                                />

                            <TextInput
                                placeholder="Mot de passe"
                                style={styles.textiputstyle}
                                secureTextEntry={true}
                                onChangeText={(name) =>  this._Firstnameinput(name)}
                            />
                            <TextInput
                                placeholder="Confirmer mot de passe"
                                style={styles.textiputstyle}
                                secureTextEntry={true}
                                onChangeText={(name) =>  this._Firstnameinput(name)}
                            />

                            <TextInput
                                placeholder="Numéro téléphone"
                                style={styles.textiputstyle}
                                secureTextEntry={true}
                                onChangeText={(name) =>  this._Firstnameinput(name)}
                            />
                            <TextInput
                                placeholder="Titre"
                                style={styles.textiputstyle}
                                secureTextEntry={true}
                                onChangeText={(name) =>  this._Firstnameinput(name)}
                            />
                        </View>
                        <TouchableHighlight style={styles.touchable_style} onPress={()=> this.signIn()}>
                                <Text style={styles.text_style}>S'inscrire</Text>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
                
        )
    }

}

const styles=StyleSheet.create({
    inputView: {
        paddingTop:2,
        flex: 4
    }, 
    textiputstyle: {
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft:20,
        elevation: 5,
        backgroundColor: '#f0f0f0',
    },

    touchable_style: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingLeft:50,
        paddingRight:50,
        maxWidth:200,
        alignSelf:'center',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop:15,
        backgroundColor:R.color.primaryColor
    },
})