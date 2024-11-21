// src/contexts/customerContext.js

import { createContext, useState } from 'react';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState(null);

    const deleteCustomer = () => { /* your delete logic */ };
    const createCustomer = (customerInfo) => { /* your create logic */ };
    const updateCustomer = (updatedCustomer) => { /* your update logic */ };

    return (
        <CustomerContext.Provider value={{
            isDeleteModalVisible, setIsDeleteModalVisible,
            isAddModalVisible, setIsAddModalVisible,
            isEditModalVisible, setIsEditModalVisible,
            currentCustomer, setCurrentCustomer,
            deleteCustomer, createCustomer, updateCustomer
        }}>
            {children}
        </CustomerContext.Provider>
    );
};

export default CustomerContext;
