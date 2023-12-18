import { useState } from 'react';
import { StatusesEnum } from '../../../features/taskList/model/types/types';
import Button from '../Button/Button';
import './ListElement.scss';

interface ListElementProps {
    color: string,
    taskName: string,
    status: string,
    type: string,
    site: string | number,
    id?: number,
    onClickFinalize: (id?: number) => void,
    onClickResult: (id?: number) => void,
}
const ListElement = (props: ListElementProps) => {
    const { color, taskName, type, status, site, id, onClickFinalize, onClickResult } = props
    const [hovered, setHovered] = useState<boolean>(false)
    const onHover = () => {
        setHovered(true)
    }
    const onUnhover = () => {
        setHovered(false)
    }
    const statusColor: Record<string, string> = {
        [StatusesEnum.DRAFT]: 'black',
        [StatusesEnum.ONLINE]: 'green',
        [StatusesEnum.STOPPED]: 'red',
        [StatusesEnum.PAUSED]: 'orange'
    }
    return (
        <div className={hovered ? 'list-container hovered' : 'list-container'}
            onMouseEnter={onHover}
            onMouseLeave={onUnhover}>
            <div className='list-element'>
                <div className={"color-part " + color}> </div>
                <div className="list-part name">{taskName}</div>
                <div className="list-part type">{type}</div>
                <div className={"list-part status " + statusColor[status]}>{status} </div>
                <div className="list-part site">{site} </div>
                <div className="list-part button">
                    {status.toString() === StatusesEnum.DRAFT
                        ? <Button type={'unactive'} text="Finalize" id={id} onCLick={onClickFinalize} />
                        : <Button type={'active'} text="Result" id={id} onCLick={onClickResult} />
                    }

                </div>
            </div>
        </div>
    );
};

export default ListElement;