import React, { useEffect, useState ,useRef} from "react";
import Validation from "./Validation";


const Admission = ({ submitForm }) => {
  //creating Variable to keep track of Current Month
  var da = new Date();
  var mont="MONTHS";
  switch (da.getMonth()) {
    case 0:
      mont = "JANUARY";
      break;
    case 1:
      mont = "FEBRUARY";
      break;
    case 2:
      mont = "MARCH";
      break;
    case 3:
      mont = "APRIL";
      break;
    case 4:
      mont = "MAY";
      break;
    case 5:
      mont = "JUNE";
      break;
    case 6:
      mont = "JULY";
      break;
    case 7:
      mont = "AUGUST";
      break;
    case 8:
      mont = "SEPTEMBER";
      break;
    case 9:
      mont = "OCTOBER";
      break;
    case 10:
      mont = "NOVEMBER";
      break;
    case 11:
      mont = "DECEMBER";
      break;
    default:
      mont = "";
      break;
  }
  //using state variable to keep the data of user
  const [values, setValues] = useState({
    name: "",
    age: "",
    address: "",
    timing: "",
    month: mont,
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setdataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  //Backend Code to validate and payment
  const CompletePayment = async (event) => {
    event.preventDefault();

 //Destructing of object
    const { name, age, address, email, timing, month } = values;
    //USing firebase database to store the data
    if (name && age > 18 && age < 65 && address && email && timing && month) {
      const res = fetch(
        "https://reactyogadata-default-rtdb.firebaseio.com/userdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application.json",
          },
          body: JSON.stringify({
            name,
            age,
            address,
            email,
            timing,
            month,
          }),
        }
      );

      if (res) {
        //Validation of form
        setErrors(Validation(values));
        setdataIsCorrect(true);
      }
    } else {
      //To handle the error
      setErrors(Validation(values));
    }
  };
  const temp=useRef();
const fun=()=>{
  if (Object.keys(errors).lengths === 0 && dataIsCorrect===true) {
    submitForm(true);
  }

}
temp.current=fun;
  useEffect(() => {
    temp.current();
  }, [errors]);

  return (
    //CREATING FORM
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h1 className="heading">YOGA CLASSES</h1>
          <h2 className="title"> ADMISSION FORM</h2>
        </div>
        <form className="form-wrapper">
          <div className="months">
            <label className="label">MONTH</label>
            <p
              className="month"
              name="month"
              value={mont}
              onChange={handleChange}
            >
              {mont}
            </p>
          </div>
          <div className="batch">
            <label className="label">BATCH</label>
            <br />
            <select
              className="select"
              name="timing"
              value={values.timing}
              onChange={handleChange}
            >
              <option>--SELECT TIMING--</option>
              <option>6 a.m - 7 a.m</option>
              <option>7 a.m - 8 a.m</option>
              <option>8 a.m - 9 a.m</option>
              <option>5 p.m - 6 p.m</option>
            </select>
            {errors.timing && <p className="error">{errors.timing}</p>}
          </div>

          <div className="age">
            <label className="label">AGE</label>
            <input
              className="input"
              type="Number"
              name="age"
              value={values.age}
              onChange={handleChange}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>

          <div className="name">
            <label className="label">NAME</label>
            <input
              className="input"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="address">
            <label className="label">ADDERSS</label>
            <input
              className="input"
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
          <div className="email">
            <label className="label">EMAIL</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <button className="register" onClick={CompletePayment}>
              {" "}
              PAY 500 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
