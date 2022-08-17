import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div id="profile">
      {user ? (
        <div id="accountInfo">
          <h3>Account Info:</h3>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : null}

      <div id="myOrders">
        <h3>My Orders:</h3>
        {user?.orders?.map((order) => {
          return (
            <div key={order.id}>
              <h4>Order #{order.id}</h4>
              <div>
                {order?.product_orders &&
                  order.product_orders.map((productOrder) => {
                    return (
                      <div key={productOrder.id}>
                        <p>
                          {productOrder.products.name} x{productOrder.quantity}
                        </p>
                      </div>
                    );
                  })}
              </div>
              <p>Total: ${order.total}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
