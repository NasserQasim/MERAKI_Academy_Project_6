import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate, useEffect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducer/login/index";

toast.configure();

const Subcriptions = () => {

  const navigate = useNavigate();

  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });

  const [isallSubscriptVideos, setisallSubscriptVideos] = useState(false);
  const [allSubscriptVideos, setallSubscriptVideos] = useState([]);

  const getAllvideossubscripes = () => {
    axios
      .get("https://localhost:5000/subscription/mySubsciption", {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        setallSubscriptVideos(response.data.results);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  const removeFromMySubscription = (id) => {
    axios
      .delete(`http://localhost:5000/subscription/delete/${id}`, {
        headers: {
          Authorization: `Basic ${state.token}`,
        },
      })
      .then((response) => {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  useEffect(() => {
    getAllvideossubscripes();
  }, [isallSubscriptVideos]);

  return <></>;
};

export default Subcriptions;
