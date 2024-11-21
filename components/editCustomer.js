"use client";

import { useRef, useContext, useEffect } from 'react';
import CustomerContext from '../app/contexts/customerContext';

function EditCustomer() {
    const { isEditModalVisible, setIsEditModalVisible, updateCustomer, currentCustomer } = useContext(CustomerContext);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const streetRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const zipRef = useRef(null);
    const joinedDateRef = useRef(null);
    const isActiveRef = useRef(null);

    useEffect(() => {
        if (currentCustomer) {
            nameRef.current.value = currentCustomer.name || '';
            emailRef.current.value = currentCustomer.email || '';
            phoneRef.current.value = currentCustomer.phone || '';
            streetRef.current.value = currentCustomer.address.street || '';
            cityRef.current.value = currentCustomer.address.city || '';
            stateRef.current.value = currentCustomer.address.state || '';
            zipRef.current.value = currentCustomer.address.zip || '';
            joinedDateRef.current.value = currentCustomer.joinedDate || '';
            isActiveRef.current.checked = currentCustomer.isActive || false;
        }
    }, [currentCustomer]);

    const editCustomer = () => {
        const updatedCustomer = {
            id: currentCustomer.id,
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            address: {
                street: streetRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                zip: zipRef.current.value,
            },
            joinedDate: joinedDateRef.current.value,
            isActive: isActiveRef.current.checked,
        };

        updateCustomer(updatedCustomer);
        setIsEditModalVisible(false);
    };

    const closeModal = () => {
        setIsEditModalVisible(false);
    };

    return (
        <div id="modalBackground" className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10 ${!isEditModalVisible ? 'hidden' : ''}`}>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6">
                <div className="flex justify-between items-center pb-3">
                    <h2 className="text-2xl">Edit Customer</h2>
                    <button className="text-gray-500" onClick={closeModal}>&times;</button>
                </div>
                <div id="editCustomerForm">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name:</label>
                        <input type="text" ref={nameRef} id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
                        <input type="email" ref={emailRef} id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                        <input type="tel" ref={phoneRef} id="phone" name="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                    </div>
                    <fieldset className="mb-4">
                        <legend className="block text-gray-700">Address:</legend>
                        <div className="mb-2">
                            <label htmlFor="street" className="block text-gray-700">Street:</label>
                            <input type="text" ref={streetRef} id="street" name="address[street]" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="city" className="block text-gray-700">City:</label>
                            <input type="text" ref={cityRef} id="city" name="address[city]" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="state" className="block text-gray-700">State:</label>
                            <input type="text" ref={stateRef} id="state" name="address[state]" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="zip" className="block text-gray-700">Zip:</label>
                            <input type="text" ref={zipRef} id="zip" name="address[zip]" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                        </div>
                    </fieldset>
                    <div className="mb-4">
                        <label htmlFor="joinedDate" className="block text-gray-700">Joined Date:</label>
                        <input type="date" ref={joinedDateRef} id="joinedDate" name="joinedDate" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" ref={isActiveRef} id="isActive" name="isActive" className="mr-2" />
                        <label htmlFor="isActive" className="text-gray-700">Active</label>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={closeModal}>Cancel</button>
                        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={editCustomer}>Update Customer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCustomer;
