import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ content }) => {
    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = (e) => {
        setIsModalOpen(true);
    }
    const handleModalClose = (e) => {
        setIsModalOpen(false);
    }

    return (
        <article>
            {content.includes('mp4') ? (
                <video className="video" controls onClick={handleModalOpen}>
                    <source src={content} type="video/mp4"/>
                </video>
            ) : (
                <img className="image" src={content} alt='alt' onClick={handleModalOpen}/>
            )}
            <Modal isModalOpen={isModalOpen} content={content} handleModalClose={handleModalClose} />
        </article>
    )
}

export default Card
