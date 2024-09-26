import { View, TouchableOpacity, Image } from "react-native";

function Bottombar({ navigation }) {
    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
            width: '100%',
            backgroundColor: "#008080",
        }}>
            <TouchableOpacity onPress={() => navigation.navigate("Userlist")}>
                <Image
                    source={require('../assets/setting.png')}
                    style={{ width: 32, height: 32 }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                    source={require('../assets/home.png')}
                    style={{ width: 32, height: 32 }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Userlist")}>
                <Image
                    source={require('../assets/add-user.png')}
                    style={{ width: 32, height: 32 }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Bottombar;
