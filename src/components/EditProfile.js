import React, {Component} from 'react';
import { FaRegWindowClose } from "react-icons/fa";

export class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: this.props.user.id,
                first_name: this.props.user.first_name,
                last_name: this.props.user.last_name,
                email: this.props.user.email,
                phone: this.props.user.phone,
                img: this.props.user.img,
                feedback: this.props.user.feedback,
                rating: this.props.user.rating,
                confirmed: this.props.user.confirmed
        }
    }
    render() {
        return (
            <div className="full-item">
                <div>
                    <FaRegWindowClose className="close" onClick={() => this.props.onShowItem(this.props.item)}/>
                    <form>
                        <div>Имя:</div>
                        <input placeholder="Имя: " onChange={(e) => this.setState({firstName: e.target.value})}/>
                        <br/><br/>

                        <div>Фамилия:</div>
                        <input placeholder="Фамилия: " onChange={(e) => this.setState({lastName: e.target.value})}/>
                        <br/><br/>

                        <div>Фото профиля:</div>
                        <input type="file" accept="image/*" onChange={(e) => this.setState({img: e.target.value})}/>
                        <br/><br/>

                        <div>Телефон:</div>
                        <input placeholder="Телефон: " onChange={(e) => this.setState({phone: e.target.value})}/>
                        <div className="button" onClick={() => {
                            this.props.onShowItem(this.props.item)
                            this.props.editUser({
                                id: this.state.id,
                                firstName: this.state.first_name,
                                lastName: this.state.last_name,
                                email: this.state.email,
                                phone: this.state.phone,
                                img: this.state.img,
                                feedback: this.state.feedback,
                                rating: this.state.rating,
                                confirmed: this.state.confirmed
                            })
                        }}>Сохранить
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditProfile;
