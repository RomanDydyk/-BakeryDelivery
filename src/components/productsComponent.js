import "./style.css"
import {useEffect, useState} from "react";


function ProductsList(props) {

    const [productsList, setProductsList] = useState([
        {id:1, name:"Білий базований", price:23, imgUrl:"https://firebasestorage.googleapis.com/v0/b/argon-system-366911.appspot.com/o/img%2Ffree-png.ru-446.png?alt=media&token=b5d97f05-3046-445b-a428-f2340af89775"},
        {id:2, name:"Сірий різаний", price:31, imgUrl:"https://firebasestorage.googleapis.com/v0/b/argon-system-366911.appspot.com/o/img%2Fbreadgray.png?alt=media&token=53972d13-473e-4969-8843-1c4d50431735"},
        {id:3, name:"Протеїновий з висівками", price:52, imgUrl:"https://firebasestorage.googleapis.com/v0/b/argon-system-366911.appspot.com/o/img%2FProtein_bread.png?alt=media&token=178f7a32-87fa-43d0-9a49-b295658edc0f"},
        {id:4, name:"багет 158", price:45, imgUrl:"https://firebasestorage.googleapis.com/v0/b/argon-system-366911.appspot.com/o/img%2F14071.png?alt=media&token=cc09dac2-1a87-4bba-84ce-5f1f5a31989c"}
        ]);

    const [binList, setBinList] = useState(setOrNull());
    const [update, setUpdate] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem('orderList', JSON.stringify(binList))
        getTotal();
    }, [update]);

    async function getTotal() {
        let total = 0;
        await binList.forEach(order => {
            total += Number(order.count) * Number(productsList[binList.indexOf(order)].price);
        })
        setTotal(total)
    }
    function setOrNull() {
        if (localStorage.getItem('orderList') === null){
            let order = [];
            productsList.forEach(product => {
                order.push({id: product.id, count:0})
            })
            return order
        }
        else {
            return JSON.parse(localStorage.getItem('orderList'));
        }
    }

    const addItemToOrder = (id) =>(e) => {
        e.preventDefault()
        console.log(binList)
        binList.forEach(item => {
                if(item.id == id){
                    item.count++;
                    console.log("++");
                    setUpdate(update+1);
                }
            }
        )
    }
    const removeItemFromOrder = (id) =>(e) => {
        e.preventDefault()
        binList.forEach(item => {
                if(item.id == id){
                    if(item.count > 0){
                        item.count--;
                        console.log("--");
                        setUpdate(update+1);
                    }
                }
            }
        )
    }

    if(props.variant == "main"){
        return(
            <>
                {
                    productsList.map((product, index) =>(
                        <div className="products__card" key={product.id}>
                            <div className="products__bread"><img src={product.imgUrl} alt=""/>
                            </div>
                            <div className="products__info">
                                <div className="products__aboutbread">
                                    <p onClick={() => console.log(binList[index])}>{product.name}</p>
                                    <p>{product.price} грн.</p>
                                </div>
                                <div className="products__count"><a href="" onClick={removeItemFromOrder(product.id)}>-</a>
                                    <p>{binList[index].count}</p><a href="" onClick={addItemToOrder(product.id)}>+</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
    else if(props.variant == "bin"){
        return(
            <>
                {
                    productsList.map((product, index) =>(
                        <div className="forms__product" key={product.id}>
                            <img src={product.imgUrl} alt=""/>
                            <div className="products__aboutbread">
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                            <div className="products__count">
                                <a href="" onClick={removeItemFromOrder(product.id)}>-</a>
                                <p>{binList[index].count}</p>
                                <a href="" onClick={addItemToOrder(product.id)}>+</a>
                            </div>
                        </div>
                    ))
                }
                <div className="forms__total">
                    <p>Total: {total}грн</p>
                </div>
            </>
        )
    }
}
export default ProductsList