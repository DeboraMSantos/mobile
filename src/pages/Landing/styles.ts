import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
     backgroundColor:'#3d5a80',
     flex:1,
     justifyContent:'center',
     padding: 40
    },

    banner:{
      width:'100%',
      resizeMode: 'contain'
    },

    title:{
      fontFamily:'Poppins_400Regular',
      color:'white',
      fontSize:20,
      lineHeight:30,
      marginTop: 80
    },

    titleBold: {
      fontFamily:'Poppins_600SemiBold'
    },

    buttonsContainer:{
      flexDirection: 'row',
      marginTop:40,
      justifyContent: 'space-between'
    },

    button: {
      height: 130,
      width:'48%',
      backgroundColor: '#333',
      borderRadius: 8,
      padding: 24,
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    buttonPrimary: {
      backgroundColor: '#537199',
    },

    buttonSecondary: {
      backgroundColor: '#D3527D',
    },

    buttonText: {
      fontFamily: 'Archivo_700Bold',
      color: '#fff',
      fontSize: 18,
    },

    totalConnections: {
      fontFamily: 'Poppins_400Regular',
      color: '#98c1d9',
      fontSize: 12,
      lineHeight: 20,
      maxWidth: 140,
      marginTop:40,
    },
});

export default styles;
