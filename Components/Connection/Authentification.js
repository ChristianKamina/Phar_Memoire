import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import R from '../../ressources/style.json';
import { ImageBackground } from 'react-native';

export default class Authentification extends Component{

    constructor(props) {
        super(props);

        this.state = {
            Users: [],
            title:"Connexion",
            message:"Patientez, SVP!",
            visibility:false
        };
        this.emailText= ""
        this.passwordText= ""
      };

      _EmailInput(text) {
        this.emailText = text;
    }

      _PwdInput(pwd) {
        this.passwordText = pwd
    }

    signIn=()=>{
        try {
            if((this.emailText.length > 0) && (this.passwordText.length > 0) )
            {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (reg.test(this.emailText) === false) {
                    Alert.alert("Authentification",
                    "Votre Adresse mail n'est pas correct");
                }
                else{
                    console.log(this.emailText+" "+ this.passwordText);
                }
            }

            else{
                Alert.alert("Authentification", "Les champs vides")
            }

            } catch (error) {
            alert(error)    
        }
    }
    
    singUp() {
        this.props.navigation.navigate('INSCRIPTION');
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{flex:1}}>
                    <View style={{flex:1,height:300,justifyContent:'center'}}>
                        <ImageBackground style={{flex:1}} blurRadius={1} source={require('../../Images/fond.jpg')}>
                        </ImageBackground>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:1}}>
                            <View style={{paddingTop:30}}>
                                <TextInput style={styles.textiputstyle} 
                                    placeholder="Adresse mail"
                                    keyboardType="email-address"
                                    onChangeText={(text) => this._EmailInput(text)}
                                />
                                <TextInput style={styles.textiputstyle} 
                                    placeholder="Mot de passe" 
                                    secureTextEntry={true}
                                    onChangeText={(pwd) => this._PwdInput(pwd)}
                                />
                                <TouchableHighlight style={styles.touchable_style} onPress={()=> this.signIn()}>
                                    <Text style={styles.text_style}>Se connecter</Text>
                                </TouchableHighlight>
                                <View style={styles.View_other}>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{flex:1,paddingLeft:20,marginBottom:15,alignItems:'flex-start'}}>
                                            <Text>Nouveau? <Text style={styles.text_other} onPress={()=> this.singUp()}>
                                                S'inscrire
                                            </Text></Text>
                                        </View>
                                        <View style={{flex:1,paddingRight:20,alignItems:'flex-end'}}>
                                            <Text> Mot de passe <Text style={styles.text_other} onPress={()=>this.onReset()} >oublié?</Text> 
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            
          )
    }
  }

  const styles=StyleSheet.create({
    container:{
        backgroundColor:R.color.background,
        flex: 1
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
        paddingLeft:30,
        paddingRight:30,
        maxWidth:200,
        alignSelf:'center',
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20,
        marginTop:15,
        backgroundColor:R.color.primaryColor
    },
    text_style: {
        fontSize: 15,
        color: '#f0f0f0'
    },
    View_other: {
        paddingTop: 10
     },
     text_other: {
        marginLeft: 20,
        paddingTop: 20,
        fontSize: 15,
        color: R.color.primaryColor
    },

  })
