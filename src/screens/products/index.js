import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles.js';

const Products = ({ navigation }) => {
    return (
        <View styles={styles.container}>
            <Text>Aqui va la lista de productos</Text>
            <Button title="Ir al producto"onPress={()=>navigation.navigate("Product")}></Button>
            <Text>Aqui va la lista de productos</Text>
            <Button title="Ir al producto"onPress={()=>navigation.navigate("Product")}></Button>
        </View>
    );
};
export default Products;
