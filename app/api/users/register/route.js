import { NextResponse } from "next/server"


//when a POST is made to this adress "localhost/api/users/register" this func will run
export async function POST(req) {
  
  //destruct email and password from body
  const { email , password } = await req.json()

  if(!email || !password ) {
    return NextResponse.json({ message: "Please enter an email and a password" }, { status: 400 })
  }
}