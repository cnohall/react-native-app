import { StyleSheet} from 'react-native';

function Styles() {
    const styles = StyleSheet.create({
        common: {
            width: "100%",
            borderRadius: "5vh",
            height: "90vh",
        },
        primary: {
            position: "absolute",
            marginTop: "0%",
            backgroundColor: "skyblue",
            zIndex: 1,
        },
        secondary: {
            position: "absolute",
            marginTop: "80%",
            backgroundColor: "gray",
            zIndex: 2,
        },
        third: {
            position: "absolute",
            marginTop: "90%",
            backgroundColor: "yellow",
            zIndex: 3,
        },
        buttons: {
            color: "white",
        }
    })
    return styles;
};


export default Styles;