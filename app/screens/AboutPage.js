import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';
import headerStyles from '../config/headerStyles';

function AboutPage(props) {
    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.header}>
                <Text style={headerStyles.title}>Boxing Coach</Text>
                <Text style={headerStyles.smallTitle}>About</Text>
            </View>
        </View>
    );
}



export default AboutPage;