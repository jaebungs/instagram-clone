import React, {useEffect} from 'react'

const Modal = ({ isModalOpen, content, handleModalClose}) => {

    useEffect(()=>{
        const handleESCKey = (e) => {
            if (e.key === 'Escape' || e.key === 'ESC') {
                handleModalClose();
                console.log('h')
            }
            console.log('hd')
        }

        document.addEventListener('keydown', handleESCKey);
        return () => document.removeEventListener('keydown', handleESCKey)
    })

    if (!isModalOpen) {
        return null;
    }

    //prevent modal close when inside is clicked.
    const preventCloseClickInside = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="modal flex justify-center items-center bg-black bg-opacity-50" onClick={handleModalClose}>
            <div className="modal-content flex w-815p h-600p bg-white" onClick={(e)=>preventCloseClickInside(e)}>
                <div className="modal-image">
                    {content.includes('mp4') ? (
                        <video className="modal-video w-480p h-600p">
                            <source src={content} type="video/mp4"/>
                        </video>
                    ) : (
                        <img className="modal-image w-480p h-600p" src={content} alt='alt'/>
                    )}
                </div>
                <div className="modal-description">
                    <h2>
                        account name
                    </h2>
                    <p>blah blah and bunch of hash tags</p>
                </div>
                <button className="modal-close-button" onClick={handleModalClose}><i className="fas fa-times"></i></button>
            </div>
        </div>
    )
}

export default Modal
