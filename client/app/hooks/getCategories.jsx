import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axiosInstance from '../utils/axiosInstance';

const useGetCategories = () => {
  const [loading, setLoading] = useState(false);
  const getCategories = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get('/categories')
      if (res?.data?.success) {
        return res?.data?.result;
      } else {
        toast.error("Some Error Occured. Please refresh once")
      }
    } catch (e) {
      toast.error("Some Error Occured. Please refresh once")
    } finally {
      setLoading(false);
    }
  }
  return { loading, getCategories };
}

export default useGetCategories