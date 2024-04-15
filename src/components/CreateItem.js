import React, {Component} from "react";

const options = [
    { value: "default", label: "Выберите категорию" },
    { value: "other", label: "Прочее" },
    { value: "repair", label: "Автосервис" },
    { value: "farm", label: "Сельское хозяйство" },
    { value: "building", label: "Строительство" },
    { value: "renovation", label: "Ремонт квартир" }
]
export class CreateItem extends Component {
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
        return (<div>
                <form className={"create-item"} ref={(el) => this.myForm = el}>
                    <h1>Создать новое объявление</h1>

                    <h3>Тип объявления:</h3>

                    <input type="radio" className="radio" name="type" value="Услуга"
                           onChange={(e) => this.setState({type: "S"})}/>
                    <label htmlFor="Услуга">Услуга</label> <br/>

                    <input type="radio" className="radio" name="type"
                           onChange={(e) => this.setState({type: "P"})}/>
                    <label htmlFor="Заказ">Заказ</label> <br/><br/>

                    <h3>Категория:</h3>

                    <input type="radio" className="radio" name="category"
                           onChange={(e) => this.setState({category: 1})}/>
                    <label>Автосервис</label> <br/>

                    <input type="radio" className="radio" name="category"
                           onChange={(e) => this.setState({category: 2})}/>
                    <label>Сельское хозяйство</label>

                    <input type="radio" className="radio" name="category"
                           onChange={(e) => this.setState({category: 3})}/>
                    <label>Строительство</label> <br/>

                    <input type="radio" className="radio" name="category"
                           onChange={(e) => this.setState({category: 4})}/>
                    <label>Ремонт квартир</label>

                    <input type="radio" className="radio" name="category"
                           onChange={(e) => this.setState({category: 5})}/>
                    <label>Прочее</label>
                    <br/><br/>

                    <h3>Описание:</h3>
                    <textarea type="file" placeholder="Введите описание товара: " accept="image/*"
                              onChange={(e) => this.setState({disc: e.target.value})}></textarea> <br/><br/>

                    <h3>Цена:</h3>
                    <input placeholder="Введите цену в рублях: " onChange={(e) => this.setState({price: e.target.value})}/>

                    <div className="button" onClick={() => {
                        this.myForm.reset()
                        this.props.addItem({
                            desc: this.state.disc,
                            price: this.state.price,
                            category: this.state.category,
                            type: this.state.type
                        })
                    }}>Добавить
                    </div>

                </form>
                <h1>Изменить существующие:</h1>
            </div>
        )
    }
}

export default CreateItem
