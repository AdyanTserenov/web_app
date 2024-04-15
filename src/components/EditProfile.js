import React, {Component} from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import axios from "axios";

export class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data: "",
                first_name: "",
                last_name: "",
                img: "",
                phone: ""
        }
        this.loadMe = this.loadMe.bind(this)
        this.loadMe()
        this.first_name = this.state.data.first_name
        this.last_name = this.state.data.last_name
        this.img = this.state.data.img
        this.phone = this.state.data.phone
    }
    render() {
        return (
            <div className="full-item">
                <div>
                    <FaRegWindowClose className="close" onClick={() => this.props.onShowItem(this.props.item)}/>
                    <form>
                        <div>Имя:</div>
                        <input placeholder="Имя: " onChange={(e) => this.setState({first_name: e.target.value})}/>
                        <br/><br/>

                        <div>Фамилия:</div>
                        <input placeholder="Фамилия: " onChange={(e) => this.setState({last_name: e.target.value})}/>
                        <br/><br/>

                        <div>Фото профиля:</div>
                        <input type="file" accept="image/*" onChange={(e) => this.setState({img: e.target.value})}/>
                        <br/><br/>

                        <div>Телефон:</div>
                        <input placeholder="Телефон: " onChange={(e) => this.setState({phone: e.target.value})}/>
                        <div className="button" onClick={() => {
                            this.props.onShowItem(this.props.item)
                            let config = {
                                headers: {
                                    Authorization: `Bearer ${localStorage.auth_token}`
                                }
                            }

                            axios.patch("https://api.dev.kodlmsh.ru/api/users/me/", {
                                first_name: this.state.first_name,
                                last_name: this.state.last_name,
                                phone_number: this.state.phone,
                            }, config)
                                .then((access) => console.log(access.data.access))
                                .catch((refresh) => console.log(refresh));
                            this.loadMe()
                            window.location.reload()
                        }}>Сохранить
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    loadMe() {
        let data
        let config = {
            headers: {
                Authorization: `Bearer ${localStorage.auth_token}`
            }
        }
        axios.get("https://api.dev.kodlmsh.ru/api/users/me/", config)
            .then((response) => {
                data = {
                    id: response.data.id,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    phone: response.data.phone_number,
                    img: "no-avatar.webp",
                    feedback: "0",
                    rating: "0",
                    confirmed: "yes"
                }
                this.setState({data: data})
            })
    }
}

export default EditProfile;
