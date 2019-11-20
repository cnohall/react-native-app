import { StyleSheet} from 'react-native';

function Styles() {
    const styles = StyleSheet.create({
        common: {
            width: "95%",
            borderRadius: "5vh",
            height: "90vh",
        },
        primary: {
            position: "relative",
            top: "0%",
            backgroundColor: "skyblue",
            zIndex: 1,
        },
        secondary: {
            position: "absolute",
            top: "80%",
            backgroundColor: "gray",
            zIndex: 2,
        },
        third: {
            position: "absolute",
            top: "90%",
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