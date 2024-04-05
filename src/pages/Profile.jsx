import { useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { PasswordInput } from "@/components/ui/passwordInput";
const Profile=()=>{
    const [mobileNumber, setMobileNumber] = useState('1234567899');
    const [email, setEmail] = useState('Swiftrails@gmail.com');
    const [password, setPassword] = useState('');
    const[name,setName]=useState('Swif');
    const[lname,setlName]=useState('trails');
    const[add,setAdd]=useState("United States");
        const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };
    const handleMobileEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const handleNameChange = (e) => {
        setName(e.target.value);
      };
      const handleAddChange = (e) => {
        setAdd(e.target.value);
      };
      const handleLnameChange = (e) => {
        setlName(e.target.value);
      };
    return(
        
        
        
        <div className="m-10">
        <Card className="p-5">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
           {/* <CardDescription>Find your next destination</CardDescription>*/}
          </CardHeader>

          <CardContent>
            <form >
              <div className="grid w-full items-center gap-8 mt-7">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="Name" className="font-semibold">
                      First Name
                    </label>
                    <input
                      
                      onChange={handleNameChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      value={name}
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="Name" className="font-semibold">
                      Last Name
                    </label>
                    <input
                      
                      onChange={handleLnameChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      value={lname}
                      placeholder="Enter your Name"
                    />
                  </div>
                  
                  
                 
                 
                </div>
                <div className="flex justify-between gap-10">
                <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="mobilenumber" className="font-semibold">
                      Mobile Number
                    </label>
                    <input
                      onChange={handleMobileNumberChange}
                      value={mobileNumber}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      
                      placeholder="Enter your Mobile Number"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                  <label htmlFor="Email" className="font-semibold">
                      Email
                    </label>
                    <input
                      onChange={handleMobileEmailChange}
                      type="email"
                      value={email}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      
                      placeholder="Enter your Email Address"
                    />
                  </div>
                 
                  
                </div>
               


                <div className="flex justify-between gap-10">
                <div className="flex flex-col space-y-1.5 w-[50%]" >
                  <label htmlFor="password" className="font-semibold">
                      Password
                    </label>
                  <PasswordInput
                      id="password"
                      value={password}
                      placeholder="enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-1.5 w-[50%]" >
                    <label htmlFor="Email" className="font-semibold">
                      Address
                    </label>
                    <input
                      onChange={handleAddChange}
                      type="text"
                       value={add}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      
                      placeholder="Enter your  Address"
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-10">
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="date" className="font-semibold">
                      Date of Birth
                    </label>
                    <input
                      id="date"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      type="date"
                    />
                  </div> 
                </div>
                <div className="flex flex-col space-y-1.5">
                  <button
                    type="submit"
                    className="bg-[#5a3970] hover:bg-[#482e5a] font-medium border-2 border-transparent hover:border-[#7e529e] shadow-md transition text-white p-2 rounded"
                  >
                    
                   Update
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
    )
}
export default Profile;