"use client";

import DeleteCustomer from '../../components/deleteCustomer';
import EditCustomer from '../../components/editCustomer';
import AddCustomer from '../../components/addCustomer';
import CustomerContext from '../contexts/customerContext';
import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Loader from '../../components/loader';

function Customers() {
    const [customers, setCustomers] = useState([]);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [deleteCustomerId, setDeleteCustomerId] = useState(null);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const deleteCustomer = () => {
        setCustomers(customers.filter(customer => customer.id !== deleteCustomerId));
        setIsDeleteModalVisible(false);
    };

    const createCustomer = (customerInfo) => {
        setCustomers([...customers, customerInfo]);
        window.alert('Customer added successfully');
    };

    const updateCustomer = (updatedCustomer) => {
        setCustomers(customers.map(customer => customer.id === updatedCustomer.id ? updatedCustomer : customer));
        window.alert('Customer updated successfully');
    };

    useEffect(() => {
        getAllCustomers();
    }, []);

    const getAllCustomers = async () => {
        try {
            const { data } = await axios.get('http://localhost:4000/customers');
            setCustomers(data);
            setIsLoading(false);
        } catch(error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto m-10">
            <div className="shadow">
                <h2 className="text-center mb-4 text-2xl font-bold">Customer List</h2>
                <button className="bg-blue-600 my-2 text-sky-50 px-3 py-1 rounded cursor-pointer" onClick={() => { setIsAddModalVisible(true) }}>Add Customer</button>
                <table>
                    <thead className="divide-y divide-gray-200">
                        <tr>
                            <th className="px-5 py-2 text-left">Name</th>
                            <th className="px-5 py-2 text-left">Email</th>
                            <th className="px-5 py-2 text-left">Phone No</th>
                            <th className="px-5 py-2 text-left">Address</th>
                            <th className="px-5 py-2 text-left">Joined Date</th>
                            <th className="px-5 py-2 text-left">Status</th>
                            <th className="px-5 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {isLoading ? <Loader/> : (
                            <Fragment>
                                {
                                    customers.map(customer => (
                                        <tr key={customer.id}>
                                            <td className="px-5 py-2">{customer.name}</td>
                                            <td className="px-5 py-2">{customer.email}</td>
                                            <td className="px-5 py-2">{customer.phone}</td>
                                            <td className="px-5 py-2">{customer.address.street}, {customer.address.city}, {customer.address.state}, {customer.address.zip}</td>
                                            <td className="px-5 py-2">{customer.joinedDate}</td>
                                            <td className="px-5 py-2">{customer.isActive ? 'Active' : 'Inactive'}</td>
                                            <td className="px-5 py-2">
                                                <button className="bg-blue-600 text-sky-50 px-3 py-1 mr-4 rounded cursor-pointer" onClick={() => { setIsEditModalVisible(true); setCurrentCustomer(customer); }}>Edit</button>
                                                <button className="bg-red-600 text-sky-50 px-3 py-1 rounded cursor-pointer" onClick={() => { setIsDeleteModalVisible(true); setDeleteCustomerId(customer.id) }}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </Fragment>
                        )}
                    </tbody>
                </table>

                <CustomerContext.Provider value={{ 
                    isDeleteModalVisible, 
                    setIsDeleteModalVisible, 
                    deleteCustomer, 
                    isAddModalVisible, 
                    setIsAddModalVisible, 
                    createCustomer, 
                    isEditModalVisible, 
                    setIsEditModalVisible, 
                    updateCustomer, 
                    currentCustomer, 
                    setCurrentCustomer 
                }}>
                    <DeleteCustomer />
                    <AddCustomer />
                    <EditCustomer />
                </CustomerContext.Provider>
            </div>            
        </div>
    );
}

export default Customers;
