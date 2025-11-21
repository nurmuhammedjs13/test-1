import React from "react";
import style from "./Why.module.scss";
import WhyIcon1 from "../../../../../../assets/icons/MainWhyIcon1.svg";
import WhyIcon2 from "../../../../../../assets/icons/MainWhyIcon2.svg";
import WhyIcon3 from "../../../../../../assets/icons/MainWhyIcon3.svg";

function Why() {
    return (
        <section className={style.why}>
            <div className={style.content}>
                <div className={style.block1}>
                    <div className={style.texts}>
                        <h2 className={style.title}>Почему (название кур.)</h2>
                        <h2 className={style.description}>
                            Мы предоставляем множество функций, которые вы
                            можете использовать. Постепенное
                            накоплениеинформация
                        </h2>
                    </div>
                    <div className={style.texts}>
                        {" "}
                        <h2 className={style.titleNumber}>
                            Почему (название кур.)
                        </h2>
                        <h2 className={style.description}>
                            Мы предоставляем множество функций, которые вы
                            можете использовать. Постепенное
                            накоплениеинформация
                        </h2>
                    </div>
                    <div className={style.texts}>
                        {" "}
                        <h2 className={style.titleNumber}>
                            Почему (название кур.)
                        </h2>
                        <h2 className={style.description}>
                            Мы предоставляем множество функций, которые вы
                            можете использовать. Постепенное
                            накоплениеинформация
                        </h2>
                    </div>
                </div>
                <div className={style.block2}>
                    <div className={style.block2blocks}></div>
                    <div className={style.block2blocks}></div>
                    <div className={style.block2blocks}></div>
                </div>
            </div>
        </section>
    );
}

export default Why;
