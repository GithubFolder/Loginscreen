import React, { useState } from "react";
import { Input, RadioButton } from "@progress/kendo-react-inputs";
import './LoginForm.css';


function Form2(){
  const [success, setSuccess] = React.useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const [selectedValue, setSelectedValue] = useState("Internal Appraisal");
  const handleChange = React.useCallback(
    (e) => {
      setSelectedValue(e.value);
    },
    [setSelectedValue]
  );

  return (

    <div className="container">
    <div className="leftcontainer">
          <div
             style={{
                paddingTop:"150px",
                }}
            >
               
              <form
                 onSubmit={handleSubmit}
                 style={{ 
                    paddingTop: "30px", 
                    marginLeft: "10px", 
                    marginRight: "40%" 
                }}
                 >
                 <fieldset
                 style={{
                    height:"350px",
                    width:"550px",
                 }}
                 >

                 <div>
                    <h1>Login</h1>&nbsp;
                </div>
           
                  <div>
                     <label>Select:</label>
                    </div>


                  <div>
                      <RadioButton
                           name="Internal Appraisal"
                           value="Internal Appraisal"
                           checked={selectedValue === "Internal Appraisal"}
                           label="Internal Appraisal"
                           onChange={handleChange}
                        />&nbsp;&nbsp;


        
                      <RadioButton
                          name="External Appraisal"
                          value="External Appraisal"
                          checked={selectedValue === "External Appraisal"}
                           label="External Appraisal"
                          onChange={handleChange}
                        />
              
                    </div>

               
                       {selectedValue === "Internal Appraisal" ?(

                    <div>

                      <div className="mb-10">
                          <Input
                              placeholder="User Id"
                               style={{
                                  width: "550px",
                                  marginTop:"10px",
                                  marginBottom:"10px"
                                }}
                               label="User Id"
                               minLength={2}
                               required={true}
                            />
                        </div>

                       <div className="mb-10">
                          <Input
                              placeholder="Password"
                              type="password"
                                 style={{
                                      width: "550px",
                                      marginTop:"10px",
                                      marginBottom:"10px"
                                    }}
                                label="password"
                                minLength={6}
                                maxLength={18}
                                required={true}
                            />
                        </div>

                        <div>
                           <Input
                               type="submit"
                               className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                              style={{ marginTop: "10px",width:"550px" }}
                              value="Submit"
                            />
                        </div>

                    </div> 
      

                    ):(

                            <div className="mb-10">
                                <Input
                                    type="phone number"
                                    style={{
                                        width: "550px",
                                        marginTop:"10px",
                                        marginBottom:"10px"
                                    }}
                                    label="phone number"
                                    placeholder="Phone number"
                                    minLength={6}
                                    maxLength={18}
                                   required={true}
                                />
                                <br/>
                                <label>
                                    <a href="/">Get otp</a>
                                </label>

                                <div>
                                  <Input
                                     type="submit"

                                      className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                                      style={{ marginTop: "10px",width:"550px" }}
                                      value="Submit"
                                    />
                                </div>


                            </div>

                        )
                    }

                   {success && (
                      <div
                            className="alert alert-success"
                       
                        >  
                         Successfully Submitted!
                        </div>
                    )}
          </fieldset>
      </form>

      </div>

      </div>

      <div className="rightcontainer">
      <img 
      style={{
       marginLeft:"100px",
     paddingTop:"150px"

      }}

       src="https://www.sundaramhome.in/assets/img/sundaram-way.png" alt=""/>
      </div>
    </div>
  )
}

export default Form2;
