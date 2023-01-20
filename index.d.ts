import React from 'react'
import { StyleProp, TextStyle } from "react-native"
import Animated from "react-native-reanimated"

export interface Props {
  animateToNumber: number
  fontStyle?: StyleProp<TextStyle>
  animationDuration?: number
  includeComma?: boolean
  easing?: Animated.EasingNodeFunction
  zeros?: number
}

declare const AnimatedNumber: React.FC<Props>

export default AnimatedNumber
