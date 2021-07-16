import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import R from '../../ressources/style.json';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Inscription extends Component{
    constructor(props) {
        super(props);

        this.state = {
            title:"Connexion",
            message:"Patientez, SVP!",
            dialogVisible:"true",
            visible:false
        };
        this.emailText= ""
      };

      _EmailInput(text) {
        this.emailText = text;
    }

    send=()=>{
        try {
            if((this.emailText.length > 0))
            {
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (reg.test(this.emailText) === false) {
                    Alert.alert("Attention",
                    "Votre Adresse mail n'est pas correct");
                }
                else{
                    
                }
            }

            else{
                Alert.alert("Attention", "Les champs vides")
            }

            } catch (error) {
            alert(error)    
        }
    }

    render(){
        return(
            <View style={{flex:1}}> 
                <View style={{marginTop: 25, alignSelf:'center'}}>
                    <Text style={{fontSize: 23, fontWeight: "bold"}}>
                        Mot de passe oublié?
                    </Text>
                </View>

                <View  style={{marginLeft:55, marginRight:25, alignSelf:'center', marginTop: 20}}>
                    <Text style={{fontSize:17}} >
                        Entrez votre e-mail enregistré 
                        pour recevoir les instructions de 
                        réinitialisation du mot de passe
                    </Text>
                </View>

                <ScrollView style={styles.container}>
                    <View style={{alignItems:"center", paddingTop: 15}}  >
                        <Icon name="key" size={70} color={R.color.primaryColor} /> 
                    </View>


                    <View style={{paddingTop: 65}}>
                        <TextInput style={styles.textiputstyle} 
                                    placeholder="Adresse mail"
                                    keyboardType="email-address"
                                    onChangeText={(text) => this._EmailInput(text)}
                        />
                    </View>

                    <TouchableHighlight style={styles.touchable_style} onPress={()=> this.send()}>
                                <Text style={{fontWeight: "bold", fontSize: 15, color: '#f0f0f0'}}>Envoyé</Text>
                        </TouchableHighlight>

                </ScrollView>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: R.color.background
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
    }
})