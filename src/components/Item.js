import React, {Component, useState} from "react";
import { FaStar } from "react-icons/fa";

export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.findUserById(this.props.item.id)
        }
    }
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.state.user.img} onClick={() => this.props.onShowItem(this.props.item)}/>
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
                <p>Рейтинг: <FaStar className="rating"/>{this.state.user.rating}</p>
                <b>{this.props.item.price}₽</b>
            </div>
        )
    }
}

export default Item
