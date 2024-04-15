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
import axios from "axios";
import {LoadItems} from "./components/LoadItems";


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
            items: [],
            showFullItem : false,
            fullItem: {},
        }
        this.loadItems = this.loadItems.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        this.findUserById = this.findUserById.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.editItem = this.editItem.bind(this)
        this.setToken = this.setToken.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Presentation />} />
                        <Route path="registration" element={<Registration />} />
                        <Route path="login" element={<Login setToken={this.setToken}/>} />
                        <Route path="reset" element={<Reset />} />
                        <Route path="need-to-confirm" element={<NeedToConfirm />} />
                        <Route path="confirm" element={<Confirm />} />
                        <Route path="table" element={<RequireAuth>
                            <div>
                                <LoadItems loadItems={this.loadItems}/>
                                <Categories chooseCategory={this.chooseCategory}/>
                                <Items onShowItem={this.onShowItem} items={this.state.currItems} findUserById={this.findUserById}/>
                                {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem}/> }
                            </div>
                        </RequireAuth>} />
                        <Route path="dashboard/my" element={<RequireAuth>
                            <div>
                                <LoadItems loadItems={this.loadItems}/>
                                <CreateItem addItem={this.addItem}/>
                                <MyItems deleteItem={this.deleteItem} onShowItem={this.onShowItem} items={this.state.items} user={this.findUserById(localStorage.user_id)}/>
                                {this.state.showFullItem && <ShowMyItem editItem={this.editItem} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
                            </div>
                        </RequireAuth>} />
                        <Route path="dashboard/profile" element={<RequireAuth>
                            <Profile onShowItem={this.onShowItem}/>
                            {this.state.showFullItem && <EditProfile onShowItem={this.onShowItem}/>}
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
        console.log(this.state.currItems)
    }

    setToken(token) {
        this.state.accessToken = token
    }

    findUserById(creator_id) {
        if (creator_id !== undefined) {
            let config = {
                headers: {
                    Authorization: `Bearer ${localStorage.auth_token}`
                }
            }
            console.log(creator_id)
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
                    return response.data})
                .catch(function (error) {
                    console.log(error.response)
                })
        }
    }

    addItem(data) {
        let config = {
            headers: {
                Authorization: `Bearer ${localStorage.auth_token}`
            }
        }
        axios.post("https://api.dev.kodlmsh.ru/api/advertisement/manage/", {
            name: "test",
            ad_type: data.type,
            description: data.desc,
            price: data.price,
            category: data.category
        }, config)
            .then((access) => console.log(access.data.access))
            .catch((refresh) => console.log(refresh));
        window.location.reload()
    }

    deleteItem(id) {
        let config = {
            headers: {
                Authorization: `Bearer ${localStorage.auth_token}`
            }
        }
        axios.delete(`https://api.dev.kodlmsh.ru/api/advertisement/manage/${id}/`, config)
            .then((access) => console.log(access.data.access))
            .catch((refresh) => console.log(refresh));
        window.location.reload()
    }

    editItem(data) {
        switch (data.category) {
            case "repair":
                data.category = 1
                break
            case "farm":
                data.category = 2
                break
            case "building":
                data.category = 3
                break
            case "renovation":
                data.category = 4
                break
            default:
                data.category = 5
                break
        }
        console.log(data)
        let config = {
            headers: {
                Authorization: `Bearer ${localStorage.auth_token}`
            }
        }

        axios.patch(`https://api.dev.kodlmsh.ru/api/advertisement/manage/${data.id}/`, {
            description: data.desc,
            price: data.price,
            category: data.category,
            ad_type: data.type
        }, config)
            .then((access) => console.log(access.data.access))
            .catch((refresh) => console.log(refresh));
        window.location.reload()
    }

    loadItems() {
        let config = {
            headers: {
                Authorization: `Bearer ${localStorage.auth_token}`
            }
        }
        axios.get("https://api.dev.kodlmsh.ru/api/advertisement/search/", config)
            .then((response) => {
                let data = []
                response.data.map(el => {
                    switch (el.category) {
                        case 1:
                            el.category = "repair"
                            break
                        case 2:
                            el.category = "farm"
                            break
                        case 3:
                            el.category = "building"
                            break
                        case 4:
                            el.category = "renovation"
                            break
                        default:
                            el.category = "other"
                            break
                    }
                    el = {
                        id: el.id,
                        created_by: el.created_by.id,
                        desc: el.description,
                        price: el.price,
                        category: el.category,
                        type: el.ad_type
                    }
                    data.push(el)
                })
                this.setState({items: data})
                this.setState({currItems: data})
            })
    }
}

export default App;
