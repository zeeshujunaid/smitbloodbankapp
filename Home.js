import SearchBar from "./components/searchbar";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import Bottombar from "./components/bottombar";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./database/firebase.config";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";

function Home({ navigation }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      getUsers();
  }, []);

  const getUsers = async () => {
      const list = [];
      setIsLoading(true);
      try {
          const dbSnap = await getDocs(collection(db, 'users'));
          dbSnap.forEach(item => {
              list.push(item.data());
          });
          setUsers(list);
      } catch (error) {
          console.error("Error fetching users:", error);
      } finally {
          setIsLoading(false);
      }
  };

  if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"white", }}>
        <Image
            source={{ uri: 'https://cdn.dribbble.com/users/940782/screenshots/2715943/pandadribbble.gif' }} // Replace with your image URL
            style={{ height: "50%", width: "100%", objectFit: "contain", }}
        />
        <Text style={{fontSize: 24,  color:"black",}}>loading...</Text>
    </View>
      );
  }

  return (
      <View style={{ flex: 1 }}>
          <View style={{ height: 90, width: "100%", backgroundColor: "#008080", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
              <Text style={{ color: "#333333", fontWeight: "bold", fontSize: 20 }}>PANDA CHAT</Text>
              <SearchBar/>
          </View>
          <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 30, flexGrow: 1 }}>
              {users.map((item, index) => (
                  <View key={index} style={{ height: 60, width: "80%", marginBottom: 10, backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
                      <Text style={{ color: "#333333" }}>{item.name}</Text>
                      <Text style={{ color: "#333333" }}>{item.city}</Text>
                      <TouchableOpacity >
                              <Icon name="plus-box" size={32} color="#000000" />
                      </TouchableOpacity>
                  </View>
              ))}
          </ScrollView>
          <Bottombar navigation={navigation} />
      </View>
  );
}

export default Home;
