import Svg, { Path } from "react-native-svg";

export function Tradearrow({ size, flip }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            viewBox="0 -960 960 960"
            width={size}
            style={flip && { transform: [{ scaleX: -1 }, { scaleY: -1 }] }}
        >
            <Path d="M600-80q-127-48-203.5-158T320-484q0-91 36-172.5T458-800H320v-80h280v280h-80v-148q-57 51-88.5 119.5T400-484q0 102 54 187.5T600-167v87z" />
        </Svg>
    );
}
