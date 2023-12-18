import { memo, useState } from 'react';
import search from '../../assets/search.svg'
import './InputField.scss'
interface InputFieldProps {
    plaseholder: string,
    additionalInfo?: number,
    onChange: (searchString: string) => void
}
const InputField = memo(({ plaseholder, additionalInfo, onChange }: InputFieldProps) => {
    const [inputValue, setInputValue] = useState<string>('')
    return (
        <div className="input-wrapper">
            <img src={search} alt='search' />
            <input placeholder={plaseholder} className="default-input" type='text' value={inputValue} onChange={e => {
                setInputValue(e.target.value)
                onChange(e.target.value)
            }}>

            </input>
            <div className='additional-info'>{additionalInfo} tests</div>
        </div>
    );
});

export default InputField;