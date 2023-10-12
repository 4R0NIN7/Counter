import { Button as ReactNativeButton } from "react-native"
import styled from "styled-components/native"

type TButtonProps = {
    onPress: () => void
    title: string
}
const Button = ({ onPress, title }:TButtonProps) =>{
    return <ReactNativeButton onPress={onPress} title={title}/>
}

export { Button }