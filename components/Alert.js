import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, View, Text } from 'react-native'
import Button from './Button'
import colors from '../config/colors'
import spaces from '../config/spaces'


export default function Alert({
  open,
  onClose,
  message = null, 
  typology
}) {
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animation, {
      toValue: open ? 1 : 0,
      duration: 500,
      useNativeDriver: true
    }).start()
  }, [open])

  let typologyContainerStyle = typology === "danger" ? styles.containerDanger : styles.containerSuccess

  return (
    <Animated.View style={[styles.container, {
      transform: [{
        scale: animation.interpolate({
          inputRange: [0, 1], 
          outputRange: [0, 1] 
        })
      }],
    }]}>
      <View style={[styles.containerInternal, typologyContainerStyle]}>
        {
          message && <Text style={styles.message}>{message}</Text>
        }

        {
            onClose&& ( 
            <Button 
                style={styles.button} 
                color={colors.black} 
                onPress={onClose}
                name={"CHIUDI"}>                
            </Button>
        )}
        }
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spaces.containerSpace,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    paddingHorizontal: spaces.containerSpace,
    paddingTop: 10
  },
  containerInternal: {
    backgroundColor: 'red',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    width: '100%'
  },
  containerSuccess: {
    backgroundColor: colors.green
  },
  containerDanger: {
    backgroundColor: colors.red
  },
  message: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 15,
    flexBasis: '70%'
  },
  button: {
    flexBasis: '30%'
  }
})