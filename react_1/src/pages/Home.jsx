import { Outlet } from "react-router-dom";
function index() {
    return (
        <div>
            <div>首页</div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
export default index