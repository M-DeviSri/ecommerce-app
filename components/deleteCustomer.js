"use client"

import CustomerContext from "../app/contexts/customerContext";
import { useContext } from 'react';

function DeleteCustomer() {
    const { isDeleteModalVisible, setIsDeleteModalVisible, deleteCustomer } = useContext(CustomerContext);
    const confirmDelete = () => {
        deleteCustomer();
    }
    return (
        <div id="delete-modal" className={`modal fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10 ${!isDeleteModalVisible ? 'hidden': ''}`}>
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Delete User</h2>
                <p>Are you sure you want to delete this user?</p>
                <div className="mt-4 flex justify-end space-x-3">
                    <button id="cancel-button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" onClick={() => setIsDeleteModalVisible(false)}>Cancel</button>
                    <button id="confirm-button" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={confirmDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteCustomer;