import { View, Text, Image, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function User() {
    const route = useRoute();
    const { user } = route.params as { user: UserType };

    return (
        <View
            style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
            <Image
                style={{
                    width: "100%",
                    height: 400,
                }}
                source={{ uri: user.picture.large }}
            />
            <View
                style={{
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                    backgroundColor: "white",
                    flex: 1,
                    width: "100%",
                    top: -25,
                    paddingHorizontal: 25,
                }}
            >
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginTop: 30,
                    }}
                >
                    {user.name.first}
                </Text>

                <Text
                    style={{
                        fontSize: 20,
                        marginTop: 2.5,
                        marginBottom: 5,
                    }}
                >
                    {user.name.last}
                </Text>

                <UserTextDetail title="Email" content={user.email} />

                <UserTextDetail title="Téléphone" content={user.phone} />

                <UserTextDetail
                    title="Pays de résidence"
                    content={user.location.country}
                />

                <Pressable
                    style={{
                        backgroundColor: "lightblue",
                        padding: 15,
                        borderRadius: 5,
                        marginTop: 25,
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                        }}
                    >
                        SUIVRE
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

function UserTextDetail({
    title,
    content,
}: {
    title: string;
    content: string;
}) {
    return (
        <Text
            style={{
                fontSize: 16,
                marginTop: 10,
            }}
        >
            {title}: {content}
        </Text>
    );
}
