import { View, StyleSheet, Text, Pressable } from "react-native";

export function Listingradioselection({ name, options, value, setvalue }) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text>{name}</Text>
            </View>
            <View style={styles.right}>
                {options.map((option, i) => {
                    return (
                        <Pressable onPress={setvalue(option)} key={i}>
                            <View
                                style={[
                                    styles.option,
                                    value == option && styles.selected,
                                ]}
                            >
                                <Text>{option}</Text>
                            </View>
                        </Pressable>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});
