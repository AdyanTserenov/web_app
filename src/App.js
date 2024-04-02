import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation";
import Items from "./components/Items";
import {Categories} from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Confirm from "./components/Confirm";
import NeedToConfirm from "./components/NeedToConfirm";
import MyItems from "./components/MyItems";
import Userfront from "@userfront/toolkit/react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Reset from "./components/Reset";
import RequireAuth from "./components/Require";
import ShowMyItem from "./components/ShowMyItem";
import {Profile} from "./components/Profile";
import EditProfile from "./components/EditProfile";
import CreateItem from "./components/CreateItem";

Userfront.init("wbmxv9mn");
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [
                {
                    id: 1,
                    first_name  : "Геннадий",
                    last_name: "Петров",
                    email: "petrov@mail.ru",
                    phone: "8(800)555-35-31",
                    img: "avatar_1.jpg",
                    feedback: "193",
                    rating: "4.98",
                    confirmed: "yes"
                },
                {
                    id: 2,
                    first_name  : "Михаил",
                    last_name: "Иванов",
                    email: "ivanov@mail.ru",
                    phone: "8(800)555-35-32",
                    img: "avatar_2.jpg",
                    feedback: "85",
                    rating: "4.6",
                    confirmed: "yes"
                },
                {
                    id: 3,
                    first_name  : "Андрей",
                    last_name: "Сидоров",
                    email: "sidorov@mail.ru",
                    phone: "8(800)555-35-35",
                    img: "avatar_3.jpg",
                    feedback: "207",
                    rating: "4.95",
                    confirmed: "yes"
                },
                {
                    id: 4,
                    first_name  : "Николай",
                    last_name: "Архипов",
                    email: "arhipov@mail.ru",
                    phone: "8(800)555-35-35",
                    img: "avatar_4.webp",
                    feedback: "125",
                    rating: "5",
                    confirmed: "no"
                },
                {
                    id: 5,
                    first_name  : "Леонид",
                    last_name: "Манжиков",
                    email: "lmanzhikov@mail.ru",
                    phone: "8(927)590-13-33",
                    img: "avatar_5.png",
                    feedback: "0",
                    rating: "1",
                    confirmed: "no"
                }
            ],
            currItems: [],
            items: [
                {
                    id: 1,
                    created_by: 1,
                    desc: "Химическая обработка посева",
                    price: "50.000",
                    category: "farm",
                    type: "S"
                },
                {
                    id: 2,
                    created_by: 2,
                    desc: "Любые виды электромонтажных работ",
                    price: "от 10.000",
                    category: "renovation",
                    type: "S"
                },
                {
                    id: 3,
                    created_by: 3,
                    desc: "Ремонтые работы любой сложности",
                    price: "от 5.000",
                    category: "repair",
                    type: "S"
                },
                {
                    id: 4,
                    created_by: 4,
                    desc: "Уложу плитку на Вашем участке",
                    price: "10.000",
                    category: "building",
                    type: "S"
                },
                {
                    id: 5,
                    created_by: 5,
                    desc: "Активно ищу работу",
                    price: "500",
                    category: "other",
                    type: "S"
                }
            ],
            showFullItem : false,
            fullItem: {},
            currUser: 1
        }
        this.state.currItems = this.state.items
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        this.findUserById = this.findUserById.bind(this)
        this.editUser = this.editUser.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.editItem = this.editItem.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Presentation />} />
                        <Route path="registration" element={<Registration />} />
                        <Route path="login" element={<Login />} />
                        <Route path="reset" element={<Reset />} />
                        <Route path="need-to-confirm" element={<NeedToConfirm />} />
                        <Route path="confirm" element={<Confirm />} />
                        <Route path="table" element={<div>
                            <Categories chooseCategory={this.chooseCategory}/>
                            <Items onShowItem={this.onShowItem} items={this.state.currItems} findUserById={this.findUserById}/>
                            {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} findUserById={this.findUserById}/> }
                        </div>} />
                        <Route path="dashboard/my" element={<RequireAuth>
                            <div>
                                <CreateItem addItem={this.addItem}/>
                                <MyItems deleteItem={this.deleteItem} onShowItem={this.onShowItem} items={this.state.items} user={this.findUserById(this.state.currUser)}/>
                                {this.state.showFullItem && <ShowMyItem editItem={this.editItem} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                            </div>
                        </RequireAuth>} />
                        <Route path="dashboard/profile" element={<RequireAuth>
                            <Profile onShowItem={this.onShowItem} user={this.findUserById(this.state.currUser)}/>
                            {this.state.showFullItem && <EditProfile onShowItem={this.onShowItem} user={this.findUserById(this.state.currUser)} editUser={this.editUser}/>}
                        </RequireAuth>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category) {
        if (category === "all") {
            this.setState({currItems: this.state.items})
            return
        }
         this.setState({
             currItems: this.state.items.filter(el => el.category === category)
         })
    }

    findUserById(creator_id) {
        return this.state.allUsers[creator_id - 1]
    }

    editUser(data) {
        console.log(data)
    }

    addItem(data) {
        const id = this.state.items.length + 1
        const created_by = this.state.currUser
        this.setState({items: [...this.state.items, {id, created_by, ...data}]})
    }

    deleteItem(id) {
        this.setState({
            items: this.state.items.filter((el) => el.id !== id)
        })
    }

    editItem(data) {
        let allItems = this.state.items
        allItems[data.id - 1] = data

        this.setState({items: []}, () => {
            this.setState({items: [...allItems]})
        })
    }
}

export default App;
