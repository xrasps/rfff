import { useState } from "react"
import Modal from 'react-modal'
import CreatePage from "../../pages/CreatePage/CreatePage"

export default function Modalka(){

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    function showModal(){
        setmodalIsOpen(true)
    }
    function closeModal(){
        setmodalIsOpen(false)
    }


    return(
        <>
        <section className="adada">
            <button onClick={showModal}>Заказать</button>
            <Modal isOpen={modalIsOpen}>
                <div className="modal-container">
                    <CreatePage setmodalIsOpen={setmodalIsOpen}></CreatePage>
                    <button className="modalBtn" onClick={closeModal}>Закрыть окно</button>
                </div>
                
            </Modal>
        </section>
            
        </>
    )
}