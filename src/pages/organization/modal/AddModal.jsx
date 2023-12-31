import React, { useRef } from 'react'
import axiosInstance from '../../../utils/config';

function AddModal({ data, setData, addModal, setAddModal, Alert, setAlert }) {
    const nameRef = useRef()

    const addFunc = (e) => {
        e.preventDefault()
        console.log({
            name: nameRef.current.value,
        });
        // axiosInstance.post(`/create`, {
        //     name: nameRef.current.value,
        // }).then((res) => {
        // })
        Alert(setAlert, "success", "Muvafaqqiyatli qo'shildi");
        setData([...data, {
            id: data[data.length - 1].id + 1 || 0,
            name: nameRef.current.value
        }])
        setAddModal(false)
    }
    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" >
                    <div className="modal-header bg-primary py-3">
                        <h5 className="modal-title text-white">Yangi organ qo'shish</h5>
                        <button type="button" className="btn-close"
                            onClick={() => setAddModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={addFunc}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <input className="form-control form-control-lg"
                                            ref={nameRef} type="text"
                                            placeholder='Nomi' />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <button className="btn-lg btn btn-primary w-100" type='submit'>
                                        Qo'shish
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddModal