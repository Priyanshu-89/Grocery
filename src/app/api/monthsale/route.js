
import { NextResponse } from 'next/server';
import Dbconnect from '@/app/mongodb/DbConnect';
import GroceryItem from '@/app/mongodb/buyItemSchema';

export async function GET(request) {
  await Dbconnect();
  
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  try {
    const monthSales = await GroceryItem.find({
      timestamp: {
        $gte: new Date(currentYear, currentMonth, 1),
        $lt: new Date(currentYear, currentMonth + 1, 0, 23, 59, 59, 999),
      },
    });

    return NextResponse.json(monthSales);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}
