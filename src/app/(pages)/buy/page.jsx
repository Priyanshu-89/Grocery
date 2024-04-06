"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiDeleteBin2Fill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";



const SellPage = () => {

    // const [itemId, setItemId] = useState(null);
    const [grocery, setGrocery] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [rate, setRate] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const [showItemDetails, setShowItemDetails] = useState(false);
    const [sellItems, setSellItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    // const [billNumber, setBillNumber] = useState(null)
    // axios.post("",{sellItem, billnum})







    // this is for show list 
    useEffect(() => {
        const getAllGrocery = async () => {
            try {
                const response = await axios.get("/api/showlist");
                console.log("data", response.data);
                setGrocery(response.data);
            } catch (error) {
                console.log("Fetching Error");
            }
        };
        getAllGrocery();
    }, []);

    const handleItem = async () => {
        const itemName = document.getElementById("grocerySelect").value;
        console.log("Selected Item: ", itemName);



        // Find the selected grocery item
        const selectedGrocery = grocery.find(gro => gro.item === itemName);

        // Set the selected category and unit
        if (selectedGrocery) {
            setSelectedItem(selectedGrocery.item);
            setSelectedCategory(selectedGrocery.category);
            setSelectedUnit(selectedGrocery.unit);
            setItemId(selectedGrocery._id);
        }
    };

    const handleCalculateAmount = async () => {
        // Calculate the amount based on rate and quantity
        const calculatedAmount = parseFloat(rate) * parseFloat(quantity);
        // setAmount(calculatedAmount.toFixed(2));
        setAmount(isNaN(calculatedAmount) ? '' : calculatedAmount.toFixed(2));
        setShowItemDetails(true);


    };

    const handleAddItem = () => {


        // Add the item to the sellItems array
        setSellItems((sellItems) => [
            ...sellItems,
            {
                itemName: selectedItem,
                category: selectedCategory,
                unit: selectedUnit,
                amount: amount,
                Rate: rate,
                Quantity: quantity,
            },
        ]);

        // Reset Inputs
        document.getElementById("grocerySelect").value = "Select Item";
        setRate("");
        setQuantity("");
        setAmount("");
        setSelectedItem("");
        setSelectedCategory("");
        setSelectedUnit("");
    };





    //This code is delete the items

    const handleDeleteItem = (id) => {
        console.log("deleted", id);


        const restItems = sellItems.filter((item, index) => index !== id);


        setSellItems(restItems);
    };


    //calcute total amount 
    const calculateTotalAmount = () => {
        let sum = 0;

        // Iterate through sellItems and sum up the amounts
        sellItems.forEach((item) => {
            sum += parseFloat(item.amount);
        });

        return sum.toFixed(2);
    };

    const handleTotalAmountClick = () => {
        const calculatedTotalAmount = calculateTotalAmount();
        setTotalAmount(calculatedTotalAmount);
    };


    // Function to save data to MongoDB

    const handleSaveButtonClick = async () => {
        await axios.post("/api/buydata", sellItems).then(res=>{
            console.log(res.data)
        });
        // console.log(sellItems)

    };


    return (
        <div className='mt-8 mr-4 bg-green-200 rounded-md max-w-full border border-red-700'>

            <div className='flex gap-8 p-4 items-center justify-around'>
                <div className="my-4">
                    <label htmlFor="grocerySelect" className="block text-md font-medium text-green-700">Select Grocery Item</label>
                    <select
                        id="grocerySelect"
                        onChange={handleItem}
                        className="mt-1 p-2 border w-full rounded-md"
                    >
                        <option>--Select Item--</option>
                        {grocery.map((gro, i) => (
                            <option key={i} value={gro.item}>
                                {gro.item}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-4">
                    <label htmlFor="category" className="block text-md font-medium text-green-700">Category</label>
                    <input
                        id="category"
                        type="text"
                        className="mt-1 p-2 border w-full rounded-md"
                        value={selectedCategory}
                        readOnly
                    />
                </div>

                <div className="my-4">
                    <label htmlFor="unit" className="block text-md font-medium text-green-700">Unit</label>
                    <input
                        id="unit"
                        type="text"
                        className="mt-1 p-2 border w-full rounded-md"
                        value={selectedUnit}
                        readOnly
                    />
                </div>

            </div>

            {/* here that another section start  */}



            <div className='flex gap-8 p-4 items-center justify-around'>

                <div className="my-4">
                    <label htmlFor="rate" className="block text-md font-medium text-green-700">Selected item</label>
                    <input
                        id="itemName"
                        type="text"

                        className="mt-1 p-2 border w-full rounded-md"
                        value={selectedItem}
                        onChange={(e) => setRate(e.target.value)}

                    />
                </div>


                <div className="my-4">
                    <label htmlFor="rate" className="block text-md font-medium text-green-700">Rate</label>
                    <input
                        id="rate"
                        type="text"
                        step="1"
                        className="mt-1 p-2 border w-full rounded-md"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        onBlur={handleCalculateAmount}
                    />
                </div>

                <div className="my-4">
                    <label htmlFor="quantity" className="block text-md font-medium text-green-700">Quantity</label>
                    <input
                        id="quantity"
                        type="number"
                        className="mt-1 p-2 border w-full rounded-md"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        onBlur={handleCalculateAmount}
                    />
                </div>

                <div className="my-4">
                    <label htmlFor="amount" className="block text-md font-medium text-green-700">Amount</label>
                    <input
                        id="amount"
                        type="text"
                        className="mt-1 p-2 border w-full rounded-md"
                        value={amount}
                        readOnly
                        onClick={handleCalculateAmount}
                    />
                </div>


               <div className='mt-8'>
               <button
                    type="button"
                    className="bg-green-500  text-green-200 px-1 py-1 rounded-md hover:bg-green-600 hover:transition-all hover:duration-300"
                    onClick={handleAddItem}
                ><IoIosAddCircle size={30} />

                </button>
               </div>
            </div>


            <div>


                <div className="flex items-center justify-around gap-4 flex-col max-w-6xl mx-auto p-4">
                    <h1 className='bg-green-50 px-3 py-2 rounded-md font-semibold text-xl text-green-700'>Your Selected items</h1>
                    {showItemDetails &&
    sellItems.length > 0 &&
    sellItems.map((sitem, i) => (
        <div key={i} className="w-full flex-col bg-green-100 flex items-center justify-evenly gap-8  p-2 rounded-md shadow-md mb-2 ">
            <div className='flex w-full  gap-2 bg-green-200  items-center justify-around mx-5 p-5'>
                <p className="font-bold flex">{`Item Name: ${sitem.itemName}`}</p>
                <p>{`Category: ${sitem.category}`}</p>
                <p>{`Unit: ${sitem.unit}`}</p>
                <p>{`Amount: ${sitem.amount}`}</p>
                <p>{`Rate: ${sitem.Rate}`}</p>
                <p>{`Quantity: ${sitem.Quantity}`}</p>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteItem(i)}>
                    <RiDeleteBin2Fill size={30} />
                </button>
            </div>
        </div>
    ))
}

                    <div className='flex gap-8 p-4 items-center justify-around'>

                        <button
                            className='bg-orange-500 flex items-center gap-1 text-white px-3 py-1 rounded-md hover:bg-orange-600 hover:transition-all hover:duration-300'
                            type="button"
                            onClick={handleTotalAmountClick}

                        >
                            Total Amount
                        </button>
                        <p className='flex items-center gap-1 font-semibold'>Total Amount: <FaRupeeSign />{totalAmount}</p>
                    </div>
                    <div>
                        <button
                            className='bg-green-500 flex items-center gap-2 text-white px-3 py-1 rounded-md hover:bg-green-600 hover:transition-all hover:duration-300'
                            type="button"
                            onClick={() => {
                                handleSaveButtonClick()

                            }}
                        ><BsFillSaveFill size={15}/>
                            Save
                        </button>
                    </div>
                    <div>




                    </div>
                </div>

            </div>
        </div>

    );
}

export default SellPage;
