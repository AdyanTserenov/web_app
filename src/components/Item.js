import React, {Component} from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }
        this.findUserById = this.findUserById.bind(this)
        this.findUserById(this.props.item.created_by)
    }
    render() {
        return (this.state.user !== undefined &&
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

    findUserById(creator_id) {
        if (creator_id !== undefined) {
            let config = {
                headers: {
                    Authorization: `Bearer ${localStorage.auth_token}`
                }
            }
            axios.get(`https://api.dev.kodlmsh.ru/api/users/authuser/${creator_id}`, config)
                .then((response) => {
                    response.data = {
                        id: response.data.id,
                        first_name: response.data.first_name,
                        last_name: response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number,
                        img: "no-avatar.webp",
                        feedback: 0,
                        rating: 0,
                        confirmed: "yes"
                    }
                    this.setState({user: response.data})
                })
                .catch(function (error) {
                    console.log(error.response)
                })
        }
    }
}

export default Item
