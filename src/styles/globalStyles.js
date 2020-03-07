import { StyleSheet, Dimensions } from 'react-native';

// export const themeMainColor = "#00B2FF";
export const themeMainColor = "#061B2C";

export const themeMainBackgroundColor = '#ECEEEF';

export const tagsColor = '#0f446f';
const { width } = Dimensions.get('window');

export const globalStyle = StyleSheet.create({
    container: {
        // https://www.color-hex.com/ pag util para ver y hacer colores en hexa por si no sabemos el nombre en palabras
        flex: 1,
        justifyContent: 'center',
    },
    mainHeader:{
        backgroundColor: themeMainColor,
        height:55
        
    },
    titleStyle: {
        marginTop:'4%',
        marginLeft:'5%',
        marginBottom:'2%',
        //textAlign:'center',
        fontWeight: 'bold',
        fontSize: 22,
      
        //color: '#186db2',
    },
    textStyle: {
        paddingHorizontal: '6%',
        fontSize:18,
        textAlign:'justify',
        lineHeight:26

    },
    categoriaCardsText: {
        color: '#186db2',
         textAlign: "center",
        alignSelf: "center"
    },
    inputDesigne: {
        marginHorizontal:'3%',
        width: "90%",
        backgroundColor: 'white',
        color: themeMainColor,
        borderRadius: 25,
        paddingLeft: '5%',
        //marginBottom:5,
        fontSize: 16,
      },
});

export const tagsStyles = StyleSheet.create({
    tagsPosition:{
        flexWrap:'wrap' ,
        flexDirection: 'row', 
        marginHorizontal:'3%',
        marginTop:'6%'
    },
    tagsForm: {
        borderRadius: 50,
        backgroundColor: tagsColor,
        height: 30,
        paddingHorizontal: width*0.05,
        paddingTop:2,
        //marginVertical:15,
        //marginBottom: 3

    },
    textTags: {
        //fontWeight: 'bold',
        fontSize: 19,
        color: "white",
        textAlign: 'center',
        //textAlignVertical:'center',
    }
})

export const plasticoColor = '#62A60A' ;

export const papelColor = '#FF6B0B';

export const vidrioColor = '#00A6CE';

export const pilaColor = '#CF0A2C';

export const metalColor = '#F7A700';

export const textilColor = '#C126B8';

export const electroColor = '#4F738A';

export const organicoColor = '#A58D28';