import { View} from 'react-native'
import React from 'react'


interface Props {
    heigth?: number,
    width?: number,
}

const SpaceComponent = (props: Props) => {
    const {heigth, width} = props
  return (
    <View style={
        {
            height: heigth,
            width: width,
        }
    }>
      
    </View>
  )
}

export default SpaceComponent