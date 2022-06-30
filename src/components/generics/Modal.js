import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ setModal, show, info, fr }) => {
    const modalRef = useRef(null);

    const { title, description, tools, img, banner, url, doc, github, dribbble } = info;

    const closeModal = () => {
        setModal(false);
        document.body.style.overflow = 'unset';
    };

    if (!show) return null;

    document.body.style.overflow = 'hidden';

    return (
        <div className="modal " ref={modalRef}>
            <div className="modal-content blur">
                <div className="modal-left" style={{ background: `url(${banner ? banner : img})` }}></div>

                <div className="modal-right">
                    <div className="modal-body">
                        <h1 className="modal-title">
                            <img src={img} alt={title} />
                            {title}
                        </h1>

                        <div className="modal-description">
                            {description && <p>{description}</p>}

                            {tools && (
                                <p>
                                    {fr ? 'Outils' : 'Tools'} : {tools}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="modal-footer">
                        {url && (
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {fr ? 'Lien' : 'Link'}
                            </a>
                        )}

                        {doc && (
                            <a href={doc} target="_blank" rel="noopener noreferrer">
                                Documentation
                            </a>
                        )}

                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        )}

                        {dribbble && (
                            <a href={dribbble} target="_blank" rel="noopener noreferrer">
                                Dribbble
                            </a>
                        )}
                    </div>
                </div>

                <div className="close-icon" onClick={closeModal}>
                    <FontAwesomeIcon icon={faWindowClose} size="2x" />
                </div>
            </div>
            <div className="modal-bg" onClick={closeModal}></div>
        </div>
    );
};

export default Modal;
