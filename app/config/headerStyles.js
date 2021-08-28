import { StyleSheet } from 'react-native';
import colors from './colors';

const headerStyles = StyleSheet.create({
    container : {
        flex: 1,
    },
    header : {
        width: "100%",
        position: 'absolute',
        top: 0,
        backgroundColor: colors.fadedBlack,
    },
    title : {
        width: "100%",
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        paddingVertical: 15,
    },
    smallTitle : {
        width: "100%",
        textAlign: 'center',
        fontSize: 20,
        color: colors.black,
        backgroundColor: colors.fadedWhite,
        paddingBottom: 5,
        fontWeight: 'bold',
    }
})

export default headerStyles;