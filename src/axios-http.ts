import axios from "axios";
import { ApiPath } from "./router/PathAPI";
export default axios.create({
    baseURL:ApiPath,
    timeout:4000,

})