import React, {Component} from 'react';
import { FaRegWindowClose } from "react-icons/fa";

export class ShowMyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            category: "",
            disc: "",
            price: ""
        }
    }
    render() {
        return (
            <div className="full-item">
                <div>
                    <FaRegWindowClose className="close" onClick={() => this.props.onShowItem(this.props.item)}/>
                    <form className="edit-item" ref={(el) => this.myForm = el}>
                        <h3>Тип объявления:</h3>
                        <input type="radio" className="radio" name="type" value="Услуга"
                               onChange={(e) => this.setState({type: "S"})}/>
                        <label htmlFor="Услуга">Услуга</label> <br/>

                        <input type="radio" className="radio" name="type"
                               onChange={(e) => this.setState({type: "P"})}/>
                        <label htmlFor="Заказ">Заказ</label> <br/><br/>

                        <h3>Категория:</h3>
                        <input type="radio" className="radio" name="category"
                               onChange={(e) => this.setState({category: "repair"})}/>
                        <label>Автосервис</label> <br/>

                        <input type="radio" className="radio" name="category"
                               onChange={(e) => this.setState({category: "farm"})}/>
                        <label>Сельское хозяйство</label>

                        <input type="radio" className="radio" name="category"
                               onChange={(e) => this.setState({category: "building"})}/>
                        <label>Строительство</label> <br/>

                        <input type="radio" className="radio" name="category"
                               onChange={(e) => this.setState({category: "renovation"})}/>
                        <label>Ремонт квартир</label>

                        <input type="radio" className="radio" name="category"
                               onChange={(e) => this.setState({category: "other"})}/>
                        <label>Прочее</label>
                        <br/><br/>

                        <h3>Описание:</h3>
                        <textarea type="file" placeholder="Введите описание товара: " accept="image/*"
                                  onChange={(e) => this.setState({disc: e.target.value})}></textarea> <br/><br/>

                        <h3>Цена:</h3>
                        <input placeholder="Введите цену: " onChange={(e) => this.setState({price: e.target.value})}/>

                        <div className="button" onClick={() => {
                            this.myForm.reset()
                            this.props.editItem({
                                id: this.props.item.id,
                                created_by: this.props.item.created_by,
                                desc: this.state.disc,
                                price: this.state.price,
                                category: this.state.category,
                                type: this.state.type
                            })
                        }}>Изменить
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ShowMyItem;