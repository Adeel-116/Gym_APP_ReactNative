import React, { useState } from 'react';
import { Text, StyleSheet, View, StatusBar, TouchableOpacity, FlatList} from 'react-native';

export default function AgeScreen() {

   
    const ageLimit = [1,2,3,4,5,6,7,8,9];
        const midpointArray = Math.floor(ageLimit.length / 2); 
    const midpointValue = ageLimit[midpointArray];  
    console.log(midpointValue); 


    const renderItems = ({ item }: { item: number }) => {
        return (
            <View style={[styles.itemsContainer]}>
                <Text style={styles.itemText}>{item}</Text>
            </View>
        );
    };

    return (

        <View style={styles.mainContainer}>
            <StatusBar
                translucent={true}
                backgroundColor="#0000"
                barStyle='dark-content'
            />


            <View style={styles.headerContainer}>

                <View style={{ flex: 1, flexDirection: 'row', gap: 13 }}>
                    <View style={{}}>
                        <TouchableOpacity
                            style={styles.headerLine}
                        />
                    </View>
                    <View style={{}}>
                        <TouchableOpacity
                            style={[styles.headerLine, styles.activeLine]}
                        />
                    </View>
                    <View style={{}}>
                        <TouchableOpacity
                            style={styles.headerLine}
                        />
                    </View>
                    <View style={{}}>
                        <TouchableOpacity
                            style={styles.headerLine}
                        />
                    </View>
                    <View style={{}}>
                        <TouchableOpacity
                            style={styles.headerLine}
                        />
                    </View>
                </View>
            </View>



            <View style={styles.textContainer}>
                <View style={{
                    flex: 1, flexDirection: 'column', gap: 13, alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={styles.textHeading}>what is your age?</Text>
                    <Text style={styles.textParagraph}>For the better experience and personalised plans for you we need to know your age.</Text>
                </View>
            </View>



            {/* Slider */}



            <View style={styles.ageSliderContainer}>
                <View style={styles.slider}>

                <View style={''}>
                <FlatList
                    data={ageLimit}
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem={renderItems}
                    horizontal={true}
                />
                </View>

                <View style={[{
                    position: 'absolute',
                    width: 55,
                    height: '100%',
                    backgroundColor: '#eaf8f5',
                    borderColor: '#86D7c8',
                    borderLeftWidth: 3,
                    borderRightWidth: 3,
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                  
                }]}>
                <Text
                style={{
                    fontSize: 30,
                    color: '#000',
                    position: 'absolute',  
                    top: '30%',
                    left: '10%',
                  
                }}
                
                
                
                >{midpointValue}</Text>
                </View>

                </View>
                
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    itemsContainer: {
        position: 'relative',
        width: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1
    },
    itemText: {
        fontSize: 30,
        color: '#000',
    },
    flatListContent: {
        alignItems: 'center',
        transform: [{translateX: -30}]
    },

    slider: {
        width: '94%',
        height: '90%',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        
    },
    ageSliderContainer: {
        marginTop: 80,
        width: '100%',
        height: 110,
        justifyContent: 'center', 
        alignItems: 'center',    
       
    },
    textContainer: {
        width: '100%',
        marginTop: 80,
        height: 100,
        // backgroundColor: 'pink'
    },
    textHeading: {
        flex: 1,
        fontSize: 35,
        color: '#000',
        fontWeight: 600,
        fontFamily: 'MontserratAlternates-Medium',
    },
    textParagraph: {
        width: '92%',
        fontSize: 14,
        color: '#717171',
        textAlign: 'center',
        fontFamily: 'MontserratAlternates-Medium',
    },
    activeLine: {
        backgroundColor: '#000000',
    },
    headerLine: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 56,
        height: 5,
        borderRadius: 4,
        backgroundColor: '#eaeaea',
    },
    headerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
        marginTop: StatusBar ? StatusBar.currentHeight : 0,
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffff',
    },

});
