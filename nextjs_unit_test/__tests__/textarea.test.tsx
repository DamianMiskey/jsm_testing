import { TextArea } from "@/components/input-fields/TextArea";
import { useState } from "react";
import {userEvent} from '@testing-library/user-event'
import { render , screen} from "@testing-library/react";

const TestWrapper = ({initialValue, maxWords} : {initialValue: string, maxWords?: number}) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }


    return (
        <TextArea label="Description" name="description" placeholder="Enter description" value={value} onChange={handleChange} maxWords={maxWords} />
    )
}


describe('TextArea Component', () => {

    it('updates value and does not show errir when typing within word limit', async() => {
        const user = userEvent.setup()

        render(<TestWrapper initialValue="" maxWords={10} />);

        const textarea = screen.getByRole('textbox');

        const userInput = 'I am a full-stack developer';

        await user.type(textarea, userInput);

        expect(textarea).toHaveValue(userInput);

        expect(screen.queryByText(/Maximum 10 words allowed/)).not.toBeInTheDocument();
    })

    it('clears the error message when the word count becomes valid', async() => {
        const MAX_WORDS = 10;
        const user = userEvent.setup()

        render(<TestWrapper initialValue="" maxWords={MAX_WORDS} />);

        const textarea = screen.getByRole('textbox');

        // 1. Type text exceeding the word limit
        const userInputInvalid = 'I am a full-stack developer -- testing with more than 10 words ....';
        await user.type(textarea, userInputInvalid);

        const errorElement = await screen.findByText(`Maximum ${MAX_WORDS} words allowed`);
        expect(errorElement).toBeInTheDocument();

        // 2. Now type valid text within the word limit
        const validInput = 'I am a full-stack developer';
        await user.clear(textarea);
        await user.type(textarea, validInput);


        expect(screen.queryByText(`Maximum ${MAX_WORDS} words allowed`)).not.toBeInTheDocument();
    });

})