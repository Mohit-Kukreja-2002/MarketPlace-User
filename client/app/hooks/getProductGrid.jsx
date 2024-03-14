import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axiosInstance from '../utils/axiosInstance';

const useGetProductGrid = () => {
    const [loading, setLoading] = useState(false);
    const getProducts = async () => {
        try {
            setLoading(true);
            const res = await axiosInstance.get('/featuredProducts');

            if (res?.data?.success) {
                return res?.data?.products;
            } else {
                toast.error("Some Error Occured. Please refresh once");
            }
        } catch (error) {
            toast.error("Some Error Occured. Please refresh once");

        } finally {
            setLoading(false);
        }
    }
    return {loading, getProducts};
}

export default useGetProductGrid