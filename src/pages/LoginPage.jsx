import React, { useState, useEffect } from 'react';
import logo from "../assets/inventarioslogo.png";
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import axiosClient from '../configs/axiosClient';


export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const navegation = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navegation("/home");
    }
  }, [navegation]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = { email: username, password };
      const response = 200

      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkX3VzdWFyaW8iOjQ0LCJub21icmUiOiJtaWxsZXIiLCJyb2wiOiJhZG1pbmlzdHJhZG9yIn0sImlhdCI6MTcxNTY0ODY5NCwiZXhwIjoxNzE1NzM1MDk0fQ.Gz8CLzC_6NE5M0ym9ZWvKdHAW93tdFl6ZwHnl4dstlU');
      navegation("/home");


    } catch (error) {
      console.error('Error during login:', error);
      alert("Error al iniciar sesión");
    }
  };


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameFocus = () => {
    setUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    if (!username) {
      setUsernameFocused(false);
    }
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordFocused(false);
    }
  };

  const handleUsernameClick = () => {
    setUsernameFocused(true);
  };

  const handlePasswordClick = () => {
    setPasswordFocused(true);
  };

  return (
    <>

      <div className="flex w-full h-screen overflow-hidden">
        <div className='bg-[#fc6b32] w-[45%] h-auto flex justify-center items-center'>
          <img className='w-[85%] pt-32' src="carrito.svg" alt="" />
        </div>

        <div className="min-h-screen w-full  bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto scale-90 2xl:scale-100">
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#fc6b32] to-[#fc6b32]/85 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
            ></div>
            <div className="relative px-4 py-2 bg-white shadow-lg sm:rounded-3xl p-3 w-[450px] h-[550px]">
              <div className="max-w-[410px] mx-auto">
                <section className="gradient-form h-full text-black">
                  <div className="container h-full ">
                    <div className="flex h-full flex-wrap items-center justify-center dark:text-black">
                      <div className="w-full">
                        <div className="block rounded-lg">
                          <div className="g-0 lg:flex lg:flex-wrap">
                            <div className="px-4 md:px-0 lg:w-full">
                              <div className="md:mx-6 ">
                                <div className="text-center flex flex-col items-center">
                                  <img
                                    className="w-48"
                                    src={logo}
                                    alt="logo"
                                  />
                                  <h4 className="mb-4 mt-1 pb-1 text-xl font-semibold">
                                    Coordisoft SENA
                                  </h4>
                                </div>
                                <form onSubmit={handleSubmit}>
                                  <p className="mb-4">Por favor, ingrese a su cuenta</p>
                                  <div className="relative mb-4">
                                    <input
                                      type="text"
                                      className="peer block min-h-[auto] w-full rounded border border-cyan-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                      id="exampleFormControlInput1"
                                      placeholder=" "
                                      value={username}
                                      onChange={handleUsernameChange}
                                      onFocus={handleUsernameFocus}
                                      onBlur={handleUsernameBlur}
                                      onClick={handleUsernameClick}
                                    />
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className={`pointer-events-none absolute top-0 bg-white left-3 max-w-[90%] mt-1 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:text-primary ${username || usernameFocused ? 'transform translate-y-[-16px] text-sm text-black' : ''}`}
                                    >
                                      Username
                                    </label>
                                  </div>
                                  <div className="relative mb-4">
                                    <input
                                      type={showPassword ? "text" : "password"}
                                      className="peer block min-h-[auto] w-full rounded border border-cyan-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                      id="exampleFormControlInput11"
                                      placeholder=" "
                                      value={password}
                                      onChange={handlePasswordChange}
                                      onFocus={handlePasswordFocus}
                                      onBlur={handlePasswordBlur}
                                      onClick={handlePasswordClick}
                                    />
                                    <button
                                      onClick={togglePasswordVisibility}
                                      type="button"
                                      className="absolute inset-y-0 right-3 flex items-center"
                                    >
                                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                    <label
                                      htmlFor="exampleFormControlInput11"
                                      className={`pointer-events-none absolute top-0 bg-white left-3 max-w-[90%] mt-1 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:text-primary ${password || passwordFocused ? 'transform translate-y-[-16px] text-sm text-black' : ''}`}
                                    >
                                      Password
                                    </label>
                                  </div>
                                  <div className="mb-3 pb-1 pt-1 text-center">
                                    <button
                                      onClick={handleSubmit}
                                      className="mb-3 bg-gradient-to-r from-[#fc6b32] to-[#fc6b32]/85 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                                      type="submit"
                                    >
                                      Log in
                                    </button>
                                    <a href="#!">¿Has olvidado tu contraseña?</a>
                                  </div>


                                  <div className="flex items-center justify-center w-full pb-6">
                                    <p className="mb-0 flex">¿No tienes una cuenta?</p>
                                    <div class="w-full mx-auto flex justify-end">
                                      <button class="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                        <span>Continue with Google</span>
                                      </button>                                    </div>
                                  </div>




                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};