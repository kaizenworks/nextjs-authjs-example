import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
	Credentials({
		name: "Email",
		credentials: {
			email: { label: "Email", type: "email " },
			password: { label: "Password", type: "password" },
		},
		authorize: async (credentials) => {

			let {email,password} = credentials;

			if(email==process.env.ADMIN_EMAIL
				&& password==process.env.ADMIN_PASS) {
					return {
						id: '1',
						name: 'Admin'
					}
				}
			
			return null;
		},
	  }),
  ],
})