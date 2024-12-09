import React, {useState} from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground, ScrollView, Pressable } from "react-native"
import { Input } from "../../Input";
import { CameraAccess } from "../../CameraAccess";
import { Button } from "../../Button";

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const  [error, setError] = useState(false)

    function handleSignIn(){
        
    }

    return (
        <>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1E1F23"
                    barStyle="light-content"
                />

                <ImageBackground
                    source={require('../../../assets/Images/gym_signup.jpg')}
                    style={styles.bgImage}
                >


                    <View style={styles.bgContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.textHeading}>Sign Up</Text>
                            <Text style={styles.textParagraph}>Hi Welcome back, you’ve been miss your Chance, Get Register</Text>
                        </View>


                        <View style={styles.foam}>

                            <View style={styles.foamContainer}> 

                            <View>
                            <View style={{}}>
                            <CameraAccess />
                            </View>
                           
                                <Input placeHolder="Enter the name" value={name} labelText="Name" type="text" OnChangeText={setName}/>
                                <Input placeHolder="example@gmail.com" value={email} labelText="Email" type="email" OnChangeText={setEmail} />
                                <Input placeHolder="************" value={password} labelText="Password" type="" OnChangeText={setPassword}/>
                                <Input placeHolder="************" value={confirmPassword} labelText="Confirm Password" type="password" OnChangeText={setConfirmPassword}/>
                            </View>

                            <View style={{}}>
                            <Pressable onPress={handleSignIn}>
                                <Button buttonText="Sign In" />
                            </Pressable>
                            </View>
                            
                          
                            </View>

                        </View>
                    </View> 

                   


                    <View style={styles.overlay}></View>
                </ImageBackground>




            </View>

        </>
    )
}

const styles = StyleSheet.create({
    foamContainer: {
        width: '95%',
        paddingVertical: 20,
        gap: 17,
    },
    foam:{
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
      },
   
    textContainer: {
        width: '80%',
        marginTop: 10,
     
    },
    textHeading: {
        fontSize: 35,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 600,
        fontFamily: 'MontserratAlternates-Medium',
    },
    textParagraph: {
        fontSize: 14,
        color: '#EDEDED',
        textAlign: 'center',
        fontFamily: 'MontserratAlternates-Medium',
    },
    bgContainer: {
        width: '94%',
        flex: 1,
        backgroundColor: 'lack',
        alignItems: 'center',
        zIndex: 3,
        justifyContent: 'center',
        marginBottom: 13
    },
    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        objectFit: 'contain',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    }
})

export default SignUp