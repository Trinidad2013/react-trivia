import StatBar_module from './StatBar.module.scss';
type Props = {
    currentQuestion: number;
    totoalQuestions: number;
    correct: number;
    incorrect: number;
};
function StatBar(props: Props) {
    return (
        <div className={StatBar_module['stat-container']}>
            <p>
                Question: {props.currentQuestion} / {props.totoalQuestions}
            </p>
            <p>Correct: {props.correct}</p>
            <p>Incorrect: {props.incorrect}</p>
        </div>
    );
}

export default StatBar;
