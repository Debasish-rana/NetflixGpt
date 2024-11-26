import React, { useState, useRef } from "react";
import { checkValidation } from "../utils/Fromvalidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bgImage } from "../utils/Constants";

const Loginpage = () => {
  const [signBtn, setSignBtn] = useState("Sign In");
  const [errorMassage, seterrorMassage] = useState(null);
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    //console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

    const massage = checkValidation(
      email.current.value,
      password.current.value,
      //name.current.value
    );

    seterrorMassage(massage);
    console.log(massage);

    if (massage) return;
    if (signBtn === "Sign Up") {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
updateProfile(user, {
  displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/152690128?s=400&u=e7db3d827930c5bbddb325e60b47a0558f4db6eb&v=4"
}).then(() => {
  // Profile updated!
  console.log(user);
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          //navigate("/Browser")
          alert("You are succesfully sign up your account")
}).catch((error) => {
  // An error occurred
  // ...
});
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMassage(errorCode + "-" + errorMessage);
        });
    } else if (signBtn === "Sign In") {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          updateProfile(user, {
            photoURL:
              "https://avatars.githubusercontent.com/u/152690128?s=400&u=e7db3d827930c5bbddb325e60b47a0558f4db6eb&v=4",
          })
            .then(() => {
              // Profile updated!
              //navigate("/Browser");
            })
            .catch((error) => {
              // An error occurred
              seterrorMassage(error.message);
            });
          console.log(user);
         // navigate("/Browser");
          alert("You are successfully Sign in your account")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
          seterrorMassage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={bgImage}
          alt="Background image"
          srcset=""
        />
      </div>

      <from
        className="absolute p-16 bg-black m-auto left-0 right-0 w-3/12 mt-52 bg-opacity-70 "
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <p className="text-3xl text-slate-50 my-4">{signBtn}</p>
        {signBtn === "Sign Up" ? (
          <input
            ref={name}
            type="text"
            placeholder="Enter user name"
            className="p-2 border-none w-full my-4 bg-slate-800 text-white rounded-lg"
          />
        ) : (
          <div></div>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Enter email"
          className="p-2 border-none w-full my-4 bg-slate-800 text-white rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-2 border-none w-full my-4 bg-slate-800 text-white rounded-lg"
        />
        <p className="text-red-600 font-bold">{errorMassage}</p>
        <button
          className="bg-red-600 my-4 w-full p-2 rounded-lg"
          onClick={handleClick}
        >
          {signBtn}
        </button>

        <p className="text-white flex justify-center">
          {signBtn === "Sign In"
            ? "If new to netflix Then"
            : "Already sign up then"}
          <span
            className="border-b-2 mx-2 hover:text-blue-700 cursor-pointer"
            onClick={() => {
              signBtn === "Sign In"
                ? setSignBtn("Sign Up")
                : setSignBtn("Sign In");
            }}
          >
            {signBtn === "Sign Up" ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </from>
    </div>
  );
};

export default Loginpage;
