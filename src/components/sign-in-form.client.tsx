"use client"

import { requestSignIn } from "@/actions/request-sign-in";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const initState = {error: ''};

export const SignInForm = () => {
	const [fstate,action] = useFormState(requestSignIn,initState); 

	useEffect(()=>{
		let {error} = fstate;
		if(error) alert(error);
	},[fstate])
	

	return (

		<form
			action={action}
		>
			<label>
				Email
				<input name="email" type="email" />
			</label>
			<br />
			<label>
				Password
				<input name="password" type="password" />
			</label>
			<br />
			<button>Sign In</button>
		</form>
	)
}