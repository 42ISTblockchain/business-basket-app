import {Link, Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../../../../helper/http";
import {jobApplicationDatas} from "../../../../slice/JobApplicationListSlice";

export default function Applications() {
    return <Outlet />
}
