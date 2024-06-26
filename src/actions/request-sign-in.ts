"use server"
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

type FormState = {
	error: string;
};
  
export async function requestSignIn(formState:FormState,formData: FormData) {
	try{
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		await signIn("credentials", {email,password, redirect:false});
	} catch(error){
		return {error: "Invalid login"};
	}

	redirect('/');
}
