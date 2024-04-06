// "use client"
// import axios from 'axios';
// import React, { useState, useEffect } from 'react'

// function Totalsales({buylist}) {
// const [buyList, setBuyList]=useState(buylist || []);
// useEffect(() => {
// const getBuySales=async()=>{
//     await axios.get('/api/buylist').then(res=>{
//         console.log('sale', res.data)
//         setBuyList(res.data)
//     })
// }
// getBuySales();

// }, [])

//   return (
//     <div>Totalsales
//         {
//             buyList.map((buy, i)=>(
//                 <div key={i}>
//                     Name: {buy.itemName}<br/>
//                     unit: {buy.unit}<br/>
//                     sell amount:{buy.sellAmount}
//                 </div>
//             ))
//         }
//     </div>
//   )
// }

// export default Totalsales




//  "use client"
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function Totalsales({ buylist }) {
//   const [buyList, setBuyList] = useState(buylist || []);

//   useEffect(() => {
//     const getBuySales = async () => {
//       await axios.get('/api/buylist').then(res => {
//         console.log('sale', res.data);
//         setBuyList(res.data);
//       });
//     };
//     getBuySales();
//   }, []);

//   // Function to calculate total sell amount for each item
//   const calculateTotalAmount = () => {
//     let itemTotals = {};
//     let overallTotal = 0;

//     buyList.forEach((buy) => {
//       const itemName = buy.itemName;
//       const sellAmount = parseFloat(buy.sellAmount);

//       if (itemTotals[itemName]) {
//         itemTotals[itemName] += sellAmount;
//       } else {
//         itemTotals[itemName] = sellAmount;
//       }

//       overallTotal += sellAmount;
//     });

//     return { itemTotals, overallTotal };
//   };

//   const { itemTotals, overallTotal } = calculateTotalAmount();

//   return (
//     <div>
//       <h2>Total Sales</h2>
//       {Object.keys(itemTotals).map((itemName, i) => (
//         <div key={i}>
//           Name: {itemName} <br />
//           Total Sell Amount: {itemTotals[itemName]}
//         </div>
//       ))}
//       <div>
//         <strong>Overall Total:</strong> {overallTotal}
//       </div>
//     </div>
//   );
// }

// export default Totalsales;



 "use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Totalsales({ buylist }) {
    const [buyList, setBuyList] = useState(buylist || []);
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const getBuySales = async () => {
            await axios.get('/api/buylist').then(res => {
                console.log('sale', res.data);
                setBuyList(res.data);
            });
        };
        getBuySales();
    }, []);

    // Function to filter sales data for the current date
    const filterSalesByDate = () => {
        const currentDateFormatted = currentDate.toISOString().split('T')[0];

        const filteredSales = buyList.filter((buy) => {
            const buyDateFormatted = new Date(buy.timestamp).toISOString().split('T')[0];
            return buyDateFormatted === currentDateFormatted;
        });

        return filteredSales;
    };

    const filteredSales = filterSalesByDate();

    // Function to calculate total sell amount for each item
    const calculateTotalAmount = () => {
        let itemTotals = {};
        let overallTotal = 0;

        filteredSales.forEach((buy) => {
            const itemName = buy.itemName;
            const sellAmount = parseFloat(buy.sellAmount);

            if (itemTotals[itemName]) {
                itemTotals[itemName].amount += sellAmount;
            } else {
                itemTotals[itemName] = {
                    amount: sellAmount,
                    category: buy.category, // Assuming 'category' is a property in your data
                    unit: buy.unit, // Assuming 'unit' is a property in your data
                };
            }

            overallTotal += sellAmount;
        });

        return { itemTotals, overallTotal };
    };

    const { itemTotals, overallTotal } = calculateTotalAmount();

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-md md:text-2xl font-semibold mb-2 md:mb-4 text-center mx-auto mt-4 bg-green-500 max-w-md text-green-100 p-3 rounded-md">
                Total Sales on {currentDate.toDateString()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {Object.keys(itemTotals).map((itemName, i) => (
                    <div
                        key={i}
                        className="bg-green-200 p-4 shadow-md rounded-md mb-4"
                    >
                        <p className="text-lg font-semibold mb-2">Name: {itemName}</p>
                        <p className="text-lg font-semibold mb-2">Category: {itemTotals[itemName].category}</p>
                        <p className="text-lg font-semibold mb-2">Unit: {itemTotals[itemName].unit}</p>
                        <p>Total Sell Amount: {itemTotals[itemName].amount}</p>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <strong className="text-xl">Overall Total:</strong> {overallTotal}
            </div>
        </div>
    );
}

export default Totalsales;
