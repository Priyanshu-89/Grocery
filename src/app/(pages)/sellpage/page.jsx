"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BsFillSaveFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SellPageItems({ stockList }) {
    const [stocks, setStocks] = useState(stockList || []);
    const [selectedItem, setSelectedItem] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [unit, setUnit] = useState('');
    const [category, setCategory] = useState('');
    const [addedItems, setAddedItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [quantity, setQuantity] = useState(0);



    useEffect(() => {
        const getAllStock = async () => {
            try {
                const response = await axios.get("/api/stocklist");
                setStocks(response.data);
            } catch (error) {
                console.log("Not found");
            }
        };
        getAllStock();
    }, []);

    const updatePricesAndUnit = (itemName) => {
        const selectedStock = stocks.find((stock) => stock.itemName === itemName);
        if (selectedStock) {
            setSellPrice(selectedStock.sellAmount);
            setPurchasePrice(selectedStock.purchaseAmount);
            setUnit(selectedStock.unit);
            setCategory(selectedStock.category);
        } else {
            setSellPrice('');
            setPurchasePrice('');
            setUnit('');
            setCategory('');
        }
    };

    const handleItemSelect = (e) => {
        const selectedValue = e.target.value;
        setSelectedItem(selectedValue);
        updatePricesAndUnit(selectedValue);
    };



    const handleTotalAmount = () => {
        const totalAmount = addedItems.reduce((acc, item) => {
            // const itemTotal = Number(item.sellPrice) * 1;
            const itemTotal = Number(item.sellPrice) * item.quantity;
            return acc + itemTotal;
        }, 0);
        setTotalAmount(totalAmount);
    };

    useEffect(() => {
        handleTotalAmount();
    }, [addedItems]);

    // Function to remove an item from the addedItems list
    const handleDeleteItem = (index) => {
        const itemTotal = Number(addedItems[index].sellPrice) * 1;
        setTotalAmount((prevTotal) => prevTotal - itemTotal);

        const updatedItems = [...addedItems];
        updatedItems.splice(index, 1);
        setAddedItems(updatedItems);

        toast.success('Item deleted successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };


    const handleSaveButtonClick = async () => {
        try {
            // Format data for MongoDB insertion
            const formattedData = addedItems.map(item => ({
                itemName: item.itemName,

                purchaseAmount: parseFloat(item.purchasePrice),
                sellAmount: parseFloat(item.sellPrice),
                unit: item.unit,
                category: item.category,
                quantity: item.quantity,
            }));

            // Send formatted data to the server
            await axios.post("/api/buydata", formattedData);

            // Clear added items after successful save
            setAddedItems([]);
            toast.success("Product Saved!");
        } catch (error) {
            toast.error("Failed to save product. Please try again.");
        }
    };








    // for quantity

    const handleAddItem = () => {
        if (selectedItem && quantity > 0) {
            const itemTotal = Number(sellPrice) * quantity;
            setTotalAmount((prevTotal) => prevTotal + itemTotal);

            setAddedItems([
                ...addedItems,
                {
                    itemName: selectedItem,
                    sellPrice,
                    purchasePrice,
                    unit,
                    category,
                    quantity,
                },
            ]);

            setSelectedItem('');
            setSellPrice('');
            setPurchasePrice('');
            setUnit('');
            setCategory('');
            setQuantity(0);
        }
    };


    return (
        <div className="max-w-[15rem] overflow-hidden  md:max-w-4xl mx-auto  my-8 p-6 bg-green-200 shadow-lg rounded-md">
            <h1 className="text-md md:text-3xl font-semibold mb-4 text-center text-green-600 underline">Sell Product&apos;s Here</h1>

            <div className="mb-4">
                <label htmlFor="itemName" className="block text-md md:text-lg font-medium text-green-700">
                    Select Item:
                </label>
                <select
                    id="itemName"
                    onChange={handleItemSelect}
                    value={selectedItem}
                    className="mt-1 p-2 border rounded-md w-full outline-none bg-green-50"
                >
                    <option value="">-- Select Item --</option>
                    {stocks.map((stock) => (
                        <option key={stock._id} value={stock.itemName}>
                            {stock.itemName}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="sellPrice" className="block text-md md:text-lg font-medium text-green-700">
                        Sell Price:
                    </label>
                    <input
                        type="text"
                        id="sellPrice"
                        value={sellPrice}
                        readOnly
                        className="mt-1 p-2 border rounded-md w-full bg-green-50 outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="sellPrice" className="block text-md md:text-lg font-medium text-green-700">
                        Purchase Price:
                    </label>
                    <input
                        type="text"
                        id="purchasePrice"
                        value={purchasePrice}
                        readOnly
                        className="mt-1 p-2 border rounded-md w-full bg-green-50 outline-none"
                    />
                </div>

                </div>

                <div>
                    <label htmlFor="unit" className="block text-md md:text-lg font-medium text-green-700">
                        Unit:
                    </label>
                    <input
                        type="text"
                        id="unit"
                        value={unit}
                        readOnly
                        className="mt-1 p-2 border rounded-md w-full bg-green-50 outline-none"
                    />
              
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="mb-4">
                    <label htmlFor="category" className="block text-md md:text-lg font-medium text-green-700">
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        readOnly
                        className="mt-1 p-2 border rounded-md w-full bg-green-50 outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="quantity" className="block text-md md:text-lg font-medium text-green-700">
                        Quantity:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                        className="mt-1 p-2 border rounded-md w-full bg-green-50 outline-none"
                    />
                </div>
            </div>


            <button onClick={handleAddItem} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                <IoIosAddCircle size={25} />
            </button>

            {/* Display added items */}
            <div className="mt-6">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                    {addedItems.map((item, index) => (
                        <li key={index} className="p-4  shadow-md rounded-md overflow-hidden relative bg-green-200">
                            <button
                                className="absolute top-2 right-2 text-red-500"
                                onClick={() => handleDeleteItem(index)}
                            >
                                <RiDeleteBin2Fill size={30} />
                            </button>
                            <h3 className="text-lg text-green-500 font-semibold mb-2">{item.itemName}</h3>
                            <p className="text-green-800 font-semibold text-base mb-2">Sell Price: {item.sellPrice}</p>
                            <p className="text-green-800 font-semibold text-base mb-2">Unit: {item.unit}</p>
                            <p className="text-green-800 font-semibold text-base mb-2">Category: {item.category}</p>
                            <p className="text-green-800 font-semibold text-base mb-2">pu: {item.purchasePrice}</p>
                            <p className="text-green-800 font-semibold text-base mb-2">Quantity: {item.quantity}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col md:flex-row justify-between'>
                {/* Total amount button */}
                <button onClick={handleTotalAmount} className="mt-4 bg-orange-500 text-orange-100 p-2 rounded-md">
                    Total Amount: {totalAmount}
                </button>

                {/* Save button */}
                <button
                    onClick={handleSaveButtonClick}
                    className=" flex gap-3 items-center mt-4 bg-orange-500 hover:bg-orange-600 text-orange-100 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                ><BsFillSaveFill />
                    Save
                </button>
            </div>


            <ToastContainer />



        </div>




    );
}

export default SellPageItems;
