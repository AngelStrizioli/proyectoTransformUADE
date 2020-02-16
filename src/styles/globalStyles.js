import { StyleSheet } from 'react-native';

// export const themeMainColor = "#00B2FF";
export const themeMainColor = "#2A4F8F";

export const globalStyle = StyleSheet.create({
    container: {
        // https://www.color-hex.com/ pag util para ver y hacer colores en hexa por si no sabemos el nombre en palabras
        flex: 1,
        justifyContent: 'center',
    },
    mainHeader:{
        backgroundColor: themeMainColor,
    },
    titleStyle: {
        marginLeft:'5%',
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: '2%',
        color: themeMainColor,
    },
    subtitleStyle: {
        marginLeft:'5%',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: '2%',
        color: themeMainColor,
    },
    categoriaCardsText: {
        color: themeMainColor,
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

export const tagsStyles = StyleSheet.create({
    tagsForm: {
        borderRadius: 50,
        backgroundColor: themeMainColor,
        height: 25,
        paddingHorizontal: 10,
        marginBottom: 3

    },
    textTags: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "white",
        textAlign: 'center',
    }
})