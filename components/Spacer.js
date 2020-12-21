import React from "react";
import { View } from 'react-native'
import spaces from "../config/spaces.js";

export default function Spacer({
    size = 0,
    horizontal
}) {
    return <View style={{

        width: horizontal ? size * spaces.spacerUnit : 0,
        height: !horizontal ? size * spaces.spacerUnit : 0
    }} />
}