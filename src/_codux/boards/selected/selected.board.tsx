import { createBoard } from '@wixc3/react-board';
import Selected from '../../../components/Selected';

export default createBoard({
    name: 'Selected',
    Board: () => <Selected />,
    isSnippet: true,
});
