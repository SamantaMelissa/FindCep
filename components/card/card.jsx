import { View, StyleSheet, Text } from "react-native"


export const Card = ({cep, logradouro, bairro, uf, estado, regiao}) => {
    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text style={styles.valor}>{cep}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text style={styles.valor}>{logradouro}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text style={styles.valor}>{bairro}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>UF:</Text>
                <Text style={styles.valor}>{uf}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text style={styles.valor}>{estado}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Região:</Text>
                <Text style={styles.valor}>{regiao}

                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        width: '70%',
        minHeight: '60%',
        padding: 20,
        //Atente-se: Somente o elevation não funciona em web nem ios
        // shadowColor: '#b2b2b2ff',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.5,
        // shadowRadius: 2,
        // elevation: 2
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: 7,
        // marginBottom: 100
        gap: 20
    },
    tituloValor: {
        fontWeight: 600
    }
    
})

