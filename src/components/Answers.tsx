import { useState, useEffect } from 'react';
import { Question } from '../type';
import Selected from './Selected';
import Answers_module from './Answers.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};
function Answers(props: Props) {
    const [showSelected, setShowSelected] = useState(false);

    useEffect(() => {
        setShowSelected(false);
    }, [props.question]);

    const onPress = (idx: number) => {
        setShowSelected(true);
        props.onSubmit(props.question.correctAnswerIdx === idx);
    };
    return (
        <div className={Answers_module.choices}>
            {props.question.choices.map((choice, idx) => {
                let color = '';
                if (showSelected && props.question.correctAnswerIdx === idx) color = 'green';
                else if (showSelected) color = 'red';
                return (
                    <Selected
                        text={choice}
                        onPress={() => onPress(idx)}
                        color={color}
                        disabled={showSelected}
                        key={idx}
                    />
                );
            })}
        </div>
    );
}
export default Answers;
