import { StyleSheet } from 'react-native';

// export const themeMainColor = "#00B2FF";
export const themeMainColor = "#061B2C";

export const themeMainBackgroundColor = '#ECEEEF';

export const tagsColor = '#0f446f';


export const globalStyle = StyleSheet.create({
    container: {
        // https://www.color-hex.com/ pag util para ver y hacer colores en hexa por si no sabemos el nombre en palabras
        flex: 1,
        justifyContent: 'center',
    },
    mainHeader:{
        backgroundColor: themeMainColor
        
    },
    titleStyle: {
        margin:'5%',
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
        height: "100%",
        width: "100%",
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        color: themeMainColor,
        borderRadius: 5,
        paddingLeft: '5%',
        fontSize: 16,
      },
});
export const categoriasStyle = StyleSheet.create({
    positionStyle:{},
    

})

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
        paddingHorizontal: 20,
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