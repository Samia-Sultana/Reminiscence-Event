import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ViewOrder = () => {
    const [orders, setorders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/getAllOrder')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setorders(data);
            })
    }, [])

    const handleEditStatus = (order) => {
        const selectTag = document.getElementById(`${order._id}`);
        const newStatus = selectTag.value;
        const newOrder = {...order};
        delete newOrder._id;
        newOrder.status = newStatus;
        fetch(`http://localhost:4200/editStatus/${order._id}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    const setSelected = (orderStatus,optionValue) =>{
        console.log('clicked');
        console.log(orderStatus,optionValue);
        if(orderStatus == optionValue){
            return true;
        }
        else{
            return false;
        }
    }

    return (
        <div className="manage-product">
            <div className="heading">
                <h1>Manage order</h1>
            </div>
            <div className="table-container">
                <table class="table table-borderless serviceTable">
                    <thead class="thead">
                        <tr className="tr">
                            <th scope="col">Client Email</th>
                            <th scope="col">Event</th>
                            <th scope="col">Booking Date</th>
                            <th scope="col">Event Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => (
                                <tr key={index} className="tr">
                                    <td>{order.clientEmail}</td>
                                    <td>{order.event}</td>
                                    <td>{order.orderTime}</td>
                                    <td>2021-12-30</td>
                                    <td>
                                        {
                                            <form>
                                            <select className="form-select status" id={order._id} onChange={() =>{ handleEditStatus(order) }} aria-label="Default select example">
                                                <option value="Ready" selected = {setSelected(order.status,"Ready")}>Ready</option>
                                                <option value="Working" selected = {setSelected(order.status,"Working")}>Working</option>
                                                <option value="Pending" selected = {setSelected(order.status,"Pending")}>Pending</option>
                                                <option value="Done" selected = {setSelected(order.status,"Done")}>Done</option>
                                            </select>
                                        </form>
                                        }
                                        
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewOrder;