import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import R from '../../ressources/style.json';
import { ImageBackground } from 'react-native';


export default class Inscription extends Component{

    constructor(props) {
        super(props);

        this.state = {
            Users: [],
            title:"Inscription",
            message:"Patientez, SVP!",
            visibility:false
        };
        this.noms= "",
        this.e_mail= "",
        this.pwd= "",
        this.C_pwd= "",
        this.phone= "",
        this.titre= ""
      };

      _NomsInput(noms){
            this.noms=noms;
      }

      _EmailInput(e_mail){
          this.e_mail=e_mail;
      }

      _PwdInput(pwd){
          this.pwd=pwd;
      }

      _ConfirmePwdInput(C_pwd){
          this.C_pwd=C_pwd;
      }

      _TelephoneInput(phone){
          this.phone=phone;
      }

      _TitreInput(titre){
          this.titre=titre;
      }

      Register=()=>{
        try {
            if((this.noms.length > 0) && (this.e_mail.length > 0) && (this.pwd.length > 0) && (this.C_pwd.length > 0) && (this.phone.length > 0) && (this.titre.length > 0) )
            {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (reg.test(this.e_mail) === false) {
                    Alert.alert("Inscription",
                    "Votre Adresse mail n'est pas correct");
                }
                else{
                    
                }
            }

            else{
                Alert.alert("Inscription", "Les champs vides")
            }

            } catch (error) {
            alert(error)    
        }
    }

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
                                onChangeText={(name) =>this._NomsInput(name)}/>

                            <TextInput style={styles.textiputstyle} 
                                    placeholder="Adresse mail"
                                    keyboardType="email-address"
                                    onChangeText={(text) => this._EmailInput(e_mail)}
                                />

                            <TextInput
                                placeholder="Mot de passe"
                                style={styles.textiputstyle}
                                secureTextEntry={true}
                                onChangeText={(name) =>  this._PwdInput(pwd)}
                            />
                            <TextInput
                                placeholder="Confirmer mot de passe"
                                style={styles.textiputstyle}
                                secureTextEntry={true}
                                onChangeText={(name) =>  this._ConfirmePwdInput(C_pwd)}
                            />

                            <TextInput
                                placeholder="Numéro téléphone"
                                style={styles.textiputstyle}
                                secureTextEntry={true}
                                onChangeText={(name) =>  this._TelephoneInput(phone)}
                            />
                            <TextInput
                                placeholder="Titre"
                                style={styles.textiputstyle}
                                secureTextEntry={true}
                                onChangeText={(name) =>  this._TitreInput(titre)}
                            />
                        </View>
                        <TouchableHighlight style={styles.touchable_style} onPress={()=> this.Register()}>
                                <Text style={{fontWeight: "bold", fontSize: 15, color: '#f0f0f0'}}>S'inscrire</Text>
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