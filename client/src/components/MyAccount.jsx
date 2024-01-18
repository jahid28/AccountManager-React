import React, { useEffect, useState } from "react";
// useState
import axios from "axios";

import Cookies from "js-cookie";
// useEffect
import { ToastContainer, toast } from "react-toastify";

const MyAccount = () => {
  const [cookieValue, setCookieValue] = useState(Cookies.get("email"));
  const [arr, setArr] = useState([]);

  const [formData, setFormData] = useState({
    email: cookieValue,
    account_num: "",
    pin: "",
    ifsc_code: "",
    web_link: "",
  });

  const getAccDetails = async (e) => {
    // e.preventDefault();
    // console.log('llllllllll')
    try {
      await axios
        .post(`${import.meta.env.VITE_APP_SERVER_URL}/getfromaccount`, {
          cookieValue,
        })
        .then((res) => {
          if (res.data == "fail") {
            toast.error("Somethig went wrong!");
          } else {
            setArr(res.data);
          }
        })
        .catch((e) => {});
    } catch (e) {}
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${import.meta.env.VITE_APP_SERVER_URL}/addtoaccount`, {
          formData,
        })
        .then((res) => {
          if (res.data == "success") {
            toast.success("Successfully Added");
            window.location.reload();
          } else {
            toast.error("Somethig went wrong!");
          }
        })
        .catch((e) => {
          toast.error("Somethig went wrong!");
        });
    } catch (e) {
      toast.error("Somethig went wrong!");
    }
  };

  const del = async (_id) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_APP_SERVER_URL}/delfromaccount`, {
          _id,
        })
        .then((res) => {
          if (res.data == "deleted") {
            toast.success("Successfully Deleted");
            window.location.reload();
          } else {
            console.log("ppp");
            toast.error("Somethig went wrong!");
          }
        })
        .catch((e) => {
          toast.error("Somethig went wrong!");
        });
    } catch (e) {
      toast.error("Somethig went wrong!");
    }
  };

  useEffect(() => {
    getAccDetails();
  }, [cookieValue]);

  const logOut = () => {
    // setProgress(100)
    Cookies.remove("email");
  };

  return (
    <div className="b mt-[10vh]">
      <div className="flex">
        <h2 className="text-5xl font-bold ml-2">Account Page</h2>

        <button
          onClick={logOut}
          className="ml-auto mr-3  text-gray-700 bg-gray-300 border-0 py-0 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
        >
          Log Out
        </button>
      </div>

      <div className="ml-2 mb-10 mt-10 w-[100vw]">
        <form
          className="grid place-items-center"
          method="/signup"
          action="POST"
          onSubmit={submit}
        >
          <h2 className="text-3xl mb-5">Add a new account's details :</h2>
          <input
            value={formData.account_num}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
            required
            name="account_num"
            type="text"
            className="border-b-2 border-black w-[20vw] text-xl mb-8"
            placeholder="Account No."
          />

          <input
            value={formData.ifsc_code}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
            required
            name="ifsc_code"
            type="text"
            className="border-b-2 border-black w-[20vw] text-xl mb-8"
            placeholder="IFSC Code"
          />

          <input
            value={formData.pin}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
            required
            name="pin"
            type="text"
            className="border-b-2 border-black w-[20vw] text-xl mb-8"
            placeholder="Pin Code"
          />

          <input
            value={formData.web_link}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
            required
            name="web_link"
            type="text"
            className="border-b-2 border-black w-[20vw] text-xl mb-8"
            placeholder="Website Link"
          />

          <button type="submit" className=" bg-black text-white p-2 px-5">
            Add
          </button>
        </form>
      </div>

      <hr />

      <div className="ml-2">
        <h2 className="text-3xl mb-5">All account's details :</h2>

        {arr.length != 0 ? (
          <div>
            {arr.map((e) => (
              <div className="my-4">
                {/* <p className="text-sm text-gray-500">~{e.account_num.split("@")[0]}</p> */}
                <div className="flex ">
                  <div>
                    <p className="text-xl mb-2">
                      Account No. : {e.account_num}
                      <button
                        onClick={() => {
                          navigator.clipboard
                            .writeText(e.account_num)
                            .then(() => {
                              toast.success("Copied!");
                            })
                            .catch((err) => {});
                        }}
                        className="text-xl bg-gray-400 rounded-lg px-1 ml-4"
                      >
                        Copy
                      </button>
                    </p>

                    <p className="text-xl mb-2 ">IFSC Code : {e.ifsc_code}
                    <button
                        onClick={() => {
                          navigator.clipboard
                            .writeText(e.ifsc_code)
                            .then(() => {
                              toast.success("Copied!");
                            })
                            .catch((err) => {});
                        }}
                        className="text-xl bg-gray-400 rounded-lg px-1 ml-4"
                      >
                        Copy
                      </button>
                    </p>

                    <p className="text-xl mb-2">Pin : {e.pin}</p>

                    <p className="text-xl mb-2">Website Link : {e.web_link}
                    <button
                        onClick={() => {
                          navigator.clipboard
                            .writeText(e.web_link)
                            .then(() => {
                              toast.success("Copied!");
                            })
                            .catch((err) => {});
                        }}
                        className="text-xl bg-gray-400 rounded-lg px-1 ml-4"
                      >
                        Copy
                      </button>
                    </p>
                  </div>
                  <div className="ml-auto mr-5">
                    <i
                      onClick={() => {
                        del(e._id);
                      }}
                      className="fa-solid fa-trash text-4xl cursor-pointer"
                    ></i>
                  </div>
                </div>
                <hr className="border-gray-500" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-2xl font-semibold text-gray-500">
            No account detail yet{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
