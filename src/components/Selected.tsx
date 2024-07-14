import Selected_module from './Selected.module.scss';
type Props = {
    onPress: () => void;
    text: string;
    color?: string;
    disabled?: boolean;
};
function Selected(props: Props) {
    const style = props.color ? { color: props.color } : {};
    return (
        <button
            onClick={props.onPress}
            disabled={props.disabled}
            className={Selected_module.Selected}
        >
            <span style={style}>{props.text}</span>
        </button>
    );
}

export default Selected;
