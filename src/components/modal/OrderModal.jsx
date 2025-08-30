import {useDispatch, useSelector} from "react-redux";
import {Modal} from "antd";
import {SetModalOpen} from "../../redux/features/modal/modalSlice.js";



const OrderModal = () => {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state)=>state.modal.modalOpen);



    const handleOk = () => {
        dispatch(SetModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetModalOpen(false));

    };




    return (
        <>
            <Modal  open={modalOpen} onOk={handleOk}>
                <div>
                    <div>
                        <h1 className="text-3xl">Call For Order </h1>
                        <p className="text-2xl"> Phone - 01789-039597</p>
                        <p className="text-2xl">Phone - 01761-854761</p>
                        
                    </div>

                 
                    <div className="flex mt-6 gap-6 justify-end">
                        <button onClick={handleCancel}
                                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                       
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default OrderModal;