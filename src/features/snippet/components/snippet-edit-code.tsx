import { TextField } from '@radix-ui/themes';
import { IoMdRefresh } from "react-icons/io";
import { IoKey } from "react-icons/io5";

export const SnippetEditCode = () => {
    return (
        <TextField.Root name={ 'edit-code' } placeholder={ 'Edit Code' } size={ '3' } value={ '1234' } className='w-full sm:w-[160px] text-center'>
            <TextField.Slot>
                <IoKey />
            </TextField.Slot>
            <TextField.Slot>
                <IoMdRefresh />
            </TextField.Slot>
        </TextField.Root>
    );
}