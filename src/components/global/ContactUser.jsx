import { useState } from "react";
import { Button } from "../ui/button";

const ContactUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const {name, value} =  e.target;
    if (name === 'username') {
        setUsername(value);
    } else if (name === 'email') {
        setEmail(value);
    } else {
        setMessage(value);
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log([`Username is: ${username}, Email id is: ${email} and message is ${message}`]);
  }
 
  return (
  
    <section id="Contact" className="w-full py-12 md:py-24 lg:py-28 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
              I'm available for freelance work. Lets work together and build
              something amazing.
            </p>
            <div className="m-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  onChange={handleChange}
                  value={username}
                  className="max-w-lg flex-1 px-2 py-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email-ID"
                  name= "email"
                  onChange={handleChange}
                  value={email}
                  className= "max-w-lg flex-1 px-2 py-2 rounded"
                />
                <textarea
                  name= "message"
                  onChange={handleChange}
                  value={message}
                  placeholder= "Enter Your Message"
                  className= "px-2 py-2 rounded"
                />
                <Button variant={"default"}>Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ContactUser;
