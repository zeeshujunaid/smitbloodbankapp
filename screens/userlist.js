import { Text, View, ScrollView } from "react-native";
import Bottombar from "../components/bottombar";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../database/firebase.config";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";



function Userlist({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const list = [];
        try {
            const dbSnap = await getDocs(collection(db, 'users'));
            dbSnap.forEach(item => {
                list.push(item.data());
            });
            setUsers(list);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 90, width: "100%", backgroundColor: "#008080", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <Text style={{ color: "#333333", fontWeight: "bold", fontSize: 20 }}>AVAILABLE USERS</Text>
            </View>
            <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 30, flexGrow: 1 }}>
                {/* Display users */}
              {users.map((item, index) => (
                    <View key={index} style={{ height: 60, width: "80%", marginBottom: 10, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
                        <Text style={{color:"#333333",}}>{item.name}</Text>
                        <Text style={{color:"#333333",}}>{item.city}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Userlist")}>
                            <Icon name="plus-box" size={32} color="#000000" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <Bottombar navigation={navigation} />
        </View>
    );
}

export default Userlist;
