import React from "react";
import { Character } from "../Types/types";

import {View,Text, StyleSheet} from 'react-native'
 const Post = React.memo((person:Character) =>(
    <View>
        <Text>
            {person.id}
        </Text>
        <Text>{person.name}
        </Text>
    </View>
 ));
export default Post