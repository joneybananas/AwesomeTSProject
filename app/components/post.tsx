import React from "react";

import {View,Text, StyleSheet} from 'react-native'
export const Post = ({title}:{title:number},{body}:{body:string}) =>{
    <View>
        <Text>
            {title}
        </Text>
        <Text>{body}
        </Text>
    </View>
}