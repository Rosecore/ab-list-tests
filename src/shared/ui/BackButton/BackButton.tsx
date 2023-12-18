import './BackButton.scss'
import chevron from './../../assets/back_chevron.svg'
interface BackButtonProps {
    clickHandler: () => void
}

const BackButton = ({ clickHandler }: BackButtonProps) => {

    return (
        <div className={'back-button'}
            onClick={() => clickHandler()} >
            <img className='chevron' src={chevron} />
            <p className='text'> Back </p>
        </div>
    );
};

export default BackButton;