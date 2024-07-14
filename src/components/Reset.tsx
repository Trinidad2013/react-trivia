import App_module from '../App.module.scss';
import Reset_module from './Reset.module.scss';
import Classnames from 'classnames';
import Questions_module from './Questions.module.scss';
type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};
function Reset(props: Props) {
    return (
        <div>
            <h1 className={Questions_module.Question}>
                You scored: {(props.correctQuestions / props.totalQuestions) * 100} %
            </h1>
            <button
                onClick={props.onPress}
                className={Classnames(App_module.next, Reset_module.reset)}
            >
                Press to Play Again!
            </button>
        </div>
    );
}
export default Reset;
