import Modal from 'react-modal';
import { IoIosCloseCircle } from 'react-icons/io';

type ModalProps = {
    type: string;
    isOpen: boolean;
    onRequestClose: (str: string) => void;
    children: React.ReactNode;
};

export default function ModalComponent({ type, isOpen, onRequestClose, children } : ModalProps){

    return (
        <Modal
            isOpen={isOpen}
            className="bg-[rgba(0,0,0,0.5)] relative sm:top-[10%] sm:left-[10%] lg:top-[15%] lg:left-[17%] right-auto bottom-[auto] w-[80%] max-w-[1024px] max-h-[90%] mr-[-50%] p-[5px] border-none"
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => onRequestClose(type)}
            closeTimeoutMS={300}
        >
            <div className='relative flex w-full justify-end'>
                <button
                    onClick={() => onRequestClose(type)}
                    className='absolute right-1 top-1'
                >
                    <IoIosCloseCircle className='text-3xl text-[var(--accent)]'/>
                </button>
            </div>
            <div className='text-emerald-300'>{children}</div>
        </Modal>
    );
};
