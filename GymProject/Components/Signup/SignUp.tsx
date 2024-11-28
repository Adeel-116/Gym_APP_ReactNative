import React from 'react';
import { Text, StyleSheet, View, ImageBackground, StatusBar, TextInput, TouchableOpacity} from 'react-native';

export default function SignUp() {
  function alert(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    // main Container
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* It also contains the background Image */}
      <ImageBackground
        source={require('../../assets/Images/gym.jpg')}
        style={styles.bgImage}
      >
        {/* main Container of BgImage */}
        <View style={styles.bgContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textHeading}>Sign In</Text>
            <Text style={styles.textParagraph}>Hi Welcome back, you’ve been missed</Text>
          </View>


          {/* form */}

          <View style={styles.form}>


            <Text style={styles.Label}>Email</Text>

            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              value={'example@gmail.com'}
            />


            <Text style={[styles.Label, { marginTop: 30, }]}>Password</Text>

            <TextInput
              style={[styles.input, { fontSize: 17 }]}
              placeholder="*******"

              value={'*************'}
            />


            <Text style={[styles.Label, { fontSize: 16, textDecorationLine: 'underline', width: '100%', textAlign:'right', marginTop: 10, }]}>Forget your Password ?</Text>

            <View style={styles.Buttoncontainer}>
              <TouchableOpacity onPress={() => alert('Custom Button Pressed!')}>
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>



            



          </View>


        </View>

        <View style={styles.overlay}></View>

      </ImageBackground>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
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
  bgContainer: {
    width: '94%',
    height: '65%',
    alignItems: 'center',
    zIndex: 3,
  //  backgroundColor: '#122626',
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
  form: {
    width: '100%',
    height: '40%',
    // backgroundColor: '#fafafa',
    marginTop: 30,
    paddingVertical: 10,
  },
  Label: {
    fontSize: 15,
    color: '#ffff',
    fontFamily: 'Serif',
    paddingVertical: 4,
    paddingLeft: 3,
  },
  input: {
    marginTop: 3,
    width: '100%',
    paddingVertical: 7,
    paddingLeft: 25,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
    color: '#727272',
    fontSize: 15,
    fontFamily: 'MontserratAlternates-Medium',
    backgroundColor: '#ffff',
  },
  Buttoncontainer: {
    marginTop: 25,
    width: '100%',
    paddingVertical: 18,
    backgroundColor: '#3e3e3e',
    borderRadius: 50,
  },
  button:{},
  buttonText:{
    fontSize: 20,
    fontWeight: 500,
    color: '#fff',
    textAlign: 'center',
  },

 
});
