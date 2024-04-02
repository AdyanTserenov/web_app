import React, { Component } from "react";

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Все"
                },
                {
                    key: "repair",
                    name: "Автосервис"
                },
                {
                    key: "farm",
                    name: "Сельское хозяйство"
                },
                {
                    key: "building",
                    name: "Строительство"
                },
                {
                    key: "renovation",
                    name: "Ремонт квартир"
                },
                {
                    key: "other",
                    name: "Прочее"
                }
            ]
        }
    }

    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}
