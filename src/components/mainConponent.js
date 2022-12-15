import "./style.css"
import ProductsList from "./productsComponent"

function MainConponent() {

    return(
        <div>
            <div className="nav__body">
                <p>У нас завжди смачний та свіжий хліб</p>
            </div>
            <div className="about" id="about">
                <div className="about__body">
                    <div className="about__header">
                        <h2>Про нас </h2><span>Завжди вчасно та смачно</span>
                    </div>
                    <div className="about__block">
                        <div className="about__image"><img src="/img/bread.png" alt=""/></div>
                        <div className="about__text">
                            <h3>Чому нас люблять</h3>
                            <p>Ми сімейна пекарня з власною доставку ще гарячої випічки та доступними цінами. Ми працюємо більше 10 років. Нам довіряють</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products" id="shop">
                <div className="products__body">
                    <div className="products__header"><img src="img/cereals.png" alt="" />
                        <div className="products__text">
                            <h2>Наша продукція</h2><span>Завжди свіжовипечений над дровах хліб</span>
                        </div>
                        <img src="img/cereal.png" alt="" />
                    </div>

                    <div className="products__cards">
                        <ProductsList variant="main" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainConponent