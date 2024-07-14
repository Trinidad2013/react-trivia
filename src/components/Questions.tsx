import { Question } from '../type';
import Answers from './Answers';
import Questions_module from './Questions.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};
function QuestionComp(props: Props) {
    return (
        <div>
            <h2 className={Questions_module.Question}>{props.question.question}</h2>
            <Answers question={props.question} onSubmit={props.onSubmit} />
        </div>
    );
}

export default QuestionComp;
