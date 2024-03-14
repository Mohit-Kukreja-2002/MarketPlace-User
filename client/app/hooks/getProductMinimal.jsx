import axios from 'axios'
import { useState } from 'react';
import toast from 'react-hot-toast'
import axiosInstance from '../utils/axiosInstance';

const useGetProductMinimal = () => {
    const [loading, setLoading] = useState(false);
    async function getProducts() {
        setLoading(true);
        try {
            const res = await axiosInstance.get('/newArrival')

            if (res?.data?.success) {
                return res.data;
            } else {
                toast.error("Some Error Occured. Please refresh once")
            }

        } catch (error) {
            toast.error("Some Error Occured. Please refresh once")
        } finally {
            setLoading(false);
        }
    }
    return {loading,getProducts}
}

export default useGetProductMinimal;