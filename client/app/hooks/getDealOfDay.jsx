import React, { useState } from 'react'
import axiosInstance from '../utils/axiosInstance';
import toast from 'react-hot-toast';

const useGetDealOfDay = () => {
    const [loading, setLoading] = useState(false);
    async function getProducts() {
        try {
            setLoading(true);
            const res = await axiosInstance.get('/dealOfDay');

            if (res?.data?.success) {
                return res.data.products
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

export default useGetDealOfDay