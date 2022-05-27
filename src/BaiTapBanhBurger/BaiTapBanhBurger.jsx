import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addBreadMidAction} from "../Redux/actions/addBreadMidAction";
import "./BaiTapBanhBurger.css";
export default function BaiTapBanhBurger() {
  const { burger, menu, total } = useSelector(
    (rootReducer) => rootReducer.BurgerReducer
  );
  const dispatch = useDispatch();
  const renderBreadMid = () => {
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={index} className={propsBurger}></div>);
      }
      return breadMid;
    });
  };
  const renderMenu = () => {
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button className="btn-success mr-3" onClick={()=>{
              dispatch(addBreadMidAction(propsMenu,1))
            }}>+</button>
            {burger[propsMenu]}
            <button className="btn-danger ml-3" onClick={()=>{
              dispatch(addBreadMidAction(propsMenu,-1))
            }}>-</button>
          </td>
          <td>{price}</td>
          <td>{price * burger[propsMenu]}</td>
        </tr>
      );
    });
  };
  return (
    <div className="container ">
      <h3 className="display-4 text-success text-center font-weight-bold mb-5">
        Bài tập Burger CyberSoft
      </h3>
      <div className="row">
        <div className="col-7">
          <h3 className="text-center text-danger">Bánh Burger Của Bạn</h3>
          <div className="breadTop"></div>
          {renderBreadMid()}
          <div className="breadBottom"></div>
        </div>
        <div className="col-5">
          <h3 className="text-center text-success">Chọn thức ăn </h3>
          <table className="table">
            <thead>
              <tr>
                <th>Thức Ăn</th>
                <th></th>
                <th>Đơn Giá</th>
                <th>Thành Tiền</th>
              </tr>
              {renderMenu()}
            </thead>
            <tfoot>
              <tr>
                <td colSpan="2"></td>
                <td>Tổng Cộng</td>
                <td>{total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
