import React, { Component } from "react";
import {FaEdit, FaStar} from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export class MyItem extends Component {
    render() {
        return (<div className="my-item">
                <FaEdit className="edit-button" onClick={() => this.props.onShowItem(this.props.item)}/>
                <FaRegTrashAlt className="delete-button" onClick={() => this.props.deleteItem(this.props.item.id) }/>
                {this.props.item.type === "S" && (
                    <h1>Услуга</h1>
                )}
                {this.props.item.type !== "S" && (
                    <h1>Заказ</h1>
                )}
                <h3>{this.props.item.category === 'farm' && "Сельское хозяйство"}</h3>
                <h3>{this.props.item.category === 'renovation' && "Ремонт квартир"}</h3>
                <h3>{this.props.item.category === 'repair' && "Автосервис"}</h3>
                <h3>{this.props.item.category === 'building' && "Строительство"}</h3>
                <h3>{this.props.item.category === 'other' && "Прочее"}</h3>
                <p className="desk">{this.props.item.desc}</p>
                <b>{this.props.item.price}₽</b>
            </div>
        )
    }
}

export default MyItem
