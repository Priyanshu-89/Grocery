"use server"

import Dbconnect from "@/app/mongodb/DbConnect"
import User from "@/app/mongodb/models/user";

// export async function signupAction(formData){
export default async function signupAction(formData) {
    try {
        await Dbconnect();

        const existiguser = await User.findOne({ email: formData.email });

        if (existiguser) {
            return { success: false, message: 'user Exists' };
        }
        await User.create(formData);
        return { success: true, message: "Signup success" }

    } catch (error) {
        return { success: false, message: "signup failed" }
    }




}
