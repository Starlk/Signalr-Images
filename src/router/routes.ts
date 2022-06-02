import UploadImages from "../views/UploadImages.vue";
import DowloandImages from "../views/DowloandImages.vue"
import  {RouteRecordRaw} from "vue-router";
const routes : RouteRecordRaw[] = [
    {
        path:"/",
        name:"uploadImages",
        component:UploadImages
    },
    {
        path:"/DowloandImages",
        name:"DowloandImages",
        component:DowloandImages
    }
]

export default routes