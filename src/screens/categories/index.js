import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles.js';

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>aqui va el contenido de categorias</Text>
            <Button
                title="Ir a Productos"
                onPress={() => navigation.navigate('Products')}
            ></Button>
        </View>
    );
};
export default Categories;
