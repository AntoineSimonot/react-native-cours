import { View, Text, Pressable, RefreshControl, Image } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { searchUsers } from "../../Helper/API";

export default function Users() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        searchUsers(10).then(({ results }) => {
            setUsers(results);
        });
    }, []);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        const { results } = await searchUsers(10);
        setUsers(results);
        setRefreshing(false);
    }, []);

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <FlatList
                style={{ width: "100%" }}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                }}
                ListEmptyComponent={
                    <Text>Aucun utilisateur n'a été chargé</Text>
                }
                ListHeaderComponent={() => (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                            }}
                        >
                            Membres
                        </Text>
                        <Pressable
                            onPress={async () => {
                                const { results } = await searchUsers(1);
                                setUsers([...results, ...users]);
                            }}
                            style={{
                                backgroundColor: "lightblue",
                                borderRadius: 5,
                                paddingVertical: 5,
                                paddingHorizontal: 12.5,
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 16,
                                }}
                            >
                                Ajouter
                            </Text>
                        </Pressable>
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={users}
                renderItem={({ item }) => <UserItem user={item} />}
                ListFooterComponent={() => (
                    <Pressable
                        onPress={() => {
                            setUsers([]);
                        }}
                        style={{
                            backgroundColor: "red",
                            padding: 10,
                            borderRadius: 5,
                            marginTop: 20,
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                alignSelf: "center",
                            }}
                        >
                            Supprimer tous les utilisateurs de la liste
                        </Text>
                    </Pressable>
                )}
                keyExtractor={(item) => item.email}
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            marginVertical: 10,
                        }}
                    />
                )}
            />
        </View>
    );
}

interface UserItemInterface {
    user: UserType;
}

function UserItem({ user }: UserItemInterface) {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate("User", { user: user });
            }}
        >
            <View
                style={{
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        borderColor: "lightgrey",
                        borderWidth: 1,
                    }}
                    source={{ uri: user.picture.thumbnail }}
                />

                <View
                    style={{
                        marginLeft: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                        }}
                    >
                        {user.name.first + " " + user.name.last}
                    </Text>

                    <Text>{user.email}</Text>
                </View>
            </View>
        </Pressable>
    );
}
