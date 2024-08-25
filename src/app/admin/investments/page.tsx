'use client';
import axios from 'axios';
import React, { useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { useState } from 'react';


export default function AddInvestment(){
  const [investment , setInvestment] = useState({
  tag: "",
  cardImage: "",
  title: "",
  location: "",
  description: "",
  totalPrice: "",
  getPrice: "",
  securityType: "",
  investmentMultiple: "",
  maturity: "",
  minInvestment: "",
  })


  const [loading , setloading] = useState(false)

  const onAddingInvestment = async()=>{
    try {
      setloading(true)
      const response = await axios.post("/api/investments",investment)
      toast.success('Successfully added new Investment!');
      console.log("Successfully added new Investment", response.data)


    } catch (error:any) {
      console.error("adding investment failed ",error);
    }
  }


  return (
    <>
    <Toaster />
    <div className="max-w-full p-6 bg-white shadow-md ">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Investment Opportunity</h2>
      <div className="space-y-6 flex flex-col gap-1">
        <div className="form-group">
          <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
            Tag
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={investment.tag}
            onChange={(e)=> setInvestment({...investment, tag:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-custom-green focus:border-custom-green sm:text-sm text-black"
            required
          />
          
        </div>

        <div className="form-group">
          <label htmlFor="cardImage" className="block text-sm font-medium text-gray-700">
            Card Image
          </label>
          <input
            type="url"
            id="cardImage"
            name="cardImage"
            value={investment.cardImage}
            onChange={(e)=> setInvestment({...investment, cardImage:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={investment.title}
            onChange={(e)=> setInvestment({...investment, title:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={investment.location}
            onChange={(e)=> setInvestment({...investment, location:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={investment.description}
            onChange={(e)=> setInvestment({...investment, description:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">
            Total Price
          </label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            value={investment.totalPrice}
            onChange={(e)=> setInvestment({...investment, totalPrice:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="getPrice" className="block text-sm font-medium text-gray-700">
            Get Price
          </label>
          <input
            type="number"
            id="getPrice"
            name="getPrice"
            value={investment.getPrice}
            onChange={(e)=> setInvestment({...investment, getPrice:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="securityType" className="block text-sm font-medium text-gray-700">
            Security Type
          </label>
          <input
            type="text"
            id="securityType"
            name="securityType"
            value={investment.securityType}
            onChange={(e)=> setInvestment({...investment, securityType:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="investmentMultiple" className="block text-sm font-medium text-gray-700">
            Investment Multiple
          </label>
          <input
            type="number"
            step="0.1"
            id="investmentMultiple"
            name="investmentMultiple"
            value={investment.investmentMultiple}
            onChange={(e)=> setInvestment({...investment, investmentMultiple:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="maturity" className="block text-sm font-medium text-gray-700">
            Maturity (Years)
          </label>
          <input
            type="number"
            id="maturity"
            name="maturity"
            value={investment.maturity}
            onChange={(e)=> setInvestment({...investment, maturity:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="minInvestment" className="block text-sm font-medium text-gray-700">
            Minimum Investment
          </label>
          <input
            type="number"
            id="minInvestment"
            name="minInvestment"
            value={investment.minInvestment}
            onChange={(e)=> setInvestment({...investment, minInvestment:e.target.value })} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            required
          />
        </div>

        <button
        onClick={onAddingInvestment}
          type="submit"
          className="w-full bg-custom-green text-white py-2 px-4 rounded-md hover:bg-custom-dark-greenfocus:outline-none focus:ring-2 focus:ring-custom-dark-green focus:ring-offset-2"
        >
          Add Investment
        </button>
      </div>
    </div>
    </>
  );
};


