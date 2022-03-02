import { TouchableOpacity, Text } from './styles'

export const Button = ({ theme, text, ...rest }) => {
    return (
        <TouchableOpacity theme={theme || ''}>
            <Text theme={theme || ''}>{text}</Text>
        </TouchableOpacity>
    )
}
